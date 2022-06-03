import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Products = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    if (id === 1) {
      navigate("/products/1");
    }
    else if (id === 2) {
      navigate("/products/2");
    }
    else if (id === 3) {
      navigate("/products/3");
    }
    else if(id===0){
      alert("Product does not exist")
      navigate("/display")
    }
    else if(id===4){
      navigate("/products/4")
    }
    else{
      alert("Product does not exist")
      navigate("/display")
    }
    
  };

  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:2333/products")
        .then((res) => res.json())
        .then((data) => {
          setproducts(data);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="red">Products: </h1>
      <Outlet />
      <div className="prod1">
        <Outlet />
        <div>
          {products.map((p) => {
            return (
              <div key={p.id}>
                <Link to="">{p.name}</Link>
                <button className="button" onClick={() => handleClick(p.id)}>click Here</button>
              </div>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
