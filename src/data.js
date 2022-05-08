import { nanoid } from "nanoid";
//1
import WomanImg from "./images/first_ques/Woman.jsx";
import ManImg from "./images/first_ques/Men.jsx";

//2
import WomanEye from "./images/second_ques/WomenEyeglasses.jsx";
import MenEye from "./images/second_ques/MenEyeglasses.jsx";
import WomanSun from "./images/second_ques/WomenSunglasses.jsx";
import MenSun from "./images/second_ques/MenSunglasses.jsx";

//5
import DarkShade from "./images/fifth_ques/DarkShade.jsx";
import LightShade from "./images/fifth_ques/LightShade.jsx";
import TransShade from "./images/fifth_ques/TransShade.jsx";

//6
import MenLong from "./images/sixth_ques/MenOval.jsx";
import MenRound from "./images/sixth_ques/MenRound.jsx";
import MenBoth from "./images/sixth_ques/MenBoth.jsx";
import WomanLong from "./images/sixth_ques/WomanLong.jsx";
import WomanRound from "./images/sixth_ques/WomanRound.jsx";
import WomanBoth from "./images/sixth_ques/WomanBoth.jsx";
import BothLong from "./images/sixth_ques/BothLong.jsx";
import BothRound from "./images/sixth_ques/BothRound.jsx";
import BothBoth from "./images/sixth_ques/BothBoth.jsx";

//8
import { rectangle } from "./images/eight_ques/rectangle.js";
import { aviator } from "./images/eight_ques/aviator.js";
import { catEye } from "./images/eight_ques/catEye.js";
import { geometric } from "./images/eight_ques/geometric.js";
import { oval } from "./images/eight_ques/oval.js";
import { oversized } from "./images/eight_ques/oversized.js";
import { rimless } from "./images/eight_ques/rimless.js";
import { round } from "./images/eight_ques/round.js";
import { browline } from "./images/eight_ques/browline.js";
import { square } from "./images/eight_ques/square.js";
import { wayframe } from "./images/eight_ques/wayframe.js";
import { wrap } from "./images/eight_ques/wrap.js";

//10
import Armani from "./images/tenth_ques/Armani_exchange.jsx";
import Burberry from "./images/tenth_ques/Burberry.jsx";
import Coach from "./images/tenth_ques/Coach.jsx";
import Gucci from "./images/tenth_ques/Gucci.jsx";
import Hillary from "./images/tenth_ques/Hillary_duff.jsx";
import Michael from "./images/tenth_ques/Michael_kors.jsx";
import Oakley from "./images/tenth_ques/Oakley.jsx";
import Prada from "./images/tenth_ques/Prada.jsx";
import Rayban from "./images/tenth_ques/Ray_ban.jsx";
import Tory from "./images/tenth_ques/Tory_burch.jsx";
import Versace from "./images/tenth_ques/Versace.jsx";
import Vogue from "./images/tenth_ques/Vogue.jsx";

const data = [
  {
    title: "You are looking for",
    screenName: "gender",
    answers: [
      {
        id: nanoid(),
        text: "Women's Styles",
        img: <WomanImg />,
        value: "5",
      },
      {
        id: nanoid(),
        text: "Men's Styles",
        img: <ManImg />,
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
          4: <MenEye />,
          5: <WomanEye />,
        },
        value: "210",
      },
      {
        id: nanoid(),
        text: "Sunglasses",
        img: {
          4: <MenSun />,
          5: <WomanSun />,
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
      title: "Would you like to protect your eyes from light emanating from screens?",
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
          img: <DarkShade />,
          value: "dark",
        },
        {
          id: nanoid(),
          text: "Light Shade",
          img: <LightShade />,
          value: "light",
        },
        {
          id: nanoid(),
          text: "Transitioning Shade",
          img: <TransShade />,
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
          men: <MenLong />,
          woman: <WomanLong />,
          both: <BothLong />,
        },
        value: "long",
      },
      {
        id: nanoid(),
        text: "I have a round face",
        img: {
          men: <MenRound />,
          woman: <WomanRound />,
          both: <BothRound />,
        },
        value: "round",
      },
      {
        id: nanoid(),
        text: "In between",
        img: {
          men: <MenBoth />,
          woman: <WomanBoth />,
          both: <BothBoth />,
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
        img: <Rayban />,
        value: "ray_ban",
      },
      {
        id: nanoid(),
        img: <Hillary />,
        value: "hillary_duff",
      },
      {
        id: nanoid(),
        img: <Michael />,
        value: "michael_kors",
      },
      {
        id: nanoid(),
        img: <Oakley />,
        value: "oakley",
      },
      {
        id: nanoid(),
        img: <Prada />,
        value: "prada",
      },
      {
        id: nanoid(),
        img: <Coach />,
        value: "coach",
      },
      {
        id: nanoid(),
        img: <Gucci />,
        value: "gucci",
      },
      {
        id: nanoid(),
        img: <Versace />,
        value: "versace",
      },
      {
        id: nanoid(),
        img: <Tory />,
        value: "tory_burch",
      },
      {
        id: nanoid(),
        img: <Armani />,
        value: "armani",
      },
      {
        id: nanoid(),
        img: <Vogue />,
        value: "vogue",
      },
      {
        id: nanoid(),
        img: <Burberry />,
        value: "burberry",
      },
    ],
  },
];

export default data;
