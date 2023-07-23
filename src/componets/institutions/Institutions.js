import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

function Institutions() {
  const [InstId, setInstId] = useState("");
  console.log(InstId);

  const [Data, setData] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "Events");

    const getEntrys = async () => {
      const snap = await getDocs(usersCollectionRef);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEntrys();
  }, []);

  return (
    <div>
      <div
        style={{
          marginLeft: "0rem",
          paddingLeft: "10rem",
        }}
      >
        <h1 style={{ fontFamily: "cursive" }}>Events</h1>
        <hr />
        <div class="main001">
          {Data.map((item, key) => {
            return (
              <div key={key} className="card001">
                <div className="image001">
                  <img src={`${item.photo}`} alt="loading..." />
                </div>
                <div className="title">
                  <h5>{item.title}</h5>
                </div>
                <div className="des">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Institutions;
