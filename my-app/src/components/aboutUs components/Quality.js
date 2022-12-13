import React from "react";
import classes from "../../css/quality.module.css";
import Coffee from "../../assets/about/mobile/image-quality.jpg";
import useViewPort from "../../custom-hooks/useViewPort";
import DesktopCoffee from "../../assets/about/desktop/image-quality.jpg";
const Quality = () => {
  const width = useViewPort();
  return (
    <div className={classes["quality-section"]}>
      {width < 1440 ? (
        <img
          className={classes["img"]}
          src={Coffee}
          alt="top-notch coffee from Coffeeroasters"
        ></img>
      ) : (
        <img
          className={classes["img"]}
          src={DesktopCoffee}
          alt="top-notch coffee from Coffeeroasters"
        ></img>
      )}
      <div className={classes["text-div"]}>
        <h2 className={classes["subheader"]}>Uncompromising quality</h2>
        <p className={classes["paragraph"]}>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </div>
  );
};

export default Quality;
