import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const navigate = useNavigate();

  const sub = (data) => {
    // e.preventDefault();
    console.log(data);
    reset();
    navigate("/donate-list");
  };
  ///////////////////////////////////////////

  return (
    <>
      <Container fluid style={{ marginTop: 71 }}>
        <div className="container">
          <br />
          <h1>Donate Now</h1>
          <hr />
          <br />

          <form onSubmit={handleSubmit(sub)}>
            <div style={{ margin: 10 }}>
              <label>
                Full Name
                <input
                  className="form-control"
                  name="name"
                  {...register("name", { required: "name is required" })}
                />
                {errors.name && (
                  <div>
                    <small className="text-danger">{errors.name.message}</small>
                  </div>
                )}
              </label>
              <label>
                Amount
                <input
                  className="form-control"
                  name="amount"
                  {...register("amount", { required: "amount is required" })}
                />
                {errors.amount && (
                  <div>
                    <small className="text-danger">
                      {errors.amount.message}
                    </small>
                  </div>
                )}
              </label>

              <br />
              <br />
              <div className="row">
                <div className="col">
                  <input
                    style={{ width: "100%" }}
                    className="btn btn-success"
                    type="submit"
                    value="Proceed"
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

export default Donate;
