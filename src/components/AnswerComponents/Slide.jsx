import { motion } from "framer-motion";

export default function Slide({
  text = "",
  img,
  inputName,
  value,
  formData,
  setFormData,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prev) => {
      let arr = [...prev[name]]; //get unchanged array
      const index = arr.indexOf(value); // get index of the value in arr
      //check value in the array
      if (index !== -1) {
        //if value already in the array we delete it
        arr.splice(index, 1);
        return {
          ...prev,
          [name]: arr,
        };
      }
      //if not we added this value
      return {
        ...prev,
        [name]: [...prev[name], value],
      };
    });
  };
  const checkChecked = (value) => {
    return formData[inputName].indexOf(value) !== -1;
  };
  return (
    <motion.label
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <input
        type='checkbox'
        className='input peer checkbox'
        name={inputName}
        value={value}
        onChange={handleChange}
        checked={checkChecked(value)}
      />
      <div className='relative answer-card-slide flex items-center justify-center flex-col cursor-pointer hover:shadow-inner transition-shadow peer-checked:border-2 peer-checked:border-[#2196F3] w-[160px] h-[103px]'>
        <img src={img} alt={text} />
        {text && (
          <p className='answer-text mt-[8px] text-[13px] text-description'>
            {text}
          </p>
        )}
      </div>
    </motion.label>
  );
}
