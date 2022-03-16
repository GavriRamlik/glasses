import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
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
  return (
    <>
      <Title margin='24' width='243' text={info.title} />
      {info.answers.map((elem) => {
        let imgData;
        let width = "95";
        let marginLeft = "24";
        if (data[0].answers[0].text === formData.screen1) {
          imgData = elem.img.woman;
        } else if (data[0].answers[1].text === formData.screen1) {
          imgData = elem.img.men;
        } else {
          imgData = elem.img.both;
          marginLeft = "15";
          width = "118";
        }
        return (
          <HorizontalImgBlock
            marginLeft={marginLeft}
            margin={"14"}
            fontSize={"17"}
            width={"314"}
            key={elem.id}
            text={elem.text}
            img={imgData}
            imgWidth={width}
            marginBetween={"12"}
            handleClick={setCount}
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
