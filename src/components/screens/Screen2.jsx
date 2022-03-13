import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";

export default function Screen2({
  count,
  setCount,
  handleChange,
  checkChecked,
  formData,
}) {
  const info = data[count - 1];
  return (
    <>
      <Title margin='32' width='243' text={info.title} />
      {info.answers.map((elem) => (
        <AnswerBigBlock
          key={elem.id}
          text={elem.text}
          img={
            data[0].answers[0].text === formData.screen1
              ? elem.img.woman
              : elem.img.men
          }
          marginBetween={elem.marginBetween}
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
