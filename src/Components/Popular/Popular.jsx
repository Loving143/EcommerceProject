import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../Api/SignupUser';
import { Item } from '../Item/Item';

export const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("popular")
      .then(res => {
        console.log("Fetched products"+res.data)
        setProducts(res.data)
      })
      .catch(err => console.error("Failed to fetch popular products", err));
  }, []);

  return (
    <div className="popular">
      <h1>Popular Products</h1>
      <hr />
      <div className="popular-item">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
