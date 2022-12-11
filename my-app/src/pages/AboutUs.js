import React from "react";
import Commitment from "../components/aboutUs components/Commitment";
import AboutUsHero from "../components/aboutUs components/Hero";
import Quality from "../components/aboutUs components/Quality";
import Location from "../components/aboutUs components/Location";
const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <Commitment></Commitment>
      <Quality />
      <Location />
    </>
  );
};

export default AboutUs;
