export default function AnswerBigBlock({
  margin = "14", //distance between blocks
  height = "138",
  text = "",
  img,
  marginBetween, // distance between content
  inputName,
  handleChange,
  checkChecked,
  handleClick,
}) {
  const style = {
    block: {
      height: `${height}px`,
      marginBottom: `${margin}px`,
    },
    text: {
      marginTop: img ? `${marginBetween}px` : "0",
    },
  };
  return (
    <label>
      <input
        type='radio'
        className='input peer'
        name={inputName}
        value={text}
        onChange={handleChange}
        checked={checkChecked(inputName, text)}
        onClick={() => handleClick((prev) => prev + 1)}
      />
      <div
        className='answer-card flex items-center justify-center flex-col w-[274px] cursor-pointer hover:shadow-inner transition-all group peer-checked:shadow-inner'
        // onClick={() => handleClick((prev) => prev + 1)}
        style={style.block}
      >
        {img && <img src={img} alt={text} />}
        <p className=' answer-text' style={style.text}>
          {text}
        </p>
      </div>
    </label>
  );
}
