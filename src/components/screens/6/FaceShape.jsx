import Title from "../../AnswerComponents/Title";
import BottomText from "../../AnswerComponents/BottomText";
import data from "../../../data";
import HorizontalImgBlock from "../../AnswerComponents/HorizontalImgBlock";
import tw from "twin.macro";
import "styled-components/macro";

export default function FaceShape({
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
      <Title text={info.title} />
      <div tw='flex justify-center items-center flex-wrap min-w-full gap-3'>
        {info.answers.map(elem => {
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
      </div>
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
