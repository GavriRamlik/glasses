export default function BottomText({
  inputName,
  handleChange,
  checkChecked,
  handleClick,
  text,
}) {
  return (
    <label className='absolute bottom-0 cursor-pointer'>
      <input
        type='radio'
        className='input peer'
        name={inputName}
        value={"none"}
        onChange={handleChange}
        checked={checkChecked(inputName, "none")}
        onClick={() => handleClick((prev) => prev + 1)}
      />
      <p className='text-base leading-[22px] text-grayDark underline font-bold peer-checked:text-gray-400'>
        {text}
      </p>
    </label>
  );
}
