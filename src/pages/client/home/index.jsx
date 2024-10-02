import React from "react";
import BannerSection from "./BannerSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import OurWorkSection from "./OurWorkSection";
import Team from "./Team";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <BannerSection />
      <ServicesSection />
      <AboutSection />
      <OurWorkSection />
      <Team/>
      <ContactUs/>
    </>
  );
};

export default Home;
