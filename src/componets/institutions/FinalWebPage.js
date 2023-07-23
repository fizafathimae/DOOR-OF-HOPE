import React from "react";
import Navbar2 from "./Navbar2";

function FinalWebPage() {
  return (
    <div>
      <Navbar2 />
      <div
        className="test2"
        style={{
          marginLeft: "0rem",
          paddingLeft: "11rem",
          paddingRight: "5rem",
          paddingTop: "10px",
        }}
      >
        <div>
          <img
            style={{ marginLeft: "25rem", marginTop: "10rem" }}
            src="https://www.terralindaptc.org/wp-content/uploads/2018/09/WelcomeVolunteer_Title.png"
            alt="loading..."
          />
        </div>
      </div>
    </div>
  );
}

export default FinalWebPage;
