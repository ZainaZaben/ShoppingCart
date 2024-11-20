import React, { useState } from "react";
import PropTypes from "prop-types"; 
import { PRODUCTS } from "../data/products";

export const ShopContext = React.createContext();

function getDefaultProducts() {
  const cartDefaultCounter = {};
  PRODUCTS.forEach((product) => {
    cartDefaultCounter[product.id] = 0;
  });
  return cartDefaultCounter;
}

export default function ShopContextProvider(props) {
  const [cartItemCounter, setCartItemCounter] = useState(getDefaultProducts());

  const addItemToTheCart = (ItemID) => {
    setCartItemCounter((prev) => {
      const newCart = { ...prev, [ItemID]: prev[ItemID] + 1 };
      console.log('Updated cart:', newCart);
      return newCart;
    });
  };
  

  const deleteItemFromCart = (itemId) => {
    setCartItemCounter((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItemCounter((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItemCounter) {
      if (cartItemCounter[item] > 0) {
        let foundItem = PRODUCTS.find((product) => product.id === Number(item));
        const price = parseFloat(foundItem.productPrice.replace('$', ''));
        totalAmount += cartItemCounter[item] * price;
      }
    }
    return totalAmount;
  };
  

  const contextValue = {
    cartItemCounter,
    addItemToTheCart,
    deleteItemFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
