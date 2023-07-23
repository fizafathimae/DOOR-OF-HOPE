import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";
import { CreateUser, db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

function InstitutionSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const navigate = useNavigate();

  let errorfree = true;

  const sub = async (data) => {
    // e.preventDefault();
    console.log(data);
    await CreateUser(data.email, data.password).catch((error) => {
      if (error) {
        console.log(error.message);
        alert("user already existing");
        errorfree = false;
      }
    });

    if (errorfree == true) {
      addData(data)
        .then(navigate("/institution-login"))
        .catch((error) => console.log(error.message));
    }

    reset();
  };

  const [passwod, setpasswod] = useState("");
  const [cpass, setcpass] = useState("");

  const CollectionRef = collection(db, "Institution");

  const addData = async (data) => {
    await addDoc(CollectionRef, {
      name: data.institute,
      password: data.password,
      email: data.email,
      phone: data.phone,
      place: data.place,
      type: data.types,
      address: data.address,
    });
  };

  return (
    <>
      <Container className="all" fluid style={{ marginTop: 71 }}>
        <div className="container">
          <br />
          <h1>SignUp</h1>
          <hr />
          <br />

          <form onSubmit={handleSubmit(sub)}>
            <div style={{ margin: 10 }}>
              <label>
                Institute Name
                <input
                  className="form-control"
                  name="institute"
                  {...register("institute", {
                    required: "institute is required",
                  })}
                  onKeyUp={() => trigger("institute")}
                />
                {errors.institute && (
                  <div>
                    <small className="text-danger">
                      {errors.institute.message}
                    </small>
                  </div>
                )}
              </label>
              <label>
                Email
                <input
                  style={errors.email && { borderColor: "red" }}
                  className={`form-control ${errors.email && "invalid"}`}
                  name="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "invalied email",
                    },
                  })}
                  onKeyUp={() => trigger("email")}
                />
                {errors.email && (
                  <div>
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  </div>
                )}
              </label>
              <label>
                Password
                <input
                  className="form-control"
                  name="password"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                      message:
                        "password must contain atleast 6 characters with numbers,alphabets & special symbols",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("password");
                    setpasswod(e.target.value);
                  }}
                />
                {errors.password && (
                  <div>
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  </div>
                )}
              </label>
              <label>
                Confirm password
                <input
                  className="form-control"
                  name="cpassword"
                  {...register("cpassword", {
                    required: "password should be confirmed",
                  })}
                  onKeyUp={(e) => {
                    trigger("cpassword");
                    setcpass(e.target.value);
                  }}
                />
                {passwod != cpass && (
                  <div>
                    <small className="text-danger">password not match</small>
                  </div>
                )}
              </label>
              <label>
                Phone
                <input
                  className="form-control"
                  name="phone"
                  {...register("phone", {
                    required: "phone is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "invalied phone number",
                    },
                  })}
                  onKeyUp={() => trigger("phone")}
                />
                {errors.phone && (
                  <div>
                    <small className="text-danger">
                      {errors.phone.message}
                    </small>
                  </div>
                )}
              </label>
              <label>
                Address
                <textarea
                  className="address form-control"
                  name="address"
                  {...register("address", {
                    required: "address is required",
                  })}
                  onKeyUp={() => trigger("address")}
                />
                {errors.address && (
                  <div>
                    <small className="text-danger">
                      {errors.address.message}
                    </small>
                  </div>
                )}
              </label>
              <label>
                Place
                <input
                  className="form-control"
                  name="place"
                  {...register("place", {
                    required: "place is required",
                  })}
                  onKeyUp={() => trigger("place")}
                />
                {errors.place && (
                  <div>
                    <small className="text-danger">
                      {errors.place.message}
                    </small>
                  </div>
                )}
              </label>

              <label>
                <br />
                <b>Type </b> &emsp;&emsp;&emsp; Orphanage
                <input
                  type="radio"
                  value="orphanage"
                  name="types"
                  {...register("types", {
                    required: "types is required",
                  })}
                  onKeyUp={() => trigger("types")}
                />
                &emsp;&emsp; Oldage
                <input
                  type="radio"
                  value="oldage"
                  name="types"
                  {...register("types", {
                    required: "types is required",
                  })}
                  onKeyUp={() => trigger("types")}
                />
                &emsp;&emsp; Both
                <input
                  type="radio"
                  value="both"
                  name="types"
                  {...register("types", {
                    required: "types is required",
                  })}
                  onKeyUp={() => trigger("types")}
                />
                {errors.types && (
                  <div>
                    <small className="text-danger">
                      {errors.types.message}
                    </small>
                  </div>
                )}
              </label>

              <br />
              <br />
              <div className="row">
                <div className="col">
                  <Button
                    style={{ width: "100%" }}
                    onClick={() => reset()}
                    variant="danger"
                  >
                    reset
                  </Button>
                </div>

                <div className="col">
                  <input
                    style={{ width: "100%" }}
                    className="btn btn-success"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
              <br />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default InstitutionSignup;
