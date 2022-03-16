import { AnimatePresence, motion } from "framer-motion";
import like from "../../images/common/like.svg";
export default function PreScreen({ text }) {
  const style = {
    boxShadow:
      "-9px -9px 16px #FFFFFF, 9px 9px 16px rgba(163, 177, 198, 0.325148)",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      className='mt-[58px]'
      animate={{ opacity: 1 }}
    >
      <div
        className='flex items-center justify-center bg-[#F7F8F9] mx-auto rounded-full w-[131px] h-[131px]'
        style={style}
      >
        <img src={like} alt='like' />
      </div>
      <h2 className='title mt-[40px]'>{text}</h2>
    </motion.div>
  );
}
