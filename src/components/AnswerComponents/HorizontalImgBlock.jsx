import { motion } from "framer-motion";

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
      className='w-full'
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
      <div className='answer-card flex items-center cursor-pointer hover:shadow-inner transition-all peer-checked:shadow-inner h-full'>
        <div
          className='pl-[25px] border-l-[#dedede] border-r-[1px]'
          style={style.imgBox}
        >
          <img src={img} alt={text} />
        </div>
        <p
          className={`font-semibold leading-[25px] text-textAnswer`}
          style={style.text}
        >
          {text}
        </p>
      </div>
    </motion.label>
  );
}
