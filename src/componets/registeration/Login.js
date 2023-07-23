import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";
import { AuthUser } from "../../Firebase";
import { useNavigate } from "react-router-dom";

import React, { useContext, useState } from "react";
import { LogedinInstContext } from "../../Contexts";

function Login({ logTo }) {
  const { Email_pass_inst, setEmail_pass_inst } =
    useContext(LogedinInstContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const navigate = useNavigate();

  const sub = async (data) => {
    // e.preventDefault();
    console.log("%%%%%", data);
    await AuthUser(data.email, data.password)
      .then(() => {
        if (logTo == "institution") {
          setEmail_pass_inst({
            email: data.email,
            password: data.password,
            user: true,
          });
          navigate("/editpage");
        } else {
          navigate("/finalwebpage");
        }
      })
      .catch(() => console.log("invaied credentials"));
    reset();
  };
  ///////////////////////////////////////////
  console.log(logTo);
  return (
    <>
      <Container fluid style={{ marginTop: 71 }}>
        <div className="container">
          <br />
          <h1>Login</h1>
          <hr />
          <br />

          <form onSubmit={handleSubmit(sub)}>
            <div style={{ margin: 10 }}>
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
                    value="Login"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
