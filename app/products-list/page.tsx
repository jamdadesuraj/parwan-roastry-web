import { Suspense } from "react";
import { Metadata } from "next";
import ProductList from "./components/ProductList";

export const metadata: Metadata = {
  title: "Products List",
  description: "products list",
};

const ProductListPage = () => {
  return (
    <Suspense fallback={null}>
      <ProductList />
    </Suspense>
  );
};

export default ProductListPage;
