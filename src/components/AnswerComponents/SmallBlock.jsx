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
  value,
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
      className='max-w-[318px] w-full'
    >
      <input
        type='radio'
        className='input peer'
        name={inputName}
        value={value}
        onChange={handleChange}
        checked={checkChecked(inputName, value)}
        onClick={handleClick}
      />
      <div
        className='answer-card flex items-center justify-between shrink cursor-pointer hover:shadow-inner transition-all group peer-checked:shadow-inner px-[21px]'
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