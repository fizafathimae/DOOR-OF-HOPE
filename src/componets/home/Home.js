import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginTop: "1rem", padding: "1rem" }}>
        <div className="row">
          <div className="column">
            <div onClick={() => navigate("/donate")} className="card">
              <h3 style={{ fontFamily: "Sofia", marginBottom: "1.5rem" }}>
                Donate Now
              </h3>
              <img
                src="https://www.goodwillaz.org/wordpress/wp-content/uploads/2018/04/5-15-1.jpg"
                alt="loading.."
              />
            </div>
          </div>

          <div className="column">
            <div onClick={() => navigate("/entry")} className="card">
              <h3 style={{ fontFamily: "Sofia", marginBottom: "1.5rem" }}>
                Oldage-Orphanage Entry
              </h3>
              <img
                src="https://borgenproject.org/wp-content/uploads/Orphans-in-Zimbabwe.jpg"
                alt="loading.."
              />
            </div>
          </div>

          <div className="column">
            <div onClick={() => navigate("/signup-volunteer")} className="card">
              <h3 style={{ fontFamily: "Sofia", marginBottom: "1.5rem" }}>
                Become a Volunteer
              </h3>
              <img
                src="https://cswgroup.co.uk/wp-content/uploads/2019/07/Volunteers_Raised_Hands_MHagerty.png"
                alt="loading..."
              />
            </div>
          </div>

          <div className="column">
            <div
              onClick={() => navigate("/signup-institution")}
              className="card"
            >
              <h3 style={{ fontFamily: "Sofia", marginBottom: "1.5rem" }}>
                Instituton-Sign-Up
              </h3>
              <img
                src="https://southeasternadmin.files.wordpress.com/2013/02/does-it-all.jpg"
                alt="loading..."
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
