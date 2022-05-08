import Gender from "./screens/1/Gender";
import EyewearType from "./screens/2/EyewearType";
import Lenstype from "./screens/3/Lenstype";
import FrameSize from "./screens/4/FrameSize";
import ShadeOrBlueLight from "./screens/5/ShadeOrBlueLight";
import FaseShape from "./screens/6/FaceShape";
import FacialFeatures from "./screens/7/FacialFeatures";
import Shape from "./screens/8/Shape";
import ShowBrand from "./screens/9/ShowBrand";
import Brand from "./screens/10/Brand";
import data from "../data";
import tw from "twin.macro";
import "styled-components/macro";

function Question({ setCount, count, formData, setFormData }) {
  const indexCount = count - 1; // array index
  const checkChecked = (name, str) => {
    return formData[name] === str;
  };
  const addOne = () => setCount(prev => prev + 1);
  const lastScreen = () => {
    setCount(data.length + 1);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const componentsData = [
    <Gender //1
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <EyewearType //2
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
      formData={formData}
    />,
    <Lenstype //3
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <FrameSize //4
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <ShadeOrBlueLight //5
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
      formData={formData}
    />,
    <FaseShape //6
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
      formData={formData}
    />,
    <FacialFeatures //7
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <Shape //8
      count={count}
      setCount={addOne}
      checkChecked={checkChecked}
      formData={formData}
      setFormData={setFormData}
    />,
    <ShowBrand //9
      count={count}
      setCount={addOne}
      checkChecked={checkChecked}
      formData={formData}
      setFormData={setFormData}
      setLastScreen={lastScreen}
    />,
    <Brand //10
      count={count}
      setCount={addOne}
      checkChecked={checkChecked}
      formData={formData}
      setFormData={setFormData}
    />,
  ];
  return componentsData[indexCount];
}

export default Question;
