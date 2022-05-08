import Logo from "./images/start_screen/Logo.jsx";
import ArrowRight from "./images/start_screen/Arrow_right.jsx";
import { hero } from "./images/start_screen/hero.js";
import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import tw from "twin.macro";
import "styled-components/macro";
import { Button, MainTitle } from "./components/AnswerComponents/css-components.jsx";
import Title from "./components/AnswerComponents/Title.jsx";

function App() {
  const [startScrenn, setStartScreen] = useState(true);
  const initialFormData = {
    shape: [],
    brand: [],
  };
  const [dataAttr, setDataAttr] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const clearFormData = () => setFormData(initialFormData);
  const style = {
    background: startScrenn
      ? "linear-gradient(180deg, #E8F0F2 0%, rgba(232, 240, 242, 0) 100%)"
      : "#F7F8F9",
  };
  const submitHandler = e => {
    e.preventDefault();
    let url = dataAttr + "?";
    for (const [key, value] of Object.entries(formData)) {
      if (value !== "skip" && value !== "none" && value.length !== 0) {
        url += `${key}=${value}&`;
      }
    }
    url = url.slice(0, url.length - 1); // delete last ampersant
    console.log(`URL: [${url}]`);
  };
  const clearAnswers = () => {
    setStartScreen(true);
    clearFormData();
  };
  useEffect(() => {
    const widget = document.getElementById("glasses-quiz-widget");
    setDataAttr(widget.dataset.source);
  }, []);
  return (
    <form
      tw='h-[var(--main-container)] pb-6 font-open'
      style={style}
      onSubmit={submitHandler}
    >
      {startScrenn ? (
        <>
          <header tw='px-[25px] h-[66px] flex items-center justify-between bg-white'>
            <Logo />
            <button onClick={() => setStartScreen(false)} type='button'>
              <ArrowRight />
            </button>
          </header>
          <main
            tw='mt-[67px] flex flex-col items-center justify-center px-4'
            id='startscreen'
          >
            <img src={hero} alt='hero' tw='mb-[48px]' />
            <MainTitle tw='mb-[22px]'>Let’s find your perfect pair!</MainTitle>
            <p tw='font-bold text-[15px] leading-[26px] text-center max-w-[272px] mb-[29px] text-[#3A4850]'>
              Take the quiz to easily discover your perfect fit from thousands of styles
            </p>
            <Button type='button' onClick={() => setStartScreen(false)}>
              Start Now
            </Button>
          </main>
        </>
      ) : (
        <Quiz clearAnswers={clearAnswers} formData={formData} setFormData={setFormData} />
      )}
    </form>
  );
}

export default App;
