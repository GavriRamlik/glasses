export default function Title({
  margin = "32",
  text = "",
  width = "",
  marginTop = "50",
}) {
  const style = {
    marginBottom: `${margin}px`,
    width: width ? `${width}px` : "auto",
    marginTop: `${marginTop}px`,
  };
  return (
    <h2 className={`question-title text-center`} style={style}>
      {text}
    </h2>
  );
}
