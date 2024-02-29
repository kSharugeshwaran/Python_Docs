import React from "react";

const Cards = () => {
  return (
    <div className="homePage">
      <div className="ParentGrid">
        <div className="MainHeadings">
          <h1>WELCOME</h1>
          <p> TO THE WORLD OF CODING</p>
        </div>
        <div className="Grids">
          {/* INDIVIDUAL CARDS */}
          {/* GUIDE */}
          <div className="ParentCard">
            <div>
              <img
                className="vectorImg"
                src="https://i.imgur.com/0fxtnPW_d.webp?maxwidth=760&fidelity=grand"
              ></img>
              <h2 className="cardHeading">GUIDE</h2>
              <p className="cardPara"> The Guides To Get Started With Python</p>
            </div>
            {/* arrow mark */}
            <img
              className="arrowIcon"
              src="https://i.imgur.com/gkw73yr_d.webp?maxwidth=760&fidelity=grand"
            ></img>
          </div>
          {/* INDIVIDUAL CARDS */}
          {/* DOCS */}
          <div className="ParentCard">
            <div>
              <img
                className="vectorImg"
                src="https://i.imgur.com/PrfVMao_d.webp?maxwidth=1520&fidelity=grand"
              ></img>
              <h2 className="cardHeading">DOCS</h2>
              <p className="cardPara"> Complete Documentation of Python</p>
            </div>
            {/* arrow mark */}
            <img
              className="arrowIcon"
              src="https://i.imgur.com/gkw73yr_d.webp?maxwidth=760&fidelity=grand"
            ></img>
          </div>
          {/* INDIVIDUAL CARDS */}
          <div className="ParentCard">
            <div>
              <img
                className="vectorImg"
                src="https://i.imgur.com/c3G8CXC_d.webp?maxwidth=760&fidelity=grand"
              ></img>
              <h2 className="cardHeading">LIBRARIES</h2>
              <p className="cardPara">
                {" "}
                The Home to all the libraries in Python
              </p>
            </div>
            {/* arrow mark */}
            <img
              className="arrowIcon"
              src="https://i.imgur.com/gkw73yr_d.webp?maxwidth=760&fidelity=grand"
            ></img>
          </div>
          {/* INDIVIDUAL CARDS */}
          <div className="ParentCard">
            <div>
              <img
                className="vectorImg"
                src="https://i.imgur.com/hmNJ9Zp_d.webp?maxwidth=1520&fidelity=grand"
              ></img>
              <h2 className="cardHeading">VERSION HISTORY</h2>
              <p className="cardPara">
                {" "}
                All the Version Control History of Python
              </p>
            </div>
            {/* arrow mark */}
            <img
              className="arrowIcon"
              src="https://i.imgur.com/gkw73yr_d.webp?maxwidth=760&fidelity=grand"
            ></img>
          </div>
          {/* INDIVIDUAL CARDS */}
          <div className="ParentCard">
            <div>
              <img
                className="vectorImg"
                src="https://i.imgur.com/oD2loeR_d.webp?maxwidth=1520&fidelity=grand"
              ></img>
              <h2 className="cardHeading">NEWS</h2>
              <p className="cardPara"> The Lates Update of Python</p>
            </div>
            {/* arrow mark */}
            <img
              className="arrowIcon"
              src="https://i.imgur.com/gkw73yr_d.webp?maxwidth=760&fidelity=grand"
            ></img>
          </div>
          {/* INDIVIDUAL CARDS */}
          <div className="ParentCard">
            <div>
              <img
                className="vectorImg"
                src="https://i.imgur.com/HytlHBx.png"
              ></img>
              <h2 className="cardHeading">TUTORIALS</h2>
              <p className="cardPara">
                {" "}
                Get started with User Friendly Tutorials
              </p>
            </div>
            {/* arrow mark */}
            <img
              className="arrowIcon"
              src="https://i.imgur.com/gkw73yr_d.webp?maxwidth=760&fidelity=grand"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
