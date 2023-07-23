import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="unlist">
        <li onClick={() => navigate("/editpage")}>home</li>
        <li onClick={() => navigate("/inst-volunteers")}>volunteer</li>
        <li onClick={() => navigate("/inst-services")}>service</li>
        <li onClick={() => navigate("/inst-events")}>events</li>
        <li onClick={() => navigate("/inst-entrys")}>entrys</li>
      </ul>
    </div>
  );
}

export default Navbar;
