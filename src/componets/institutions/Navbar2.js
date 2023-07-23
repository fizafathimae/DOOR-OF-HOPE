import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar2() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="unlist">
        <li onClick={() => navigate("/inst-services2")}>service</li>
        <li onClick={() => navigate("/inst-events2")}>events</li>
      </ul>
    </div>
  );
}

export default Navbar2;
