import ProductCard from "./ProductCard";
import "../styles/general.css";
import "../styles/products.css";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>No serach results.</p>;
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
