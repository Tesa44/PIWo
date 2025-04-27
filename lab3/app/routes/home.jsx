import { Welcome } from "../welcome/welcome";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import { ProductsProvider } from "../Contexts/ProductsContext";
import ProductFilters from "../Components/ProductFilters";
import { useProducts } from "../Contexts/ProductsContext"
import { useState } from "react";
export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const products = useProducts()

  const [filters, setFilters] = useState({
    title: '',
    genre: '',
    age: '',
    author: '',
    keyWords: '',
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = products.filter(product => {
      const matchesTitle = product.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());

    const matchesGenre = filters.genre ? product.genre === filters.genre : true;

    const matchesAge = filters.age ? product.age === filters.age : true;

    const matchesKeyWords = product.keyWords
      .toLowerCase()
      .includes(filters.keyWords.toLowerCase());

    const matchesAuthor = product.author
      .toLowerCase()
      .includes(filters.author.toLowerCase());

    return (
      matchesTitle &&
      matchesGenre &&
      matchesAge &&
      matchesKeyWords &&
      matchesAuthor
    );
    });

    setFilteredProducts(filtered);
  };

  return (
    <>
      <NavBar />
      <Hero />
      <ProductsProvider>
      <ProductFilters
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearch}
      />

        <Products products={filteredProducts} />
      </ProductsProvider>
    </>
  );
}
