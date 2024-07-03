// ShoppingCart.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

export const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch("https://azharali-github.github.io/product-api/products.json") // Adjust this path according to your actual API or file structure
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="px-2 md:px-5 py-4">
      <div className="md:flex justify-between px-3 py-5 border-b border-gray-500 ">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <div className="md:flex justify-between sm:w-4/6 md:w-2/6 lg: 1/6 align-middle">
          <p className="font-thin pt-2">4 items</p>
          <h3 className="flex bg-red-600 text-white px-6 py-2 md:px-3 border rounded-md">
            Cart : {count}<span className="text-lg pt-1 pl-2"><FaCartPlus/></span>
          </h3>
        </div>
      </div>

      <div>
        <div className="grid grid-rows-12 md:grid-rows-4 lg:grid-rows-3 xl:grid-rows-2 grid-flow-col gap-12 pt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center product shadow-2xl border rounded-md shadow-indigo-800 py-5 px-2 text-center align-text-bottom"
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-60 h-60"
              />
              <Link to={`/product/${product.id}`}>
                <h2 className="text-lg uppercase font-sans font-semibold ">
                  {product.name}
                </h2>
              </Link>
              <p className="text-lg capitalize font-serif font-extralight">
                {product.description}
              </p>
              <p className="text-lg font-mono pb-3">
                Price: ${product.price}
              </p>
              <button
                className="bg-green-500 px-5 py-2 border rounded-md text-white"
                onClick={handleClick}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
