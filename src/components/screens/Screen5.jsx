import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
import HorizontalImgBlock from "../AnswerComponents/HorizontalImgBlock";
export default function Screen5({
  count,
  setCount,
  handleChange,
  checkChecked,
  formData,
}) {
  const eyeScreen = formData.screen2 === data[1].answers[0].text;
  const info = eyeScreen ? data[count - 1].eye : data[count - 1].sun;
  return eyeScreen ? (
    <>
      <Title margin='32' width='330' text={info.title} />
      {info.answers.map((elem) => (
        <AnswerBigBlock
          key={elem.id}
          text={elem.text}
          img={elem.img}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={`screen${count}`}
          checkChecked={checkChecked}
        />
      ))}
    </>
  ) : (
    <>
      <Title margin='32' width='330' text={info.title} />
      {info.answers.map((elem) => (
        <HorizontalImgBlock
          key={elem.id}
          text={elem.text}
          img={elem.img}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={`screen${count}`}
          checkChecked={checkChecked}
        />
      ))}
    </>
  );
}
