import { Metadata } from "next";
import ProductDetails from "./components/ProductDetails";

export const metadata: Metadata = {
  title: "Product Details",
  description: "product details",
};

const ProductDetailsPage = () => {
  return (
    <>
      <ProductDetails />
    </>
  );
};

export default ProductDetailsPage;
