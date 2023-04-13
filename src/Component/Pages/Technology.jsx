import React from "react";
import { Link, Outlet } from "react-router-dom";

const Technology = () => {
  return (
    <div>
      <div style={{ color: "darkgreen", margin: "50px 80px" }}>
        <h2>Technology</h2>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP._-w6vwBO7hd--KP1qqaPPAHaEL?pid=ImgDet&rs=1"
            width={600}
            height={200}
            alt="technology images"
          />
        </div>

        <p
          style={{
            width: "70%",
            color: "gray",
            fontSize: "20px",
            margin: "10px 200px",
            wordSpacing: "5px",
            lineHeight: "2.0",
          }}
        >
          Technology, the application of scientific knowledge to the practical
          aims of human life or, as it is sometimes phrased, to the change and
          manipulation of the human environment. technology, the application of
          scientific knowledge to the practical aims of human life or, as it is
          sometimes phrased, to the change and manipulation of the human
          environment.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "300px",
          margin: "60px 200px",
          border: "1px solid black",
          boxShadow: "0 0 20px black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "20px",
            width: "30%",
            height: "100%",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Link to="html">
            <p>Html</p>
          </Link>
          <Link to="css">
            <p>Css</p>
          </Link>
          <Link to="javascript">
            <p>Javascript</p>
          </Link>
          <Link to="java">
            <p>Java</p>
          </Link>
          <Link to="react">
            <p>React</p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            width: "70%",
            height: "100%",

            overflowY: "scroll",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Technology;
