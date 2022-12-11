import React from "react";
import Step from "../Home components/Step";
import classes from "../../css/steps.module.css";
const steps = [
  {
    step: "01",
    key: "01",
    subheader: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    page: "subscribe",
  },
  {
    step: "02",
    key: "02",
    subheader: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    page: "subscribe",
  },
  {
    step: "03",
    key: "03",
    subheader: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    page: "subscribe",
  },
];
const Steps = () => {
  return (
    <div className={classes["steps"]}>
      {steps.map((step) => (
        <Step {...step} />
      ))}
    </div>
  );
};

export default Steps;
