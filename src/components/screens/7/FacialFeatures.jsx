import Title from "../../AnswerComponents/Title";
import BottomText from "../../AnswerComponents/BottomText";
import data from "../../../data";
import AnswerBigBlock from "../../AnswerComponents/AnswerBigBlock";

export default function FacialFeatures({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const info = data[count - 1];
  return (
    <>
      <Title text={info.title} />
      <div className='flex justify-center items-center flex-wrap min-w-full gap-3'>
        {info.answers.map((elem) => (
          <AnswerBigBlock
            width='314'
            height='97'
            key={elem.id}
            text={elem.text}
            handleClick={setCount}
            handleChange={handleChange}
            inputName={info.screenName}
            checkChecked={checkChecked}
            value={elem.value}
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
