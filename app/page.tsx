import React from "react";
import HeroBanner from "./pages/hero/HeroBanner";
import Counter from "./pages/hero/Counter";
import Category from "./pages/hero/Category";
import WhyChooseUs from "./pages/hero/WhyChooseUs";
import FeaturedProducts from "./pages/hero/FeaturedProducts";

const page = () => {
  return (
    <>
      <HeroBanner />
      <Counter />
      <Category />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
};

export default page;
