import { Metadata } from "next";
import React from "react";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
import WhyChoose from "./components/WhyChoose";

export const metadata: Metadata = {
  title: "About Us",
  description: "about us",
};

const AboutUsPage = () => {
  return (
    <>
      <AboutUs />
      <Mission />
      <WhyChoose />
    </>
  );
};

export default AboutUsPage;
