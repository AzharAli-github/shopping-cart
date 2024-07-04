import { useState, useEffect } from "react";

// You don't need the interface definition in JSX

function useProduct() {
  const [product, setProducts] = useState([])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch("/products.json")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
    }, 2000);
      
    return () => clearTimeout(timeoutId);
  }, [])

  return { product };
}

const ProductLists = ({ product }) => {
  return (
    <div className="px-10 py-5">
      <div className="flex justify-between px-3 py-5">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <p className="font-thin">4 items</p>
      </div>
      
      <div>
        <div className="grid grid-rows-12 md:grid-rows-4 lg:grid-rows-3 xl:grid-rows-2 grid-flow-col gap-12">
        {product.map((product, index) => ( 
                <div key={index} className="product shadow-2xl border rounded-md  shadow-indigo-500/40 py-5 px-2 text-center align-text-bottom">
                    <img src= {product.imgSrc} alt={product.name} className="w-60 h-60" />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button className="bg-red-500 px-5 py-2 border rounded-md text-white">Add To Cart</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const useCart = () => {
  const { product } = useCart();
  return <ProductLists product={product} />;
  // return <div>{JSON.stringify(pokemon)}</div>
};
