import { motion } from "framer-motion";
import React from "react";
import tw from "twin.macro";
import "styled-components/macro";
import { AnswerCard, HiddenInput } from "./css-components";

export default function HorizontalImgBlock({
  margin = "16", //distance between blocks
  height = "89",
  imgWidth = "95",
  width = "304",
  marginLeft = "18",
  text = "",
  img,
  fontSize = "16",
  inputName,
  handleChange,
  checkChecked,
  handleClick,
  value,
}) {
  const style = {
    block: {
      height: `${height}px`,
      maxWidth: `${width}px`,
    },
    imgBox: {
      width: `${imgWidth}px`,
    },
    text: {
      fontSize: `${fontSize}px`,
      marginLeft: `${marginLeft}px`,
    },
  };
  return (
    <motion.label
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={style.block}
      tw='w-full'
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
      <AnswerCard tw=' flex items-center cursor-pointer hover:shadow-inner transition-all peer-checked:shadow-inner h-full'>
        <div tw='pl-[25px] border-l-[#dedede] border-r-[1px]' style={style.imgBox}>
          {React.isValidElement(img) ? img : img && <img src={img} alt={text} />}
        </div>
        <p tw='font-semibold leading-[25px] text-textAnswer' style={style.text}>
          {text}
        </p>
      </AnswerCard>
    </motion.label>
  );
}
