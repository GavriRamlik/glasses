import AnswerBigBlock from "../../AnswerComponents/AnswerBigBlock";
import Title from "../../AnswerComponents/Title";
import BottomText from "../../AnswerComponents/BottomText";
import data from "../../../data";
import SmallBlock from "../../AnswerComponents/SmallBlock";
import Lense from "../../../images/fourth_ques/Lense.jsx";
import { useState, useEffect } from "react";
import PreScreen from "../../AnswerComponents/PreScreen";
import tw from "twin.macro";
import "styled-components/macro";

export default function FrameSize({ count, setCount, handleChange, checkChecked }) {
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
      <PreScreen text='No worries, we’ve got you!' /> // 4.2
    ) : (
      <>
        <Title text={info.anotherScreen.title} marginX='40' />
        <div tw='flex justify-center items-center flex-wrap min-w-full gap-3'>
          {info.anotherScreen.answers.map(elem => (
            <AnswerBigBlock
              width='304'
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
        </div>

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
    // 4
    <>
      <Title marginX='49' text={info.title} />
      <div tw='mb-3'>
        <Lense />
      </div>

      {info.answers.map(elem => (
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
