import React from "react";

const Java = () => {
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
          src="https://chathamlibrary.librarycalendar.com/sites/default/files/2022-11/java-logo.png"
          height={200}
          width={200}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          <b>Language:</b>Java
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
            Java is a general-purpose, class-based, object-oriented programming
            language designed for having lesser implementation dependencies. It
            is a computing platform for application development. Java is fast,
            secure, and reliable, therefore. It is widely used for developing
            Java applications in laptops, data centers, game consoles,
            scientific supercomputers, cell phones, etc. Java is a
            general-purpose, class-based, object-oriented programming language
            designed for having lesser implementation dependencies. It is a
            computing platform for application development. Java is fast,
            secure, and reliable, therefore. It is widely used for developing
            Java applications in laptops, data centers, game consoles,
            scientific supercomputers, cell phones, etc.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Java;
