import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Slide from "../AnswerComponents/Slide";
import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
// Import Swiper styles
export default function Screen7({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const info = data[count - 1];
  return (
    <>
      <Title margin='10' marginTop='38' width='341' text={info.title} />
      <p className='mb-[26px] text-base leading-[30px] text-description'>
        You can pick more than one.
      </p>
      <ScrollContainer className='w-full grid grid-rows-3 gap-[10px] slider px-3'>
        {info.answers.map((elem) => (
          <Slide
            key={elem.id}
            img={elem.img}
            text={elem.text}
            handleClick={setCount}
            handleChange={handleChange}
            inputName={info.screenName}
            checkChecked={checkChecked}
            value={elem.value}
          />
        ))}
      </ScrollContainer>
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
