import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Title from "../AnswerComponents/Title";
import data from "../../data";
import HorizontalImgBlock from "../AnswerComponents/HorizontalImgBlock";
export default function Screen5({
  count,
  setCount,
  handleChange,
  checkChecked,
  formData,
}) {
  const eyeScreen = formData.eyewear_type === "210";
  const info = eyeScreen ? data[count - 1].eye : data[count - 1].sun;
  return eyeScreen ? (
    <>
      <Title width="330" text={info.title} />
      {info.answers.map((elem) => (
        <AnswerBigBlock
          key={elem.id}
          text={elem.text}
          handleClick={setCount}
          handleChange={handleChange}
          value={elem.value}
          inputName={info.screenName}
          checkChecked={checkChecked}
        />
      ))}
    </>
  ) : (
    <>
      <Title width="330" text={info.title} />
      {info.answers.map((elem) => (
        <HorizontalImgBlock
          key={elem.id}
          text={elem.text}
          img={elem.img}
          value={elem.value}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={info.screenName}
          checkChecked={checkChecked}
        />
      ))}
    </>
  );
}
