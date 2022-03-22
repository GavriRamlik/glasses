import AnswerBigBlock from "../../AnswerComponents/AnswerBigBlock";
import Title from "../../AnswerComponents/Title";
import data from "../../../data";
import HorizontalImgBlock from "../../AnswerComponents/HorizontalImgBlock";
export default function ShadeOrBlueLight({
  count,
  setCount,
  handleChange,
  checkChecked,
  formData,
}) {
  let eyeScreen = formData.eyewear_type === "211";
  let info = eyeScreen ? data[count - 1].sun : data[count - 1].eye;
  return eyeScreen ? (
    <>
      <Title text={info.title} />
      <div className='flex justify-center items-center flex-wrap min-w-full gap-3'>
        {info.answers.map((elem) => (
          <HorizontalImgBlock
            key={elem.id}
            text={elem.text}
            img={elem.img}
            value={elem.value}
            handleClick={setCount}
            handleChange={handleChange}
            inputName={info.screenName}
            checkChecked={checkChecked}
          />
        ))}
      </div>
    </>
  ) : (
    <>
      <Title text={info.title} />
      <div className='flex justify-center items-center flex-wrap min-w-full gap-3'>
        {info.answers.map((elem) => (
          <AnswerBigBlock
            key={elem.id}
            text={elem.text}
            handleClick={setCount}
            handleChange={handleChange}
            value={elem.value}
            inputName={info.screenName}
            checkChecked={checkChecked}
          />
        ))}
      </div>
    </>
  );
}
