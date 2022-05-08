import styled from "styled-components";
import tw from "twin.macro";
import "styled-components/macro";

export const Button = styled.button`
  background: linear-gradient(270deg, #45c7fa 0%, #2196f3 100%);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
  ${tw`rounded-[24px] text-white w-[177px] h-[48px] duration-[300] font-roboto text-[18px] leading-[21px] font-bold`}
  transition: 0.2s transform, 0.2s box-shadow;
  &:hover {
    transform: translateY(-2px);
    ${tw`shadow-lg`}
  }
  &:disabled {
    background: none;
    ${tw`bg-[#DEDEDE]`}
    box-shadow: none;
    cursor: not-allowed;
  }
  &:disabled:hover {
    transform: none;
    box-shadow: none;
  }
`;

export const MainTitle = tw.h2`
  font-open font-bold text-2xl leading-[31px] text-blue text-center
`;

export const QuestionTitle = tw.h2`
font-light text-xl leading-[29px] text-quesTitle
`;

export const AnswerText = tw.p`
font-semibold text-[18px] leading-[25px] text-textAnswer
`;

export const AnswerCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(231, 235, 237, 0.80141);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
`;

export const AnswerCardSlide = styled.div`
  background: #ffffff;
  border: 0.98px solid rgba(231, 235, 237, 0.80141);
  box-shadow: 0px 1px 0px rgba(58, 72, 80, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 14px;
`;

export const HiddenInput = styled.input`
  ${tw`w-px h-px overflow-hidden absolute`}
  clip: rect(0, 0, 0, 0);
`;

export const CheckboxInput = styled(HiddenInput)`
  & ~ div:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    background: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAuMjYyMSIgY3k9IjkuNzAyIiByPSI5LjcwMiIgZmlsbD0iIzIxOTZGMyIvPgo8cGF0aCBkPSJNNy4wMjgwOCAxMC4yNjk1TDkuNjI2ODIgMTIuOTM2TDEzLjQ5NjEgNy41NDYwMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==");
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.2s height cubic-bezier(0.19, 1, 0.22, 1);
    top: -7px;
    right: -7px;
  }
  &:checked ~ div:before {
    width: 20px;
    height: 20px;
  }
`;
