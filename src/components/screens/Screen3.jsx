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
  const [additionalScreen, setAdditionalScreen] = useState(false);
  const visibleToFalse = () => setVisible(false);
  const showAdditionalScreen = () => setAdditionalScreen(true);
  useTimeout(visibleToFalse, 2000);
  let clickHandler;
  const info = data[count - 1];
  let componentToRender;
  if (visible) {
    componentToRender = (
      <PreScreen text="Let's get to know you!" visible={visible} />
    );
  } else if (additionalScreen) {
    componentToRender = (
      <>
        <Title
          margin='23'
          text='What do you need your glasses for?'
          width='auto'
        />
        <AnswerBigBlock
          height='84'
          text={"Near Vision"}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={`screen${count}_2`}
          checkChecked={checkChecked}
        />
        <AnswerBigBlock
          height='84'
          text={"Distance Vision"}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={`screen${count}_2`}
          checkChecked={checkChecked}
        />
        <AnswerBigBlock
          height='84'
          text={"Multifocal / Progressive"}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={`screen${count}_2`}
          checkChecked={checkChecked}
        />
        <BottomText
          text={"skip"}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={`screen${count}_2`}
          checkChecked={checkChecked}
        />
      </>
    );
  } else {
    componentToRender = (
      <>
        <Title margin='32' width='auto' text={info.title} />
        {info.answers.map((elem) => {
          if (elem.additionalScreen) {
            clickHandler = showAdditionalScreen;
          } else {
            clickHandler = setCount;
          }
          return (
            <AnswerBigBlock
              height='120'
              key={elem.id}
              text={elem.text}
              handleClick={clickHandler}
              handleChange={handleChange}
              inputName={`screen${count}`}
              checkChecked={checkChecked}
            />
          );
        })}
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
  return componentToRender;
}
