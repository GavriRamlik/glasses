import tw from "twin.macro";
import "styled-components/macro";
import AnswerBigBlock from "../../AnswerComponents/AnswerBigBlock";
import Title from "../../AnswerComponents/Title";
import BottomText from "../../AnswerComponents/BottomText";
import data from "../../../data";

export default function Gender({ count, setCount, handleChange, checkChecked }) {
  const info = data[count - 1];
  return (
    <>
      <Title marginBot='24' text={info.title} />
      <div tw='flex justify-center items-center flex-wrap min-w-full gap-3'>
        {info.answers.map(elem => (
          <AnswerBigBlock
            key={elem.id}
            text={elem.text}
            img={elem.img}
            value={elem.value}
            marginBetween={"16"}
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
