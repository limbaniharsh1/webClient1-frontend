import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../../data/productsData";
import ProductDetails from "./ProductDetails";
import SubProductDetails from "./SubProductDetails";

const index = () => {
  const { product, subProduct } = useParams();
  const [filterProduct] =
    productData?.filter((item) => item?.slug == product) || [];
  console.log(filterProduct);
  const [filterSubProduct] =
    (filterProduct &&
      filterProduct?.subProducts &&
      filterProduct?.subProducts?.filter((item) => item?.slug == subProduct)) ||
    [];
  console.log(filterSubProduct);

  return subProduct ? (
    <SubProductDetails product={filterSubProduct} />
  ) : (
    <ProductDetails product={filterProduct} />
  );
};

export default index;
