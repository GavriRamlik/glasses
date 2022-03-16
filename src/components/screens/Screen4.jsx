import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
import Title from "../AnswerComponents/Title";
import BottomText from "../AnswerComponents/BottomText";
import data from "../../data";
import SmallBlock from "../AnswerComponents/SmallBlock";
import lense from "../../images/fourth_ques/lense.svg";
import { useState, useEffect } from "react";
import PreScreen from "../AnswerComponents/PreScreen";

export default function Screen4({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const [additionalScreen, setAdditionalScreen] = useState(false);
  const [visible, setVisible] = useState(true);
  const toggleScreen = () => setAdditionalScreen(true);
  const toggleVisible = () => setVisible(false);
  useEffect(() => {
    if (additionalScreen === true) {
      setTimeout(toggleVisible, 2000);
    }
  }, [additionalScreen]);
  const info = data[count - 1];
  return additionalScreen ? (
    visible ? (
      <PreScreen text='No worries, we’ve got you!' />
    ) : (
      <>
        <Title margin='32' text={info.anotherScreen.title} width='210' />
        {info.anotherScreen.answers.map((elem) => (
          <AnswerBigBlock
            key={elem.id}
            height='84'
            margin='11'
            text={elem.text}
            value={elem.value}
            handleClick={setCount}
            handleChange={handleChange}
            inputName={info.screenName}
            checkChecked={checkChecked}
          />
        ))}

        <BottomText
          text={info.anotherScreen.bottomText}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={info.screenName}
          checkChecked={checkChecked}
          value='none'
        />
      </>
    )
  ) : (
    <>
      <Title margin='38' width='210' text={info.title} />
      <img src={lense} alt='lense' className='mb-[35px] h-[118px]' />
      {info.answers.map((elem) => (
        <SmallBlock
          key={elem.id}
          text={elem.text}
          size={elem.size}
          value={elem.value}
          marginBetween={elem.marginBetween}
          handleClick={setCount}
          handleChange={handleChange}
          inputName={info.screenName}
          checkChecked={checkChecked}
        />
      ))}
      <BottomText
        text={info.bottomText}
        handleClick={toggleScreen}
        handleChange={handleChange}
        inputName={info.screenName}
        checkChecked={checkChecked}
      />
    </>
  );
}
