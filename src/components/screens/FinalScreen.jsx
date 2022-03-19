import logo from "../../images/start_screen/logo.svg";
import exit from "../../images/common/exit.svg";
import gift from "../../images/common/gift.svg";
import { motion } from "framer-motion";
export default function Screen10({ clickHandler }) {
  const style = {
    imgBlock: {
      boxShadow:
        "-9px -9px 16px #FFFFFF, 9px 9px 16px rgba(163, 177, 198, 0.325148)",
    },
    progressLine: {
      background: "linear-gradient(290.47deg, #3797FA 11.33%, #45C9FF 83.66%)",
    },
  };
  return (
    <>
      <header className='px-[25px] h-[66px] flex items-center justify-between bg-white relative'>
        <img src={logo} alt='logo' />
        <button onClick={clickHandler} type='button'>
          <img src={exit} alt='exit' />
        </button>
        <span className='absolute bottom-[-8px] left-0 right-0 bg-[#D8D8D8] w-full h-2 overflow-hidden'>
          <div
            className={`h-full w-[100%] absolute`}
            style={style.progressLine}
          ></div>
        </span>
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mt-[46px] flex flex-col items-center relative h-[500px] pr-3'
      >
        <div
          className='flex items-center justify-center bg-[#F7F8F9] mx-auto rounded-full w-[131px] h-[131px] mb-[33px]'
          style={style.imgBlock}
        >
          <img src={gift} alt='like' className='mr-1' />
        </div>
        <h1 className='title mb-[12px] text-[20px] mx-[25px] text-center'>
          We've found some awesome frames for you!
        </h1>
        <p className='font-bold text-[15px] leading-[26px] text-center text-grayCold max-w-[272px] mb-[50px]'>
          Send the results to your email to receive special discounts.
        </p>
        <button className='btn' type='submit'>
          Send
        </button>
        <p className='absolute bottom-0 leading-[14px] text-grayDark text-center text-xs font-roboto mx-[44px]'>
          By clicking ‘Send’ you agree to our{" "}
          <a href='/' className='hover:underline'>
            Terms of Use & Privacy Policy
          </a>{" "}
          and receiving promotion emails
        </p>
      </motion.main>
    </>
  );
}
