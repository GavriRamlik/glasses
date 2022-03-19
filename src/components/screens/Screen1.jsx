import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
export default function Screen1({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const info = data[count - 1];
  console.log(info);
  return (
    <>
      <Title margin='24' width='238' text={info.title} />
      {info.answers.map((elem) => (
        <AnswerBigBlock
          key={elem.id}
          text={elem.text}
          img={elem.img}
          value={elem.value}
          marginBetween={"16"}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={info.screenName}
          checkChecked={checkChecked}
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
