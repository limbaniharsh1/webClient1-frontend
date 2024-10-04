import React from "react";
import Banner from "../../../components/client/Banner";
import AboutSection from "./AboutSection";
import ChooseUs from "./ChooseUs";
import Infrastructure from "./Infrastructure";

const AboutUs = () => {
  return (
    <div>
      <Banner title="about us" />
      <AboutSection />
      <ChooseUs />
      <Infrastructure />
    </div>
  );
};

export default AboutUs;
