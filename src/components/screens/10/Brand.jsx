import Title from "../../AnswerComponents/Title";
import data from "../../../data";
import Slide from "../../AnswerComponents/Slide";
import ScrollContainer from "react-indiana-drag-scroll";
import tw from "twin.macro";
import "styled-components/macro";
import { Button } from "../../AnswerComponents/css-components";

export default function Brand({ count, setCount, checkChecked, setFormData, formData }) {
  const info = data[count - 1];
  return (
    <>
      <Title marginBot='10' marginTop='38' width='341' text={info.title} />
      <p tw='mb-2 text-base leading-[30px] text-description'>
        You can pick more than one.
      </p>
      <ScrollContainer tw='max-w-full grid grid-rows-3 gap-[10px] p-3 justify-items-center relative grid-cols-[repeat(4, 160px)]'>
        {info.answers.map(elem => (
          <Slide
            key={elem.id}
            img={elem.img}
            handleClick={setCount}
            inputName={info.screenName}
            checkChecked={checkChecked}
            value={elem.value}
            setFormData={setFormData}
            formData={formData}
          />
        ))}
      </ScrollContainer>
      {formData[info.screenName].length === 0 ? (
        <Button tw=' mt-4' disabled>
          Continue
        </Button>
      ) : (
        <Button tw=' mt-4' onClick={setCount} type='button'>
          Continue
        </Button>
      )}
    </>
  );
}
