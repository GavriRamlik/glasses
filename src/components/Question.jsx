import { useState, useEffect } from "react";
import data from "../data";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
import Screen7 from "./screens/Screen7";
function Question({ setCount, count, formData, setFormData }) {
  const indexCount = count - 1; // array index
  const checkChecked = (name, str) => formData[name] === str;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const componentsData = [
    {
      question: count && ( // program dont crash when count = 0
        <Screen1
          count={count}
          setCount={setCount}
          handleChange={handleChange}
          checkChecked={checkChecked}
        />
      ),
    },

    {
      question: count && (
        <Screen2
          count={count}
          setCount={setCount}
          handleChange={handleChange}
          checkChecked={checkChecked}
          formData={formData}
        />
      ),
    },
    {
      question: count && (
        <Screen3
          count={count}
          setCount={setCount}
          handleChange={handleChange}
          checkChecked={checkChecked}
        />
      ),
    },
    {
      question: count && (
        <Screen4
          count={count}
          setCount={setCount}
          handleChange={handleChange}
          checkChecked={checkChecked}
        />
      ),
    },
    {
      question: count && (
        <Screen5
          count={count}
          setCount={setCount}
          handleChange={handleChange}
          checkChecked={checkChecked}
          formData={formData}
        />
      ),
    },
    {
      question: count && (
        <Screen6
          count={count}
          setCount={setCount}
          handleChange={handleChange}
          checkChecked={checkChecked}
          formData={formData}
        />
      ),
    },
    {
      question: count && (
        <Screen7
          count={count}
          setCount={setCount}
          handleChange={handleChange}
          checkChecked={checkChecked}
        />
      ),
    },
  ];
  return <>{count && componentsData[indexCount].question}</>;
}

export default Question;
