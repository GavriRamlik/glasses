import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
import HorizontalImgBlock from "../AnswerComponents/HorizontalImgBlock";

export default function Screen6({
  count,
  setCount,
  handleChange,
  checkChecked,
  formData,
}) {
  const info = data[count - 1];
  let imgData;
  let width = "95";
  let marginLeft = "24";
  let fontSize = "18";
  return (
    <>
      <Title width="243" text={info.title} />
      {info.answers.map((elem) => {
        if (formData.gender === "5") {
          imgData = elem.img.woman;
        } else if (formData.gender === "4") {
          imgData = elem.img.men;
        } else {
          imgData = elem.img.both;
          marginLeft = "15";
          width = "118";
          fontSize = "18";
        }
        return (
          <HorizontalImgBlock
            marginLeft={marginLeft}
            margin={"14"}
            fontSize={fontSize}
            width={"314"}
            key={elem.id}
            text={elem.text}
            img={imgData}
            imgWidth={width}
            value={elem.value}
            marginBetween={"12"}
            handleClick={setCount}
            handleChange={handleChange}
            inputName={info.screenName}
            checkChecked={checkChecked}
          />
        );
      })}
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
