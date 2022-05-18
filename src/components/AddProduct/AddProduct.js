import React, { useRef, useState } from 'react';
import './AddProduct.css';
const AddProduct = () => {
  const productRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const handleAddProduct = (e) => {
    const productName = productRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const newProduct = { productName, price, quantity };
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Product Added Successfully!!');
          console.log(data);
          productRef.current.value = '';
          priceRef.current.value = '';
          quantityRef.current.value = '';
        }
      });
    e.preventDefault();
  };
  return (
    <div className='add-product-container'>
      <h2>App Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className='form-control'>
          <input
            type='text'
            ref={productRef}
            placeholder='Product Name'
            required
          />
        </div>

        <div className='form-control'>
          <input type='number' ref={priceRef} placeholder=' Price' required />
        </div>
        <div className='form-control'>
          <input
            type='number'
            ref={quantityRef}
            placeholder='Quantity'
            required
          />
        </div>
        <input className='btn' type='submit' value='Add' />
      </form>
    </div>
  );
};

export default AddProduct;
