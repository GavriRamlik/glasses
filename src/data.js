import { nanoid } from "nanoid";
import womanImg from "./images/first_ques/woman.svg";
import manImg from "./images/first_ques/men.svg";
import womanEye from "./images/second_ques/womenEyeglasses.svg";
import menEye from "./images/second_ques/menEyeglasses.svg";
import womanSun from "./images/second_ques/womenSunglasses.svg";
import menSun from "./images/second_ques/menSunglasses.svg";

const data = [
  {
    title: "You are looking for",
    answers: [
      {
        id: nanoid(),
        text: "Women's Styles",
        img: womanImg,
        marginBetween: "16",
      },
      {
        id: nanoid(),
        text: "Men's Styles",
        img: manImg,
        marginBetween: "16",
      },
    ],
    bottomText: "I'd like to see both",
  },
  {
    title: "What type of glasses are you looking for?",
    answers: [
      {
        id: nanoid(),
        text: "Eyeglasses",
        img: {
          men: menEye,
          woman: womanEye,
        },
        marginBetween: "12",
      },
      {
        id: nanoid(),
        text: "Sunglasses",
        img: {
          men: menSun,
          woman: womanSun,
        },
        marginBetween: "12",
      },
    ],
    bottomText: "I want to see both",
  },
  {
    title: "Do you need vision correction?",
    answers: [
      {
        id: nanoid(),
        text: "Yes",
        additionalScreen: true,
      },
      {
        id: nanoid(),
        text: "No",
      },
    ],
    bottomText: "Skip",
  },
  {
    title: "What's your current frame size?",
    answers: [
      {
        id: nanoid(),
        text: "Small",
        size: "42-48 mm",
      },
      {
        id: nanoid(),
        text: "Medium",
        size: "49-53 mm",
      },
      {
        id: nanoid(),
        text: "Large",
        size: "54-58 mm",
      },
    ],
    bottomText: "I don’t know",
  },
];

export default data;
