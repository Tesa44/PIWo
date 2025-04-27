import { createContext, useContext } from "react";

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      title: "Milk and Honey",
      genre: "Thiller",
      ageGroup: "Adult",
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

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
