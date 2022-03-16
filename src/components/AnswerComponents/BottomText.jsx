export default function BottomText({
  inputName,
  handleChange,
  checkChecked,
  handleClick,
  text,
  value = "skip",
}) {
  return (
    <label className='absolute bottom-0 cursor-pointer'>
      <input
        type='radio'
        className='input peer'
        name={inputName}
        value={value}
        onChange={handleChange}
        checked={checkChecked(inputName, value)}
        onClick={handleClick}
      />
      <p className='text-base leading-[22px] text-grayDark underline font-bold peer-checked:text-gray-400'>
        {text}
      </p>
    </label>
  );
}
