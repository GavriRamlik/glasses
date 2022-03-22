import AnswerBigBlock from "../../AnswerComponents/AnswerBigBlock";
import Title from "../../AnswerComponents/Title";
import BottomText from "../../AnswerComponents/BottomText";
import data from "../../../data";

export default function EyewearType({
  count,
  setCount,
  handleChange,
  checkChecked,
  formData,
}) {
  const info = data[count - 1];
  return (
    <>
      <Title marginX='55' text={info.title} />
      <div className='flex justify-center items-center flex-wrap min-w-full gap-3'>
        {info.answers.map((elem) => (
          <AnswerBigBlock
            key={elem.id}
            text={elem.text}
            value={elem.value}
            img={
              elem.img[formData.gender]
                ? elem.img[formData.gender]
                : elem.img["4"]
            }
            marginBetween={"18"}
            handleClick={setCount}
            handleChange={handleChange}
            inputName={info.screenName}
            checkChecked={checkChecked}
          />
        ))}
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
