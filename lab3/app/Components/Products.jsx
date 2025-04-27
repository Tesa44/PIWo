import "../styles/general.css";
import "../styles/products.css";
import React from "react";
import { useProducts } from "../Contexts/ProductsContext";

export default function Products({ filters }) {
  const products = useProducts();

  // Filtrowanie produktów na podstawie propsów "filters"
  const filteredProducts = products.filter((product) => {
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

  return (
    <section class="section-products">
      <div class="flex--center-v">
        <span class="subheading">Our products</span>
        <div class="grid container container--products"></div>
      </div>
    </section>
  );
}
