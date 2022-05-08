import { motion } from "framer-motion";
import Like from "../../images/common/Like.jsx";
import tw from "twin.macro";
import "styled-components/macro";
import { MainTitle } from "./css-components.jsx";

export default function PreScreen({ text }) {
  const style = {
    boxShadow: "-9px -9px 16px #FFFFFF, 9px 9px 16px rgba(163, 177, 198, 0.325148)",
  };
  return (
    <motion.div initial={{ opacity: 0 }} tw='mt-[58px]' animate={{ opacity: 1 }}>
      <div
        tw='flex items-center justify-center bg-[#F7F8F9] mx-auto rounded-full w-[131px] h-[131px]'
        style={style}
      >
        {<Like />}
      </div>
      <MainTitle tw='mt-[40px]'>{text}</MainTitle>
    </motion.div>
  );
}
