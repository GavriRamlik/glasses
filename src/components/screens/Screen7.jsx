import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";

export default function Screen7({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const info = data[count - 1];
  console.log("hu");
  return (
    <>
      <Title margin="32" width="240" text={info.title} />
      {info.answers.map((elem) => (
        <AnswerBigBlock
          height="97"
          key={elem.id}
          text={elem.text}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={info.screenName}
          checkChecked={checkChecked}
          value={elem.value}
        />
      ))}
      <BottomText
        text={info.bottomText}
        handleClick={setCount}
        handleChange={handleChange}
        inputName={info.screenName}
        checkChecked={checkChecked}
      />
    </>
  );
}
