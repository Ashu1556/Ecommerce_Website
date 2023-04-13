import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [state, setState] = useState([]);

  const productdata = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const newdata = await data.json();
    setState(newdata);
    console.log(newdata);
  };

  useEffect(() => {
    productdata();
  }, []);
  return (
    <div className="product">
      <div style={{ color: "Brown", margin: "50px 80px" }}>
        <h2>Product</h2>
      </div>

      <div className="productdata">
        {state.length > 0 &&
          state.map((ele) => {
            return (
              <div key={ele.id} className="productdata1">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                  src={ele.image}
                  alt="product_image"
                />
                <div className="productdata3">
                  <div className="title">
                    {" "}
                    <b>Title:</b> <p>{ele.title}</p>
                  </div>
                  <div className="price">
                    {" "}
                    <b>Price:</b> <p>{ele.price}</p>
                  </div>
                </div>
                <div>
                  {" "}
                  <Link to={`/productDetails/${ele.id}`}>
                    {" "}
                    <button>More Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
