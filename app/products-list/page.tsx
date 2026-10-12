import { Metadata } from "next";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

export const metadata: Metadata = {
  title: "Products List",
  description: "products list",
};

const ProductListPage = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default ProductListPage;
