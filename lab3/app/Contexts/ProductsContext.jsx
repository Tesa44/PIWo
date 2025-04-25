import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

const productData = [
  {
    id: 1,
    title: "Milk and Honey",
    genre: "Thriller",
    age: "Adults",
    keyWords: "Murderer Detective",
    author: "Stephen King",
    price: 10.99,
  },
  {
    id: 2,
    title: "Kasprowy",
    genre: "Thriller",
    age: "Adults",
    keyWords: "Murderer Detective",
    author: "Remigiusz Mróz",
    price: 8.99,
  },
];

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={productData}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
