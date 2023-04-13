import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    const productdata = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const newdata = await data.json();
      setState(newdata);
      console.log(newdata);
    };

    productdata();
  }, []);

  return (
    <div
      style={{
        margin: "50px",
        marginLeft: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "100vh",
      }}
    >
      <img src={state.image} height={400} width={400} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "100%",
        }}
      >
        <span>
          <b>Category:</b>
          <spna style={{ fontSize: "18px", color: "gray" }}>
            {state.category}
          </spna>
        </span>
        <span>
          <b>Description:</b>
          <span style={{ fontSize: "16px", color: "gray" }}>
            {state.description}
          </span>
        </span>
        <span>
          <b>Title:</b>
          <span style={{ fontSize: "18px", color: "gray" }}>{state.title}</span>
        </span>
        <span>
          <b>Price:</b>
          <span style={{ fontSize: "18px", color: "gray" }}>{state.price}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
