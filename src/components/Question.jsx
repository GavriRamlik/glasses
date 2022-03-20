import Gender from "./screens/Gender";
import EyewearType from "./screens/EyewearType";
import Lenstype from "./screens/Lenstype";
import FrameSize from "./screens/FrameSize";
import ShadeOrBlueLight from "./screens/ShadeOrBlueLight";
import FaseShape from "./screens/FaceShape";
import FacialFeatures from "./screens/FacialFeatures";
import Shape from "./screens/Shape";
import ShowBrand from "./screens/ShowBrand";
import Brand from "./screens/Brand";
import data from "../data";
function Question({ setCount, count, formData, setFormData }) {
  const indexCount = count - 1; // array index
  const checkChecked = (name, str) => {
    return formData[name] === str;
  };
  const addOne = () => setCount((prev) => prev + 1);
  const lastScreen = () => {
    setCount(data.length + 1);
  };
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
    <Gender
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <EyewearType
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
      formData={formData}
    />,
    <Lenstype
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <FrameSize
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <ShadeOrBlueLight
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
      formData={formData}
    />,
    <FaseShape
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
      formData={formData}
    />,
    <FacialFeatures
      count={count}
      setCount={addOne}
      handleChange={handleChange}
      checkChecked={checkChecked}
    />,
    <Shape
      count={count}
      setCount={addOne}
      checkChecked={checkChecked}
      formData={formData}
      setFormData={setFormData}
    />,
    <ShowBrand
      count={count}
      setCount={addOne}
      checkChecked={checkChecked}
      formData={formData}
      setFormData={setFormData}
      setLastScreen={lastScreen}
    />,
    <Brand
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
