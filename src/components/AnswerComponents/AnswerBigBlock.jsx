import { motion } from "framer-motion";
import React from "react";
import tw from "twin.macro";
import "styled-components/macro";
import { AnswerCard, AnswerText, HiddenInput } from "./css-components";

export default function AnswerBigBlock({
  height = "138",
  text = "",
  img = null,
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
      maxWidth: `${width}px`,
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
      tw='w-full'
      style={style.block}
    >
      {input && (
        <HiddenInput
          type='radio'
          className='peer'
          name={inputName}
          value={value}
          onChange={handleChange}
          checked={checkChecked(inputName, value)}
          onClick={handleClick}
        />
      )}
      <AnswerCard
        tw='flex items-center justify-center flex-col cursor-pointer hover:shadow-inner transition-all peer-checked:shadow-inner w-full h-full'
        onClick={input ? () => {} : handleClick}
      >
        {" "}
        {React.isValidElement(img) ? img : img && <img src={img} alt={text} />}
        <AnswerText style={style.text}>{text}</AnswerText>
      </AnswerCard>
    </motion.label>
  );
}
