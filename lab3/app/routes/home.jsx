import { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import ProductFilters from "../Components/ProductFilters";
import ProductList from "../Components/ProductList";
import { ProductProvider, useProducts } from "../Contexts/ProductContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Services/init";
export function meta() {
  return [
    { title: "Our Products" },
    { name: "description", content: "Browse our product collection" },
  ];
}

export default function Home() {
  const [products, setProducts] = useState();
  // const { products } = useProducts();

  async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "books"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [filters, setFilters] = useState({
    title: "",
    genre: "",
    ageGroup: "",
    keyWords: "",
    author: "",
  });
  // const [filteredProducts, setFilteredProducts] = useState(products || []);

  const handleSearch = (e) => {
    e.preventDefault();

    const isFilteringEmpty = Object.values(filters).every(
      (value) => value === ""
    );

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

    setProducts(filtered);
  };

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <section className="section-products">
        <div className="flex--center-v">
          <span className="subheading">Our products</span>
          <div className="grid container container--products">
            <ProductFilters
              filters={filters}
              setFilters={setFilters}
              onSearch={handleSearch}
            />
            <ProductList products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
