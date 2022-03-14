import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
import SmallBlock from "../AnswerComponents/SmallBlock";
import lense from "../../images/fourth_ques/lense.svg";

export default function Screen4({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const info = data[count - 1];
  return (
    <>
      <Title margin='38' width='210' text={info.title} />
      <img src={lense} alt='lense' className='mb-[35px] h-[118px]' />
      {info.answers.map((elem) => (
        <SmallBlock
          key={elem.id}
          text={elem.text}
          size={elem.size}
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
