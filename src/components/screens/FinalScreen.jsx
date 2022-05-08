import Logo from "../../images/start_screen/Logo.jsx";
import Exit from "../../images/common/Exit.jsx";
import Gift from "../../images/common/Gift.jsx";
import { motion } from "framer-motion";
import tw from "twin.macro";
import "styled-components/macro";
import { Button, MainTitle } from "../AnswerComponents/css-components.jsx";
export default function Screen10({ clickHandler }) {
  const style = {
    imgBlock: {
      boxShadow: "-9px -9px 16px #FFFFFF, 9px 9px 16px rgba(163, 177, 198, 0.325148)",
    },
    progressLine: {
      background: "linear-gradient(290.47deg, #3797FA 11.33%, #45C9FF 83.66%)",
    },
  };
  return (
    <>
      <header tw='px-[25px] h-[var(--header)] flex items-center justify-between bg-white relative'>
        <Logo />
        <button onClick={clickHandler} type='button'>
          <Exit />
        </button>
        <span tw='absolute bottom-[-8px] left-0 right-0 bg-[#D8D8D8] w-full h-2 overflow-hidden'>
          <div tw='h-full w-[100%] absolute' style={style.progressLine}></div>
        </span>
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        tw='pt-[46px] flex flex-col items-center h-[calc(100% - var(--header))]'
      >
        <div
          tw='flex items-center justify-center bg-[#F7F8F9] mx-auto rounded-full w-[131px] h-[131px] mb-[33px]'
          style={style.imgBlock}
        >
          <Gift />
        </div>
        <MainTitle tw='mb-[12px] text-[20px] mx-[25px] text-center' as='h1'>
          We've found some awesome frames for you!
        </MainTitle>
        <p
          tw='font-bold text-[15px] leading-[26px] text-center  max-w-[272px] mb-[50px]'
          className='text-grayCold'
        >
          Send the results to your email to receive special discounts.
        </p>
        <Button type='submit'>Send</Button>
        <p tw='mt-auto leading-[14px] text-grayDark text-center text-xs font-roboto mx-[44px]'>
          By clicking ‘Send’ you agree to our{" "}
          <a href='/' tw='hover:underline'>
            Terms of Use & Privacy Policy
          </a>{" "}
          and receiving promotion emails
        </p>
      </motion.main>
    </>
  );
}
