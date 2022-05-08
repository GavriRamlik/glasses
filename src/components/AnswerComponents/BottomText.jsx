import tw from "twin.macro";
import "styled-components/macro";
import { HiddenInput } from "./css-components";

export default function BottomText({
  inputName,
  handleChange,
  checkChecked,
  handleClick,
  text,
  value = "skip",
}) {
  return (
    <label tw='absolute bottom-0 cursor-pointer'>
      <HiddenInput
        type='radio'
        className='peer'
        name={inputName}
        value={value}
        onChange={handleChange}
        checked={checkChecked(inputName, value)}
        onClick={handleClick}
      />
      <p tw='text-base leading-[22px] text-grayDark underline font-bold peer-checked:text-gray-400'>
        {text}
      </p>
    </label>
  );
}
