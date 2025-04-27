import ProductCard from "./ProductCard";
import "../styles/general.css";
import "../styles/products.css";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p>
        chciałbym serdecznie przeprosić za niedostarczenie w pełni działającej
        funkcji filtrowania produktów w moim projekcie. Podczas pracy napotkałem
        problemy techniczne związane z błędami w środowisku projektowym, których
        — mimo wielu prób — nie udało mi się w pełni rozwiązać przed upływem
        terminu.
      </p>
    );
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
