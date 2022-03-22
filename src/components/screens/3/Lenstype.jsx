import AnswerBigBlock from "../../AnswerComponents/AnswerBigBlock";
import Title from "../../AnswerComponents/Title";
import BottomText from "../../AnswerComponents/BottomText";
import data from "../../../data";
import { useTimeout } from "usehooks-ts";
import { useState } from "react";
import PreScreen from "../../AnswerComponents/PreScreen";

export default function Lenstype({
  count,
  setCount,
  handleChange,
  checkChecked,
  formData,
}) {
  const [visible, setVisible] = useState(true);
  const [additionalScreen, setAdditionalScreen] = useState(false);
  const visibleToFalse = () => setVisible(false);
  const showAdditionalScreen = () => setAdditionalScreen(true);
  useTimeout(visibleToFalse, 2000);
  let clickHandler;
  const info = data[count - 1];
  let componentToRender;
  if (visible) {
    componentToRender = (
      <PreScreen text="Let's get to know you!" visible={visible} />
    );
  } else if (additionalScreen) {
    // screen 3.2
    componentToRender = (
      <>
        <Title marginBot='23' text={info.anotherScreen.title} />
        <div className='flex justify-center items-center flex-wrap min-w-full gap-3'>
          {info.anotherScreen.answers.map((elem) => (
            <AnswerBigBlock
              width='294'
              height='84'
              key={elem.id}
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
        />
      </>
    );
  } else {
    // 3.1
    componentToRender = (
      <>
        <Title text={info.title} />
        <div className='flex justify-center items-center flex-wrap min-w-full gap-3 mx-5'>
          {info.answers.map((elem) => {
            if (elem.additionalScreen) {
              clickHandler = showAdditionalScreen;
            } else {
              clickHandler = setCount;
            }
            return (
              <AnswerBigBlock
                height='120'
                key={elem.id}
                text={elem.text}
                handleClick={clickHandler}
                handleChange={handleChange}
                inputName={info.screenName}
                checkChecked={checkChecked}
                value={"skip"}
                input={false}
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
  return componentToRender;
}
