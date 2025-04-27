import "../styles/general.css";
import "../styles/products.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-box">
      <div className="book-content">
        <h3 className="heading-tertiary">{product.title}</h3>
        <ul className="features-list">
          <li className="features-link">
            <p>Genre</p>
            <span>{product.genre}</span>
          </li>
          <li className="features-link">
            <p>Age group</p>
            <span>{product.ageGroup}</span>
          </li>
          <li className="features-link">
            <p>Key words</p>
            <span>{product.keyWords}</span>
          </li>
          <li className="features-link">
            <p>Author</p>
            <span>{product.author}</span>
          </li>
        </ul>
        <div className="book-price">
          <span>{product.price} €</span>
          <button className="btn btn--shop">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
