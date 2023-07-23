import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase";
import Navbar from "../Navbar";
import "./Entry.css";
import { collection, getDocs } from "firebase/firestore";

function Entry() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "Entry");

    const getEntrys = async () => {
      const snap = await getDocs(usersCollectionRef);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEntrys();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="test2"
        style={{
          marginLeft: "0rem",
          paddingLeft: "9.5rem",
          paddingRight: "1rem",
        }}
      >
        <h1>Entry</h1>

        <input
          type="text"
          id="myInput"
          placeholder="Search for names.."
          title="Type in a name"
        />

        <table id="myTable">
          <thead>
            <tr className="header">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Place</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Helper Name</th>
              <th>Helper Email</th>
              <th>Helper Phone</th>
              <th>Helper Address</th>
              <th>Helper Place</th>
            </tr>
          </thead>

          <tbody>
            {Data.map((entry, key) => {
              return (
                <tr key={entry.id}>
                  <td>{key + 1}</td>
                  <td>
                    <img
                      src={`${entry.photo}`}
                      width="125px"
                      height="145px"
                      alt="loading..."
                    />
                  </td>
                  <td>{entry.name}</td>
                  <td>{entry.place}</td>
                  <td>{entry.age}</td>
                  <td>{entry.gender}</td>
                  <td>{entry.helper_name}</td>
                  <td>{entry.helper_email}</td>
                  <td>{entry.helper_phone}</td>
                  <td>{entry.helper_address}</td>
                  <td>{entry.helper_place}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Entry;
