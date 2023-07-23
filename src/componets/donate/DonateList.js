import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import Forum from "./Forum";

function DonateList() {
  const [Data, setData] = useState([]);
  const [link, setlink] = useState("");

  useEffect(() => {
    const usersCollectionRef = collection(db, "Institution");

    const getServices = async () => {
      const snap = await getDocs(usersCollectionRef);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getServices();
  }, []);

  const goto = (emailLNK) => {
    setlink(emailLNK);
    console.log(emailLNK);
  };

  return (
    <div className="row">
      <div
        className="col-7"
        style={{
          paddingTop: "3rem",
          paddingRight: "3rem",
          backgroundColor: "transparent",
        }}
      >
        <ol>
          {Data.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => goto(item.email)}
                style={{
                  marginTop: "20px",
                  color: "green",
                  backgroundColor: "rgba(0,0,0,.7)",
                  width: "100%",
                  height: "2rem",
                  cursor: "pointer",
                  borderRadius: "25px",
                  boxShadow: "-2px 3px white",
                  paddingTop: "2px",
                }}
              >
                {item.name} , {item.place}
              </li>
            );
          })}
        </ol>
      </div>
      <div
        className="col-5"
        style={{ padding: "2rem", backgroundColor: "transparent" }}
      >
        <Forum LNK={link} />
      </div>
    </div>
  );
}

export default DonateList;
