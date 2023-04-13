import React from "react";

const Reactdata = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
          height={200}
          width={200}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          <b>Language:</b>React
        </span>
        <br></br>
        <span>
          <b>Description:</b>
          <p
            style={{
              wordSpacing: "5px",
              lineHeight: "2.0",
              margin: "0 50px",
              color: "gray",
            }}
          >
            The React.js framework is an open-source JavaScript framework and
            library developed by Facebook. It’s used for building interactive
            user interfaces and web applications quickly and efficiently with
            significantly less code than you would with vanilla JavaScript. In
            React, you develop your applications by creating reusable components
            that you can think of as independent Lego blocks. These components
            are individual pieces of a final interface, which, when assembled,
            form the application’s entire user interface. React’s primary role
            in an application is to handle the view layer of that application
            just like the V in a model-view-controller (MVC) pattern by
            providing the best and most efficient rendering execution. Rather
            than dealing with the whole user interface as a single unit,
            React.js encourages developers to separate these complex UIs into
            individual reusable components that form the building blocks of the
            whole UI. In doing so, the ReactJS framework combines the speed and
            efficiency of JavaScript with a more efficient method of
            manipulating the DOM to render web pages faster and create highly
            dynamic and responsive web applications.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Reactdata;
