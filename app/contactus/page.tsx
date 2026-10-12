import { Metadata } from "next";
import React from "react";
import ContactUs from "./components/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us",
};

const ContactUsPage = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
