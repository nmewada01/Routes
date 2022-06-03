import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchproduct = (async) => {
      fetch(`http://localhost:2333/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    };
    fetchproduct();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="prod">
      ProductID : {id}
      <img className="img2" src={product.image} alt="logo" />
     <div>
     <div >Product Name: {product.name}</div>
      <div >Price:{product.price}</div>
     </div>
     </div>
    </div>
  );
};

export default Product;
