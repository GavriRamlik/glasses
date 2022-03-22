import logo from "./images/start_screen/logo.svg";
import arrow_right from "./images/start_screen/arrow_right.svg";
import hero from "./images/start_screen/hero.png";
import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";

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
  const submitHandler = (e) => {
    e.preventDefault();
    let url = dataAttr + "?";
    for (const [key, value] of Object.entries(formData)) {
      if (value !== "skip" && value !== "none" && value.length !== 0) {
        url += `${key}=${value}&`;
      }
    }
    url = url.slice(0, url.length - 1); // delete last ampersant
    console.log(url);
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
      className='h-[638px] pb-6 font-open'
      style={style}
      onSubmit={submitHandler}
    >
      {startScrenn ? (
        <>
          <header className='px-[25px] h-[66px] flex items-center justify-between bg-white'>
            <img src={logo} alt='logo' />
            <button onClick={() => setStartScreen(false)} type='button'>
              <img src={arrow_right} alt='arrow_right' />
            </button>
          </header>
          <main className='mt-[67px] flex flex-col items-center justify-center px-4'>
            <img src={hero} alt='hero' className='hover:round-2 mb-[48px]' />
            <h1 className='title mb-[22px]'>Let’s find your perfect pair!</h1>
            <p className='font-bold text-[15px] leading-[26px] text-center text-grayCold max-w-[272px] mb-[29px]'>
              Take the quiz to easily discover your perfect fit from thousands
              of styles
            </p>
            <button
              className='btn'
              type='button'
              onClick={() => setStartScreen(false)}
            >
              Start Now
            </button>
          </main>
        </>
      ) : (
        <Quiz
          clearAnswers={clearAnswers}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </form>
  );
}

export default App;
