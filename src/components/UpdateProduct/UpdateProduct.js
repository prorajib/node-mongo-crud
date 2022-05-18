import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleUpdateProduct = (e) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Product updated successfully');
          setProduct({});
        }
      });
    e.preventDefault();
  };

  const handleProductChange = (e) => {
    const updatedProductName = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.productName = updatedProductName;
    setProduct(updatedProduct);
  };
  const handleProductPrice = (e) => {
    const updatedPrice = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.price = updatedPrice;
    setProduct(updatedPrice);
  };

  const handleProductQuantity = (e) => {
    const updatedQuantity = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.quantity = updatedQuantity;
    setProduct(updatedProduct);
  };

  return (
    <div>
      <h2>Update:{product.productName}</h2>
      <form onSubmit={() => handleUpdateProduct(product)}>
        <div className='form-control'>
          <input
            value={product.productName || ''}
            type='text'
            placeholder='Product Name'
            onChange={handleProductChange}
            required
          />
        </div>

        <div className='form-control'>
          <input
            onChange={handleProductPrice}
            value={product.price || ''}
            type='number'
            placeholder=' Price'
            required
          />
        </div>
        <div className='form-control'>
          <input
            onChange={handleProductQuantity}
            value={product.quantity || ''}
            type='number'
            placeholder='Quantity'
            required
          />
        </div>
        <input className='btn' type='submit' value='Update' />
      </form>
    </div>
  );
};

export default UpdateProduct;
