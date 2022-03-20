import { motion } from "framer-motion";

export default function AnswerBigBlock({
  margin = "14", //distance between blocks
  height = "138",
  text = "",
  img,
  width = "274",
  marginBetween, // distance between content
  inputName,
  handleChange,
  checkChecked,
  handleClick, // we accept clickHandler because i want that user can press checked input and go to the next screen
  value,
  input = true,
}) {
  const style = {
    block: {
      height: `${height}px`,
      marginBottom: `${margin}px`,
      width: `${width}px`,
    },
    text: {
      marginTop: img ? `${marginBetween}px` : "0",
    },
  };
  return (
    <motion.label
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {input && (
        <input
          type='radio'
          className='input peer'
          name={inputName}
          value={value}
          onChange={handleChange}
          checked={checkChecked(inputName, value)}
          onClick={handleClick}
        />
      )}

      <div
        className='answer-card flex items-center justify-center flex-col cursor-pointer hover:shadow-inner transition-all peer-checked:shadow-inner'
        style={style.block}
        onClick={input ? () => {} : handleClick}
      >
        {img && <img src={img} alt={text} />}
        <p className=' answer-text' style={style.text}>
          {text}
        </p>
      </div>
    </motion.label>
  );
}
