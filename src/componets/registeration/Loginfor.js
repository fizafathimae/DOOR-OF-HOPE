import React from "react";
import { useNavigate } from "react-router-dom";

import "./Loginfor.css";

function Loginfor() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "5rem" }}>
      <form className="login" action="./" method="POST">
        <div className="content">
          <div className="header">
            <h2 style={{ fontFamily: "Audiowide" }}>Institution Login</h2>
          </div>
          <p>
            <a onClick={() => navigate("/institution-login")}>
              <img
                className="image"
                src="https://southeasternadmin.files.wordpress.com/2013/02/does-it-all.jpg"
              />
            </a>
          </p>
          <div className="header">
            <h2 style={{ fontFamily: "Audiowide" }}>Volunteer Login</h2>
          </div>
          <p>
            <a onClick={() => navigate("/volunteer-login")}>
              <img
                className="image"
                src="https://cswgroup.co.uk/wp-content/uploads/2019/07/Volunteers_Raised_Hands_MHagerty.png"
              />
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Loginfor;
