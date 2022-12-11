import React from "react";
import classes from "../../css/subscribehero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-contents"]}>
        <h1 className={classes["hero-header"]}>Create a plan</h1>
        <p className={classes["hero-description"]}>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </section>
  );
};

export default Hero;
