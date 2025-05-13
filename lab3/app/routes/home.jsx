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
  const [products, setProducts] = useState([]);
  // const { products } = useProducts();

  async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "books"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(data);
    setFilteredProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [filters, setFilters] = useState({
    userID: "",
    title: "",
    genre: "",
    ageGroup: "",
    keyWords: "",
    author: "",
  });

  useEffect(() => {
    handleSearch();
  }, [filters]);

  const [filteredProducts, setFilteredProducts] = useState();
  const handleSearch = () => {
    // e.preventDefault();
    // console.log("ON SEARCH");
    // console.log(filters);
    const filtered = products.filter((product) => {
      const matchesUserID = filters.userID
        ? product.userID === filters.userID
        : true;

      const matchesTitle = product.title
        ? product.title.toLowerCase().includes(filters.title.toLowerCase())
        : true;

      const matchesGenre = filters.genre
        ? product.genre === filters.genre
        : true;
      const matchesAge = filters.ageGroup
        ? product.ageGroup === filters.ageGroup
        : true;
      const matchesKeyWords = product.keyWords
        ? product.keyWords
            .toLowerCase()
            .includes(filters.keyWords.toLowerCase())
        : true;
      const matchesAuthor = product.author
        ? product.author.toLowerCase().includes(filters.author.toLowerCase())
        : true;

      console.log(
        matchesUserID,
        matchesAge,
        matchesAuthor,
        matchesGenre,
        matchesKeyWords,
        matchesTitle
      );
      return (
        matchesUserID &&
        matchesTitle &&
        matchesGenre &&
        matchesAge &&
        matchesKeyWords &&
        matchesAuthor
        //matchesTitle && matchesKeyWords && matchesAuthor
      );
    });
    // console.log("Filtered ", filtered);
    setFilteredProducts(filtered);
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
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
