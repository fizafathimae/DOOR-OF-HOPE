import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import "./Forum.css";

function Forum({ LNK }) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    console.log("LNK", LNK);

    const usersCollectionRef = collection(db, "Bank");
    const q = query(usersCollectionRef, where("email", "==", LNK));

    const getServices = async () => {
      const snap = await getDocs(q);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getServices();
  }, [LNK]);

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,.7)",
        height: "100%",
        paddingTop: "3rem",
        border: "3px ridge black",
        borderRadius: "22px",
        color: "green",
      }}
    >
      {Data.map((item) => {
        return (
          <div>
            <div>
              <img className="qrcode" src={item.photo} alt="loading..." />
            </div>
            <div className="accDetails">
              <div>Account Holder's Name : {item.name}</div>
              <div>Account Number : {item.accountNO}</div>
              <div>IFSC : {item.ifsc}</div>
              <div>UPI : {item.upiID}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forum;
