import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  return <h1>Product Detail Page for Product {id}</h1>;
};

export default ProductDetail;