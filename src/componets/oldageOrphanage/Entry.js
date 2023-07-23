import React from "react";
import { useNavigate } from "react-router-dom";
import "./Entry.css";

function Entry() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "6rem" }}>
      <form className="login" action="./" method="POST">
        <div className="content">
          <div className="header">
            <h2>Oldage</h2>
          </div>
          <p>
            <a onClick={() => navigate("/signup-entry1")}>
              <img
                className="image"
                src="https://fizabinthrazak.github.io/old1/old1.jpg"
              />
            </a>
          </p>
          <div className="header">
            <h2>Orphan</h2>
          </div>
          <p>
            <a onClick={() => navigate("/signup-entry2")}>
              <img
                className="image"
                src="https://fizabinthrazak.github.io/child1/child1.jpg"
              />
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Entry;
