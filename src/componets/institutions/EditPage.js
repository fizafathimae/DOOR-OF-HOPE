import React, { useContext, useState } from "react";
import AddBank from "./editpageContent/AddBank";
import AddEvent from "./editpageContent/AddEvent";
import AddService from "./editpageContent/AddService";
import DeleteEvent from "./editpageContent/DeleteEvent";
import DeleteService from "./editpageContent/DeleteService";
import Navbar from "./Navbar";
import { LogedinInstContext } from "../../Contexts";

function EditPage() {
  const [prnt, setprnt] = useState(false);
  const [prnt1, setprnt1] = useState(false);
  const [prnt2, setprnt2] = useState(false);
  const [prnt3, setprnt3] = useState(false);
  const [prnt4, setprnt4] = useState(false);

  const addService = () => {
    setprnt(!prnt);
    setprnt1(false);
    setprnt2(false);
    setprnt3(false);
    setprnt4(false);
  };
  const addEvent = () => {
    setprnt1(!prnt1);
    setprnt(false);
    setprnt2(false);
    setprnt3(false);
    setprnt4(false);
  };

  const editService = () => {
    setprnt2(!prnt2);
    setprnt1(false);
    setprnt3(false);
    setprnt(false);
    setprnt4(false);
  };
  const editEvent = () => {
    setprnt3(!prnt3);
    setprnt1(false);
    setprnt2(false);
    setprnt(false);
    setprnt4(false);
  };

  const addBank = () => {
    setprnt4(!prnt4);
    setprnt1(false);
    setprnt2(false);
    setprnt(false);
    setprnt3(false);
  };

  const { Email_pass_inst, setEmail_pass_inst } =
    useContext(LogedinInstContext);
  if (Email_pass_inst.user) {
    return (
      <div>
        <Navbar />
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
            <button className="tak btn btn-outline-info" onClick={addService}>
              Add Service Request
            </button>

            <button className="tak btn btn-outline-success" onClick={addEvent}>
              Add Events
            </button>
            <button className="tak btn btn-outline-danger" onClick={editEvent}>
              Remove Events
            </button>
            <button
              className="tak btn btn-outline-warning"
              onClick={editService}
            >
              Remove Service Request
            </button>
            <button className="tak btn btn-outline-primary" onClick={addBank}>
              Add Bank
            </button>
          </div>
          <div>{prnt1 && <AddEvent />}</div>
          <div>{prnt && <AddService />}</div>
          <div>{prnt3 && <DeleteEvent />}</div>
          <div>{prnt2 && <DeleteService />}</div>
          <div>{prnt4 && <AddBank />}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ color: "red" }}>
          Error : UNAUTHERISED ACCESS PREVENTED !!!
        </h1>
      </div>
    );
  }
}

export default EditPage;
