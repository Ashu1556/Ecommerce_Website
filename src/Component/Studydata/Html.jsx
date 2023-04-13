import React from "react";

const Html = () => {
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
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
          height={200}
          width={200}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          <b>Language:</b>Html
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
            HTML stands for HyperText Markup Language. It is used to design web
            pages using a markup language. HTML is the combination of Hypertext
            and Markup language. Hypertext defines the link between web pages. A
            markup language is used to define the text document within the tag
            which defines the structure of web pages. This language is used to
            annotate (make notes for the computer) text so that a machine can
            understand it and manipulate text accordingly. Most markup languages
            (e.g. HTML) are human-readable. The language uses tags to define
            what manipulation has to be done on the text.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Html;
