import { Welcome } from "../welcome/welcome";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import { ProductsProvider } from "../Contexts/ProductsContext";
import ProductFilters from "../Components/ProductFilters";
export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProductsProvider>
        <Products />
      </ProductsProvider>
    </>
  );
}
