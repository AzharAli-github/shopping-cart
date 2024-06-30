import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://azharali-github.github.io/product-api/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const product = data.find((item) => item.id === parseInt(productId));
        setProduct(product);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center py-4">
    <div className = "text-center px-10 py-5 shadow-2xl shadow-slate-900">
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <img src={product.imgSrc} alt={product.name} className="w-60 h-60" />
      <p className="text-lg capitalize font-serif font-extralight">{product.description}</p>
      <p className="text-lg font-mono pb-3">Price: ${product.price}</p>
      <button
        className="bg-green-500 px-5 py-2 border rounded-md text-white">Add To Cart</button>
    </div>
    </div>
  );
};
