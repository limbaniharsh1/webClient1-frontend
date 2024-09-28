import React from "react";
import BannerSection from "./BannerSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import OurWorkSection from "./OurWorkSection";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <BannerSection />
      <ServicesSection />
      <AboutSection />
      <OurWorkSection />
      <Team/>
    </>
  );
};

export default Home;
