export default function Title({
  marginBot = "32",
  text = "",
  marginTop = "58",
  marginX = "0",
}) {
  const style = {
    margin: `${marginTop}px ${marginX}px ${marginBot}px`,
  };
  return (
    <h2 className={`question-title text-center`} style={style}>
      {text}
    </h2>
  );
}
