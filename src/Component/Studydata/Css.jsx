import React from "react";

const Css = () => {
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
          src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
          height={200}
          width={200}
          alt=""
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          <b>Language:</b>CSS
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
            Cascading Style Sheets (CSS) is a stylesheet language used to
            describe the presentation of a document written in HTML or XML
            (including XML dialects such as SVG, MathML or XHTML). CSS describes
            how elements should be rendered on screen, on paper, in speech, or
            on other media. CSS is among the core languages of the open web and
            is standardized across Web browsers according to W3C specifications.
            Previously, the development of various parts of CSS specification
            was done synchronously, which allowed the versioning of the latest
            recommendations. You might have heard about CSS1, CSS2.1, or even
            CSS3. There will never be a CSS3 or a CSS4; rather, everything is
            now CSS without a version number.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Css;
