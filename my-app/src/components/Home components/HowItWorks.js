import React from "react";
import classes from "../../css/howItWorks.module.css";
const steps = [
  {
    key: "01",
    subheader: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    key: "02",
    subheader: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    key: "03",
    subheader: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];
const HowItWorks = () => {
  return (
    <section className={classes["how-it-works"]}>
      <h2 className={classes["subheader"]}>How it works</h2>
    </section>
  );
};

export default HowItWorks;
