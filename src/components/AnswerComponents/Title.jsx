import tw from "twin.macro";
import "styled-components/macro";
import { QuestionTitle } from "./css-components";

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
    <QuestionTitle tw='text-center' style={style}>
      {text}
    </QuestionTitle>
  );
}
