import Detailsbtn from "./detailsbtn";

export default async function Allproducts() {
  const products = await fetchProducts();
  //console.log(products);
  return (
    <div>
      <h1>All Products Page</h1>
      {
        products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <p>Total Products: {products.length}</p>
        )
      }
      <a href="/">Back to Home</a>
      <ul style={{display: 'flex',listStyleType: 'none', padding: 0, margin: '10px', flexWrap: 'wrap'}}>
        {products.map(product => (
          <li key={product.id} style={{border: '1px solid gray', margin: '10px', padding: '10px', width: '200px', boxSizing: 'border-box'}}>
            <p>{product.title}</p>
            <h3>Price: ${product.price}</h3>
            <img src={product.thumbnail} alt={product.title} width="50" />
            <br />
            <Detailsbtn productId={product.id} />
          </li>
        ))}
      </ul>

      <p>This is the all product page.</p>
    </div>
  );
}

async function fetchProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  
  return data.products;
}
