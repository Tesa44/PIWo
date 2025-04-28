import { createContext, useContext, useState } from "react";

const initialProducts = [
  {
    id: 1,
    title: "Milk and Honey",
    genre: "Thriller",
    ageGroup: "Adults",
    keyWords: "Murderer Detective",
    author: "Stephen King",
    price: "10.99",
  },
  {
    id: 2,
    title: "Another Book",
    genre: "Fantasy",
    ageGroup: "Teenagers",
    keyWords: "Magic Adventure",
    author: "J.K. Rowling",
    price: "12.99",
  },
];

const ProductContext = createContext(null);

export const useProducts = () => {
  const value = useContext(ProductContext);

  if(!value) console.error("context jest uzyty poza providerem")

  return value;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {children}
    </ProductContext.Provider>
  );
};
