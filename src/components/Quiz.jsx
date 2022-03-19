import React, { useState } from "react";
import exit from "../images/common/exit.svg";
import arrow_left from "../images/common/arrow_left.svg";
import Question from "./Question";
import data from "../data";
import FinalScreen from "./screens/FinalScreen";

function Quiz({ setStartToTrue, formData, setFormData }) {
  const [count, setCount] = useState(1);

  const end = data.length + 1 === count; // defines end of quizz
  if (count === 0) {
    setStartToTrue();
  }
  const progressLine = {
    background: "linear-gradient(290.47deg, #3797FA 11.33%, #45C9FF 83.66%)",
    left: `-${104 - (100 / data.length) * count}%`, // 104 because line dont need to touch end of block on the last question
  };
  return end ? (
    <FinalScreen clickHandler={setStartToTrue} />
  ) : (
    <>
      <header className='px-[23px] h-[58px] flex items-center justify-between bg-white relative'>
        <button onClick={() => setCount((prev) => prev - 1)} type='button'>
          <img src={arrow_left} alt='back' />
        </button>
        <p className='font-open text-[18px] leading-[19px] text-[#3C5060]'>
          {count}/{data.length}
        </p>
        <button onClick={setStartToTrue} type='button'>
          <img src={exit} alt='exit' />
        </button>
        <span className='absolute bottom-[-8px] left-0 right-0 bg-[#D8D8D8] w-full h-2 overflow-hidden'>
          <div
            className={`transition-all h-full w-[100%] absolute rounded-[3px]`}
            style={progressLine}
          ></div>
        </span>
      </header>
      <article className=' flex flex-col items-center relative h-[562px]'>
        <Question
          setCount={() => setCount((prev) => prev + 1)}
          count={count}
          formData={formData}
          setFormData={setFormData}
        />
      </article>
    </>
  );
}

export default Quiz;
