import React from 'react'
import { useEffect, useState } from 'react';
import "./Card.css";


function Card() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);
  return (
    <div className='card-container'>
    <h1>FakeStore App</h1>
    {products.map((product) => (
      <div className='card' key={product.id}>
        <p>{product.title}</p>
        <img src={product.image} alt="" width={50} />
      </div>
    ))}
  </div>
  )
}

export default Card