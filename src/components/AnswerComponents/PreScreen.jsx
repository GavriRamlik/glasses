import { AnimatePresence, motion } from "framer-motion";
import like from "../../images/common/like.svg";
export default function PreScreen({ text, visible }) {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      {visible && (
        <motion.div
          className='absolute t-[100px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img src={like} alt='like' className='mx-auto' />
          <h2 className='title mt-[25px]'>{text}</h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
