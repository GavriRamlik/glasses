import React, { useState } from "react";
import Exit from "../images/common/Exit.jsx";
import ArrowLeft from "../images/common/Arrow_left.jsx";
import Question from "./Question";
import data from "../data";
import FinalScreen from "./screens/FinalScreen";
import tw from "twin.macro";
import "styled-components/macro";

function Quiz({ clearAnswers, formData, setFormData }) {
  const [count, setCount] = useState(1);
  const end = data.length + 1 === count; // defines end of quizz
  const styles = {
    progressLine: {
      background: "linear-gradient(290.47deg, #3797FA 11.33%, #45C9FF 83.66%)",
      left: `-${104 - (100 / data.length) * count}%`, // 104 because line dont need to touch end of block on the last question
    },
    containerPadding: {
      padding: `0px 12px`,
    },
  };
  if (count === 0) {
    clearAnswers();
  } else if (count === 8 || count === 10) {
    styles.containerPadding.padding = `0px`;
  } else {
    styles.containerPadding.padding = `0px 12px`;
  }

  const decrementCount = () => {
    setCount(prev => prev - 1);
  };
  return end ? (
    <FinalScreen clickHandler={clearAnswers} />
  ) : (
    <>
      <header tw='px-[23px] h-[var(--header)] flex items-center justify-between bg-white relative'>
        <button onClick={count === 1 ? clearAnswers : decrementCount} type='button'>
          <ArrowLeft />
        </button>
        <p tw='font-open text-[18px] leading-[19px] text-[#3C5060] md:text-xl'>
          {count}/{data.length}
        </p>
        <button onClick={clearAnswers} type='button'>
          <Exit />
        </button>
        <span tw='absolute bottom-[-8px] left-0 right-0 bg-[#D8D8D8] w-full h-2 overflow-hidden'>
          <div
            tw='transition-all h-full w-[100%] absolute rounded-[3px]'
            style={styles.progressLine}
          ></div>
        </span>
      </header>
      <article
        tw='flex flex-col items-center relative h-[calc(100% - var(--header))]'
        style={styles.containerPadding}
      >
        <Question
          setCount={setCount}
          count={count}
          formData={formData}
          setFormData={setFormData}
        />
      </article>
    </>
  );
}

export default Quiz;
