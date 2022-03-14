import { motion } from "framer-motion";

export default function AnswerBigBlock({
  margin = "12", //distance between blocks
  height = "56",
  text = "",
  size = "",
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
  };
  return (
    <motion.label
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <input
        type='radio'
        className='input peer'
        name={inputName}
        value={text}
        onChange={handleChange}
        checked={checkChecked(inputName, text)}
        onClick={handleClick}
      />
      <div
        className='answer-card flex items-center justify-between w-[318px] cursor-pointer hover:shadow-inner transition-all group peer-checked:shadow-inner px-[21px]'
        style={style.block}
      >
        <p className='answer-text font-normal' style={style.text}>
          {text}
        </p>
        <p className='text-black font-bold leading-[25px] text-[18px]'>
          {size}
        </p>
      </div>
    </motion.label>
  );
}
