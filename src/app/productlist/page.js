"use client";
import { useEffect, useState} from 'react';
export default function Productlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const doSomethingAsync = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    };

    doSomethingAsync();
    return () => {
        // cleanup if needed
        setProducts([]);
        console.log('Component unmounted, cleanup done.');
    };
  }, []);

    return (
    <div>
      <h1>Product List</h1>
      <a href="/">Back to Home</a>
      {
        products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <ul style={{display: 'flex',listStyleType: 'none', padding: 0, margin: '10px', flexWrap: 'wrap'}}>
            {products.map(product => (
              <li key={product.id} style={{border: '1px solid gray', margin: '10px', padding: '10px', width: '200px', boxSizing: 'border-box'}}>
                <p>{product.title}</p>
                <h3>Price: ${product.price}</h3>
                <img src={product.image} alt={product.title} width="50" />
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
}
