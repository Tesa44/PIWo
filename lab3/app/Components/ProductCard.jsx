import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div class="product-box">
      <img class="book-img" src="./img/book-1.jpg" alt="book" />
      <div class="book-content">
        <h3 class="heading-tertiary">{product.title}</h3>
        <ul class="features-list">
          <li class="features-link">
            <p>Genre</p>
            <span>{products.genre}</span>
          </li>

          <li class="features-link">
            <p>Age group</p>
            <span>{products.age}</span>
          </li>

          <li class="features-link">
            <p>Key words</p>
            <span>{product.keyWords}</span>
          </li>

          <li class="features-link">
            <p>Author</p>
            <span>{product.author}</span>
          </li>
        </ul>
        <div class="book-price">
          <span>{product.price} €</span>
          <button class="btn btn--shop">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
