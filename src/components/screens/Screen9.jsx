import Title from "../AnswerComponents/Title";
import data from "../../data";
import AnswerBigBlock from "../AnswerComponents/AnswerBigBlock";
export default function Screen9({
  count,
  setCount,
  handleChange,
  checkChecked,
}) {
  const info = data[count - 1];
  let handleClick;
  return (
    <>
      <Title margin='32' width='254' text={info.title} />
      {info.answers.map((elem) => {
        if (elem.brands) {
          handleClick = setCount;
        } else {
          // handleClick =
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
    </>
  );
}
