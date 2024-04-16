import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
