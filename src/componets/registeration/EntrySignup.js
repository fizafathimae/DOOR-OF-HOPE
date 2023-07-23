import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { useState } from "react";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";

function EntrySignup({ type }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const storage = getStorage();
  const [Url, setUrl] = useState("");

  const HandleUpload = async (folder, refname, file) => {
    const storageRef = ref(storage, `${folder}/${refname}`);
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);

        console.log("File available at", downloadURL);
      });
    });
  };

  const [ImgUpload, setImgUpload] = useState("");

  const CollectionRef = collection(db, "Entry");

  const addData = async (data) => {
    await addDoc(CollectionRef, {
      helper_name: data.name,
      helper_email: data.email,
      helper_phone: data.phone,
      helper_place: data.place,
      helper_address: data.address,

      name: data.name1,
      place: data.place1,
      gender: data.gender,
      age: data.age,
      photo: Url,
      type: type,
    }).then(() => {
      return true;
    });
  };

  const sub = async (data) => {
    // e.preventDefault();
    setImgUpload(data.photo[0]);
    console.log(data);
    console.log(ImgUpload);

    if (ImgUpload != "") {
      await HandleUpload("Images", ImgUpload.name, ImgUpload)
        .then(() => {
          alert("image uploaded  :)");
          console.log("url ::::::   ", Url);

          if (Url != "") {
            let ok = addData(data);
            if (ok) {
              alert("Succussfully registered");
              setUrl("");
              reset();
            }
          } else {
            alert("try again !");
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      alert("image not uploaded !");
    }
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
              <h4
                style={{
                  color: "rgb(251, 255, 114)",
                  fontFamily: "Sofia",
                }}
              >
                Helper Details:
              </h4>
              <br />
              <label>
                Name
                <input
                  className="form-control"
                  name="name"
                  {...register("name", {
                    required: "name is required",
                  })}
                  onKeyUp={() => trigger("name")}
                />
                {errors.name && (
                  <div>
                    <small className="text-danger">{errors.name.message}</small>
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
              <br />
              <br />

              <h4
                style={{
                  color: "rgb(251, 255, 114)",
                  fontFamily: "Sofia",
                }}
              >
                {type} Details:
              </h4>
              <br />

              <label>
                Name
                <input
                  className="form-control"
                  name="name1"
                  {...register("name1", {
                    required: "name is required",
                  })}
                  onKeyUp={() => trigger("name1")}
                />
                {errors.name1 && (
                  <div>
                    <small className="text-danger">
                      {errors.name1.message}
                    </small>
                  </div>
                )}
              </label>

              <label>
                Place
                <input
                  className="form-control"
                  name="place1"
                  {...register("place1", {
                    required: "place is required",
                  })}
                  onKeyUp={() => trigger("place1")}
                />
                {errors.place1 && (
                  <div>
                    <small className="text-danger">
                      {errors.place1.message}
                    </small>
                  </div>
                )}
              </label>

              <label>
                Age
                <input
                  className="form-control"
                  name="age"
                  {...register("age", {
                    required: "age is required",
                  })}
                  onKeyUp={() => trigger("age")}
                />
                {errors.age && (
                  <div>
                    <small className="text-danger">{errors.age.message}</small>
                  </div>
                )}
              </label>

              <label>
                Photo
                <input
                  type="file"
                  className="form-control"
                  name="photo"
                  {...register("photo", {
                    required: "photo is required",
                  })}
                  onKeyUp={() => trigger("photo")}
                />
                {errors.photo && (
                  <div>
                    <small className="text-danger">
                      {errors.photo.message}
                    </small>
                  </div>
                )}
              </label>

              <label>
                <br />
                <b>Gender </b> &emsp;&emsp;&emsp; male
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  {...register("gender", {
                    required: "gender is required",
                  })}
                  onKeyUp={() => trigger("gender")}
                />
                &emsp;&emsp; female
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  {...register("gender", {
                    required: "gender is required",
                  })}
                  onKeyUp={() => trigger("gender")}
                />
                &emsp;&emsp; other
                <input
                  type="radio"
                  value="other"
                  name="gender"
                  {...register("gender", {
                    required: "gender is required",
                  })}
                  onKeyUp={() => trigger("gender")}
                />
                {errors.gender && (
                  <div>
                    <small className="text-danger">
                      {errors.gender.message}
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

export default EntrySignup;
