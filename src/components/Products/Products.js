import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      'Are you sure, you want to delete this product?'
    );
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;

      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert('Product deleted successfully!!');
            const remainingProducts = products.filter(
              (product) => product._id != id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <h3>All products:{products.length}</h3>
      {products.map((product) => (
        <li key={product._id}>
          <h4>
            {product.productName} Price:{product.price} Quantity:
            {product.quantity}
            <Link to={`/products/update/${product._id}`}>Update</Link>{' '}
            <button onClick={() => handleDeleteProduct(product._id)}>X</button>
          </h4>
        </li>
      ))}
    </div>
  );
};

export default Products;
