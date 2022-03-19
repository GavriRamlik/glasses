import Title from "../AnswerComponents/Title";
import data from "../../data";
import Slide from "../AnswerComponents/Slide";
import ScrollContainer from "react-indiana-drag-scroll";
export default function Screen8({
  count,
  setCount,
  checkChecked,
  setFormData,
  formData,
}) {
  const info = data[count - 1];
  return (
    <>
      <Title margin='10' marginTop='38' width='341' text={info.title} />
      <p className='mb-2 text-base leading-[30px] text-description'>
        You can pick more than one.
      </p>
      <ScrollContainer className='w-full grid grid-rows-3 gap-[10px] slider px-3 py-3'>
        {info.answers.map((elem) => (
          <Slide
            key={elem.id}
            img={elem.img}
            text={elem.text}
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
        <button className='btn mt-4' disabled>
          Continue
        </button>
      ) : (
        <button className='btn mt-4' onClick={setCount} type='button'>
          Continue
        </button>
      )}
    </>
  );
}
