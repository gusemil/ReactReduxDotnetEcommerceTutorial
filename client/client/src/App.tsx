import { useEffect, useState } from "react";
import { Product } from "./product"

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []) //add an empty array as a dependency or unless there will be an endless loop

  function addProduct(){
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
       price: (prevState.length * 100) + 100,
       brand: 'some brand',
       description: 'some description',
       pictureUrl: "http://picsum.photos/200"
      }])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}> {product.name} - {product.price}</li> //unique keys based on index
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App
