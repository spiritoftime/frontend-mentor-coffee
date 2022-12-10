import React from "react";
import Hero from "../components/Home components/Hero";
import Collection from "../components/Home components/Collection";
import WhyChooseUs from "../components/Home components/WhyChooseUs";
import HowItWorks from "../components/Home components/HowItWorks"
const Home = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks />
    </div>
  );
};

export default Home;
