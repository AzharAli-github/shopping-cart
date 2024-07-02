import React from 'react'
import shirtOne from "../assets/shirtOne.png";
import shirtTwo from "../assets/shirtTwo.png";
import shirtThree from "../assets/shirtThree.png";
import pentOne from "../assets/pentOne.png";
import pentTwo from "../assets/pentTwo.png";
import jacket from "../assets/jacket.png";
import hoody from "../assets/hoody.png";
import cap from "../assets/cap.png";

const styles = {
  input: {}
}

export const productList = () => {
  return (
    <div>
        <div className="border border-black py-5 px-2 text-center">
            <img src={shirtTwo} className="w-50 h-50" alt="" />
            <h2>Product Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              maiores! Velit excepturi laborum pariatur numquam iusto architecto
              dignissimos illum dolorum!
            </p>
            <h3>Product Price: 22$</h3>
            <button>Add To Cart</button>
          </div>
          <div className="border border-black py-5 px-2 text-center">
            <img src={shirtThree} className="w-50 h-50" alt="" />
            <h2>Product Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              maiores! Velit excepturi laborum pariatur numquam iusto architecto
              dignissimos illum dolorum!
            </p>
            <h3>Product Price: 22$</h3>
            <button>Add To Cart</button>
          </div>
          <div className="border border-black py-5 px-2 text-center">
            <img src={pentOne} className="w-50 h-50" alt="" />
            <h2>Product Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              maiores! Velit excepturi laborum pariatur numquam iusto architecto
              dignissimos illum dolorum!
            </p>
            <h3>Product Price: 22$</h3>
            <button>Add To Cart</button>
          </div>
          <div className="border border-black py-5 px-2 text-center">
            <img src={pentTwo} className="w-50 h-50" alt="" />
            <h2>Product Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              maiores! Velit excepturi laborum pariatur numquam iusto architecto
              dignissimos illum dolorum!
            </p>
            <h3>Product Price: 22$</h3>
            <button>Add To Cart</button>
          </div>
          <div className="border border-black py-5 px-2 text-center">
            <img src={jacket} className="w-50 h-50" alt="" />
            <h2>Product Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              maiores! Velit excepturi laborum pariatur numquam iusto architecto
              dignissimos illum dolorum!
            </p>
            <h3>Product Price: 22$</h3>
            <button>Add To Cart</button>
          </div>
          <div className="border border-black py-5 px-2 text-center">
            <img src={hoody} className="w-50 h-50" alt="" />
            <h2>Product Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              maiores! Velit excepturi laborum pariatur numquam iusto architecto
              dignissimos illum dolorum!
            </p>
            <h3>Product Price: 22$</h3>
            <button>Add To Cart</button>
          </div>
          <div className="border border-black py-5 px-2 text-center">
            <img src={cap} className="w-50 h-50" alt="" />
            <h2>Product Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              maiores! Velit excepturi laborum pariatur numquam iusto architecto
              dignissimos illum dolorum!
            </p>
            <h3>Product Price: 22$</h3>
            <button>Add To Cart</button>
          </div>
    </div>
  )
}
