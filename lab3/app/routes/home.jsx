import { useState } from "react";
import { useProducts } from "../Contexts/ProductContext";
import ProductFilters from "../Components/ProductFilters";
import ProductList from "../Components/ProductList";
import { ProductProvider } from "../Contexts/ProductContext";

export function meta() {
  return [
    { title: "Our Products" },
    { name: "description", content: "Browse our product collection" },
  ];
}

export default function Home() {
  const products = useProducts();
  console.log(products);
  const [filters, setFilters] = useState({
    title: "",
    genre: "",
    ageGroup: "",
    keyWords: "",
    author: "",
  });
  const [filteredProducts, setFilteredProducts] = useState(products || []);

  const handleSearch = (e) => {
    e.preventDefault();

    const isFilteringEmpty = Object.values(filters).every(
      (value) => value === ""
    );

    if (isFilteringEmpty) {
      // Jeśli nic nie wpisano w filtry, pokaż wszystkie produkty
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => {
      const matchesTitle = product.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());
      const matchesGenre = filters.genre
        ? product.genre === filters.genre
        : true;
      const matchesAge = filters.ageGroup
        ? product.ageGroup === filters.ageGroup
        : true;
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
    <section className="section-products">
      <div className="flex--center-v">
        <span className="subheading">Our products</span>
        <div className="grid container container--products">
          <ProductFilters
            filters={filters}
            setFilters={setFilters}
            onSearch={handleSearch}
          />
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
