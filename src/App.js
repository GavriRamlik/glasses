import logo from "./images/start_screen/logo.svg";
import arrow_right from "./images/start_screen/arrow_right.svg";
import hero from "./images/start_screen/hero.png";
import { useState } from "react";
import Quiz from "./components/Quiz";

function App() {
  const [startScrenn, setStartScreen] = useState(true);
  const [formData, setFormData] = useState({
    shape: [],
    brand: [],
  });
  console.log(formData);
  const style = {
    background: startScrenn
      ? "linear-gradient(180deg, #E8F0F2 0%, rgba(232, 240, 242, 0) 100%)"
      : "#F7F8F9",
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("URL");
  };
  return (
    <form
      className='w-[375px] h-[638px] pb-6 font-open'
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
          <main className='mt-[67px] flex flex-col items-center justify-center'>
            <img src={hero} alt='hero' className='hover:round-2 mb-[48px]' />
            <h1 className='title mb-[22px] mx-[25px] whitespace-nowrap'>
              Let’s find your perfect pair!
            </h1>
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
          setStartToTrue={() => setStartScreen(true)}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </form>
  );
}

export default App;
