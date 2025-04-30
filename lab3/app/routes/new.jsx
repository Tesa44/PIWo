import ProductNew from "../Components/ProductNew";

export function meta() {
  return [
    { title: "Add new product" },
    { name: "description", content: "Add new product" },
  ];
}

export default function New() {
  return <ProductNew></ProductNew>;
}
