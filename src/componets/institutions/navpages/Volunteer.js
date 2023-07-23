import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase";
import Navbar from "../Navbar";

import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function Volunteer() {
  const usersCollectionRef = collection(db, "Volunteers");
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const snap = await getDocs(usersCollectionRef);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      snap.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data().name);
        console.log("---------------------------------------");
      });
    };
    getUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="test2"
        style={{
          marginLeft: "0rem",
          paddingLeft: "11rem",
          paddingRight: "2rem",
        }}
      >
        <h1>Volunteers</h1>
        <div style={{ backgroundColor: "wheat" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Place</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((volunt, key) => {
                return (
                  <tr key={volunt.id}>
                    <th scope="row">{key + 1}</th>
                    <td>{volunt.name}</td>
                    <td>{volunt.email}</td>
                    <td>{volunt.phone}</td>
                    <td>{volunt.address}</td>
                    <td>{volunt.place}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
