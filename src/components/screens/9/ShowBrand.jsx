import Title from "../../AnswerComponents/Title";
import data from "../../../data";
import AnswerBigBlock from "../../AnswerComponents/AnswerBigBlock";
export default function ShowBrand({ count, setCount, setLastScreen }) {
  const info = data[count - 1];
  let handleClick;
  return (
    <>
      <Title margin='32' text={info.title} />
      <div className='flex justify-center items-center flex-wrap min-w-full gap-3'>
        {info.answers.map((elem) => {
          if (elem.brands) {
            handleClick = setCount;
          } else {
            handleClick = setLastScreen;
          }
          return (
            <AnswerBigBlock
              height='120'
              key={elem.id}
              text={elem.text}
              handleClick={handleClick}
              marginBetween='16'
              input={false}
            />
          );
        })}
      </div>
    </>
  );
}
