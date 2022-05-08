import { motion } from "framer-motion";
import tw from "twin.macro";
import "styled-components/macro";
import { AnswerCard, AnswerText, HiddenInput } from "./css-components";

export default function SmallBlock({
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
      tw='max-w-[318px] w-full'
    >
      <HiddenInput
        type='radio'
        className='peer'
        name={inputName}
        value={value}
        onChange={handleChange}
        checked={checkChecked(inputName, value)}
        onClick={handleClick}
      />
      <AnswerCard
        tw=' flex items-center justify-between flex-shrink cursor-pointer hover:shadow-inner transition-all peer-checked:shadow-inner px-[21px]'
        style={style.block}
      >
        <AnswerText tw='font-normal'>{text}</AnswerText>
        <p tw='text-black font-bold leading-[25px] text-[18px]'>{size}</p>
      </AnswerCard>
    </motion.label>
  );
}
