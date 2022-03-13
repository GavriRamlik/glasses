export default function Title({ margin = "32", text = "", width = "" }) {
  const style = {
    marginBottom: `${margin}px`,
    width: width ? `${width}px` : "auto",
  };
  return (
    <h2 className={`question-title text-center`} style={style}>
      {text}
    </h2>
  );
}
