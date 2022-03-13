import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
import { useTimeout } from "usehooks-ts";
import { useState } from "react";
import PreScreen from "../AnswerComponents/PreScreen";

export default function Screen3({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const [visible, setVisible] = useState(true);
  const visibleToFalse = () => setVisible(false);
  useTimeout(visibleToFalse, 2000);
  const info = data[count - 1];
  return visible ? (
    <PreScreen text="Let's get to know you!" visible={visible} />
  ) : (
    <>
      <Title margin='32' width='auto' text={info.title} />
      {info.answers.map((elem) => (
        <AnswerBigBlock
          height='120'
          key={elem.id}
          text={elem.text}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={`screen${count}`}
          checkChecked={checkChecked}
        />
      ))}
      <BottomText
        text={info.bottomText}
        handleClick={setCount}
        handleChange={handleChange}
        inputName={`screen${count}`}
        checkChecked={checkChecked}
      />
    </>
  );
}
