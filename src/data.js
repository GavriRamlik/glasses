import { nanoid } from "nanoid";
//1
import womanImg from "./images/first_ques/woman.svg";
import manImg from "./images/first_ques/men.svg";

//2
import womanEye from "./images/second_ques/womenEyeglasses.svg";
import menEye from "./images/second_ques/menEyeglasses.svg";
import womanSun from "./images/second_ques/womenSunglasses.svg";
import menSun from "./images/second_ques/menSunglasses.svg";

//5
import darkShade from "./images/fifth_ques/darkShade.svg";
import lightShade from "./images/fifth_ques/lightShade.svg";
import transShade from "./images/fifth_ques/transShade.svg";

//6
import menLong from "./images/sixth_ques/menOval.svg";
import menRound from "./images/sixth_ques/menRound.svg";
import menBoth from "./images/sixth_ques/menBoth.svg";
import womanLong from "./images/sixth_ques/womanLong.svg";
import womanRound from "./images/sixth_ques/womanRound.svg";
import womanBoth from "./images/sixth_ques/womanBoth.svg";
import bothLong from "./images/sixth_ques/bothLong.svg";
import bothRound from "./images/sixth_ques/bothRound.svg";
import bothBoth from "./images/sixth_ques/bothBoth.svg";

//8
import rectangle from "./images/eight_ques/rectangle.jpg";
import aviator from "./images/eight_ques/aviator.jpg";
import catEye from "./images/eight_ques/catEye.jpg";
import geometric from "./images/eight_ques/geometric.jpg";
import oval from "./images/eight_ques/oval.jpg";
import oversized from "./images/eight_ques/oversized.jpg";
import rimless from "./images/eight_ques/rimless.jpg";
import round from "./images/eight_ques/round.jpg";
import browline from "./images/eight_ques/browline.jpg";
import square from "./images/eight_ques/square.jpg";
import wayframe from "./images/eight_ques/wayframe.jpg";
import wrap from "./images/eight_ques/wrap.jpg";

//10
import armani from "./images/tenth_ques/armani_exchange.svg";
import burberry from "./images/tenth_ques/burberry.svg";
import coach from "./images/tenth_ques/coach.svg";
import gucci from "./images/tenth_ques/gucci.svg";
import hillary from "./images/tenth_ques/hillary_duff.svg";
import michael from "./images/tenth_ques/michael_kors.svg";
import oakley from "./images/tenth_ques/oakley.svg";
import prada from "./images/tenth_ques/prada.svg";
import rayban from "./images/tenth_ques/ray_ban.svg";
import tory from "./images/tenth_ques/tory_burch.svg";
import versace from "./images/tenth_ques/versace.svg";
import vogue from "./images/tenth_ques/vogue.svg";

const data = [
  {
    title: "You are looking for",
    screenName: "gender",
    answers: [
      {
        id: nanoid(),
        text: "Women's Styles",
        img: womanImg,
        value: "5",
      },
      {
        id: nanoid(),
        text: "Men's Styles",
        img: manImg,
        value: "4",
      },
    ],
    bottomText: "I'd like to see both",
  },
  {
    title: "What type of glasses are you looking for?",
    screenName: "eyewear_type",
    answers: [
      {
        id: nanoid(),
        text: "Eyeglasses",
        img: {
          4: menEye,
          5: womanEye,
        },
        value: "210",
      },
      {
        id: nanoid(),
        text: "Sunglasses",
        img: {
          4: menSun,
          5: womanSun,
        },
        value: "211",
      },
    ],
    bottomText: "I want to see both",
  },
  {
    title: "Do you need vision correction?",
    screenName: "lenstype",
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
    anotherScreen: {
      title: "What do you need your glasses for?",
      answers: [
        {
          id: nanoid(),
          text: "Near Vision",
          value: "6",
        },
        {
          id: nanoid(),
          text: "Distance Vision",
          value: "6",
        },
        {
          id: nanoid(),
          text: "Multifocal / Progressive",
          value: "7",
        },
      ],
      bottomText: "Skip",
    },
  },
  {
    title: "What's your current frame size?",
    screenName: "frame_size",
    answers: [
      {
        id: nanoid(),
        text: "Small",
        size: "42-48 mm",
        value: "68",
      },
      {
        id: nanoid(),
        text: "Medium",
        size: "49-53 mm",
        value: "67",
      },
      {
        id: nanoid(),
        text: "Large",
        size: "54-58 mm",
        value: "66",
      },
    ],
    bottomText: "I don’t know",
    anotherScreen: {
      title: "How wide would you say your face is?",
      answers: [
        {
          id: nanoid(),
          text: "Wider Than Average",
          value: "66",
        },
        {
          id: nanoid(),
          text: "Average",
          value: "67",
        },
        {
          id: nanoid(),
          text: "Narrower Than Average",
          value: "68",
        },
      ],
      bottomText: "I’m not sure",
    },
  },
  {
    eye: {
      title:
        "Would you like to protect your eyes from light emanating from screens?",
      screenName: "blue_light",
      answers: [
        {
          id: nanoid(),
          text: "Yes",
          value: "true",
        },
        {
          id: nanoid(),
          text: "No",
          value: "false",
        },
      ],
    },
    sun: {
      title: "When you’re out and about, which shade of lenses do you prefer?",
      screenName: "shade",
      answers: [
        {
          id: nanoid(),
          text: "Dark Shade",
          img: darkShade,
          value: "dark",
        },
        {
          id: nanoid(),
          text: "Light Shade",
          img: lightShade,
          value: "light",
        },
        {
          id: nanoid(),
          text: "Transitioning Shade",
          img: transShade,
          value: "transition",
        },
      ],
    },
  },
  {
    title: "Every face shape has a perfect fit. What’s yours?",
    screenName: "face_shape",
    answers: [
      {
        id: nanoid(),
        text: "I have a long face",
        img: {
          men: menLong,
          woman: womanLong,
          both: bothLong,
        },
        value: "long",
      },
      {
        id: nanoid(),
        text: "I have a round face",
        img: {
          men: menRound,
          woman: womanRound,
          both: bothRound,
        },
        value: "round",
      },
      {
        id: nanoid(),
        text: "In between",
        img: {
          men: menBoth,
          woman: womanBoth,
          both: bothBoth,
        },
        value: "between",
      },
    ],
    bottomText: "I don’t know",
  },
  {
    title: "How would you define your facial features?",
    screenName: "facial_features",
    answers: [
      {
        id: nanoid(),
        text: "Sharp",
        value: "sharp",
      },
      {
        id: nanoid(),
        text: "Rounded",
        value: "rounded",
      },
      {
        id: nanoid(),
        text: "In between",
        value: "between",
      },
    ],
    bottomText: "I don’t know",
  },
  {
    title: "Which frame style are you looking for?",
    screenName: "shape",
    answers: [
      {
        id: nanoid(),
        text: "Rectangle",
        value: "rectangle",
        img: rectangle,
      },
      {
        id: nanoid(),
        text: "Wayframe",
        value: "wayframe",
        img: wayframe,
      },
      {
        id: nanoid(),
        text: "Cat eye",
        value: "cat_eye",
        img: catEye,
      },
      {
        id: nanoid(),
        text: "Browline",
        value: "browline",
        img: browline,
      },
      {
        id: nanoid(),
        text: "Round",
        value: "round",
        img: round,
      },
      {
        id: nanoid(),
        text: "Rimless",
        value: "rimless",
        img: rimless,
      },
      {
        id: nanoid(),
        text: "Aviator",
        value: "aviator",
        img: aviator,
      },
      {
        id: nanoid(),
        text: "Oval",
        value: "oval",
        img: oval,
      },
      {
        id: nanoid(),
        text: "Square",
        value: "square",
        img: square,
      },
      {
        id: nanoid(),
        text: "Geometric",
        value: "geometric",
        img: geometric,
      },
      {
        id: nanoid(),
        text: "Oversized",
        value: "oversized",
        img: oversized,
      },
      {
        id: nanoid(),
        text: "Wrap",
        value: "wrap",
        img: wrap,
      },
    ],
  },
  {
    title: "Are you looking for any particular eyewear brands?",
    answers: [
      {
        id: nanoid(),
        text: "Yes, I have some in mind",
        brands: true,
      },
      {
        id: nanoid(),
        text: "No, brand isn't important",
      },
    ],
  },
  {
    title: "Choose your favorite brands",
    screenName: "brand",
    answers: [
      {
        id: nanoid(),
        img: rayban,
        value: "ray_ban",
      },
      {
        id: nanoid(),
        img: hillary,
        value: "hillary_duff",
      },
      {
        id: nanoid(),
        img: michael,
        value: "michael_kors",
      },
      {
        id: nanoid(),
        img: oakley,
        value: "oakley",
      },
      {
        id: nanoid(),
        img: prada,
        value: "prada",
      },
      {
        id: nanoid(),
        img: coach,
        value: "coach",
      },
      {
        id: nanoid(),
        img: gucci,
        value: "gucci",
      },
      {
        id: nanoid(),
        img: versace,
        value: "versace",
      },
      {
        id: nanoid(),
        img: tory,
        value: "tory_burch",
      },
      {
        id: nanoid(),
        img: armani,
        value: "armani",
      },
      {
        id: nanoid(),
        img: vogue,
        value: "vogue",
      },
      {
        id: nanoid(),
        img: burberry,
        value: "burberry",
      },
    ],
  },
];

export default data;
