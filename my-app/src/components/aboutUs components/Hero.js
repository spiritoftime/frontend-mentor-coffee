import React from "react";
import classes from "../../css/aboutUsHero.module.css";
const AboutUsHero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-contents"]}>
        <h1 className={classes["hero-header"]}>About Us</h1>
        <p className={classes["hero-description"]}>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHero;
