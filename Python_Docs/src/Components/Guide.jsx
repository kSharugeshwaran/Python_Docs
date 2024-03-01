import React from "react";

const Guide = () => {
  return (
    <div className="homePage">
      <div className="ParentGrid">
        <div className="MainHeadings">
          <h1>GUIDE</h1>
          <p>Your RoadMap To Success</p>
        </div>
        <div className="GuideGrids">
          {/* INDIVIDUAL CARDS */}
          {/* GUIDE */}
          <div className="ParentCard">
            <div>
              <img
                className="vectorImg"
                src="https://i.imgur.com/ROVFb1r.png/?maxwidth=760&fidelity=grand"
              ></img>
              <h2 className="cardHeading">BEGINNER</h2>
              <p className="cardPara"> Get Started with Python</p>
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
                src="https://i.ibb.co/6Hcrxxn/moderate.png"
              ></img>

              <h2 className="cardHeading">MODERATE</h2>
              <p className="cardPara">
                Enjoy the Learning with Minimal Knowledge
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
                src="https://i.ibb.co/9G6prgg/advanced.png"
              ></img>
              <h2 className="cardHeading">ADVANCED</h2>
              <p className="cardPara">Boost your Skills and Master Python</p>
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

export default Guide;
