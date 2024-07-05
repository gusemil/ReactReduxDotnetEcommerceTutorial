import { Product } from "../../app/models/product";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, []) //add an empty array as a dependency or unless there will be an endless loop

    return (
        <>
        <ProductList products={products}/>
      </>
    )
}