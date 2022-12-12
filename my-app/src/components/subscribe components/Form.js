import React from "react";
import classes from "../../css/form.module.css";
import Question from "./Question";
const questions = [
  {
    key: "01",
    questionNum:1,
    question: "How do you drink your coffee?",
    options: {
      1: {
        header: "Capsule",
        text: "Compatible with Nespresso systems and similar brewers",
      },
      2: {
        header: "Filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60 Espresso",
      },
      3: {
        header: "Espresso",
        text: "Dense and finely ground beans for an intense, flavorful experience",
      },
    },
  },
  {
    questionNum:2,
    key: "02",
    question: "What type of coffee?",
    options: {
      1: {
        header: "Single origin",
        text: "Distinct, high quality coffee from a specific family-owned farm",
      },
      2: {
        header: "Decaf",
        text: "Just like regular coffee, except the caffeine has been removed",
      },
      3: {
        header: "Blended",
        text: "Combination of two or three dark roasted beans of organic coffees",
      },
    },
  },
  {
    questionNum:3,
    key: "03",
    question: "How much would you like?",
    options: {
      1: {
        header: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      2: {
        header: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      3: {
        header: "1000g",
        text: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    },
  },
  {
    questionNum:4,
    key: "04",
    question: "Want us to grind them?",
    options: {
      1: {
        header: "Whilebean",
        text: "Best choice if you cherish the full sensory experience",
      },
      2: {
        header: "Filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress ",
      },
      3: {
        header: "Cafetiére",
        text: "Coarse ground beans specially suited for french press coffee",
      },
    },
  },
  {
    questionNum:5,
    key: "05",
    question: "How often should we deliver?",
    options: {
      1: {
        header: "Every week",
        text: "$14.00 per shipment. Includes free first-class shipping.",
      },
      2: {
        header: "Every 2 weeks",
        text: "$17.25 per shipment. Includes free priority shipping.",
      },
      3: {
        header: "Every month",
        text: "$22.50 per shipment. Includes free priority shipping.",
      },
    },
  },
];
const Form = () => {
  return (
    <div className={classes["form"]}>
      {questions.map((question) => (
        <Question key={question.key} question={question} />
      ))}
    </div>
  );
};

export default Form;
