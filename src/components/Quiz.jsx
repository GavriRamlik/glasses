import React, { useState } from "react";
import exit from "../images/common/exit.svg";
import arrow_left from "../images/common/arrow_left.svg";
import Question from "./Question";
function Quiz({ setStartToTrue }) {
  const [count, setCount] = useState(1);
  if (count === 0) {
    setStartToTrue();
  }
  const progressLine = {
    background: "linear-gradient(290.47deg, #3797FA 11.33%, #45C9FF 83.66%)",
    left: `-${(10 - count) * 10 + 4}%`,
  };
  return (
    <>
      <header className='px-[23px] h-[58px] flex items-center justify-between bg-white relative'>
        <button onClick={() => setCount((prev) => prev - 1)}>
          <img src={arrow_left} alt='back' />
        </button>
        <p className='font-open text-[18px] leading-[19px] text-[#3C5060]'>
          {count}/10
        </p>
        <button onClick={setStartToTrue}>
          <img src={exit} alt='exit' />
        </button>
        <span className='absolute bottom-[-8px] left-0 right-0 bg-[#D8D8D8] w-full h-2 overflow-hidden'>
          <div
            className={`transition-all h-full w-[100%] absolute rounded-[3px]`}
            style={progressLine}
          ></div>
        </span>
      </header>
      <form className='mt-[50px] flex flex-col items-center relative h-[505px]'>
        <Question
          setCount={() => setCount((prev) => prev + 1)}
          count={count}
          setStartToTrue={setStartToTrue}
        />
      </form>
    </>
  );
}

export default Quiz;
