import { motion } from "framer-motion";

export default function AnswerBigBlock({
  text = "",
  img,
  marginBetween, // distance between content
  inputName,
  handleChange,
  checkChecked,
  handleClick, // we accept clickHandler because i want that user can press checked input and go to the next screen
  value,
}) {
  return (
    <motion.label
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <input
        type='checkbox'
        className='input peer'
        name={inputName}
        value={value}
        onChange={handleChange}
        checked={checkChecked(inputName, value)}
        onClick={handleClick}
      />
      <div className='answer-card flex items-center justify-center flex-col cursor-pointer hover:shadow-inner transition-all group peer-checked:shadow-inner w-[160px] h-[103px]'>
        <img src={img} alt={text} />
        <p className='answer-text mt-[8px] text-[13px] text-description'>
          {text}
        </p>
      </div>
    </motion.label>
  );
}
