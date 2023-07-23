import React, { useContext, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { LogedinInstContext } from "../../../Contexts";

function AddService() {
  const { Email_pass_inst, setEmail_pass_inst } =
    useContext(LogedinInstContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const CollectionRef = collection(db, "Services");
  const [ImgUpload, setImgUpload] = useState("");
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

  const addDataEvent = async (data) => {
    await addDoc(CollectionRef, {
      photo: Url,
      title: data.title,
      description: data.description,
      email: Email_pass_inst.email,
      pass: Email_pass_inst.password,
    }).then(() => {
      return true;
    });
  };

  const subForEvent = async (data) => {
    // e.preventDefault();
    setImgUpload(data.photo[0]);
    console.log(data);
    console.log(ImgUpload);

    if (ImgUpload !== "") {
      await HandleUpload("Services", ImgUpload.name, ImgUpload)
        .then(() => {
          alert("image uploaded  :)");
          console.log("url ::::::   ", Url);

          if (Url !== "") {
            let ok = addDataEvent(data);
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
    <div>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="bx">
          <form onSubmit={handleSubmit(subForEvent)}>
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
                  <small className="text-danger">{errors.photo.message}</small>
                </div>
              )}
            </label>

            <label>
              Title
              <input
                className="form-control"
                name="title"
                {...register("title", {
                  required: "title is required",
                })}
                onKeyUp={() => trigger("title")}
              />
              {errors.title && (
                <div>
                  <small className="text-danger">{errors.title.message}</small>
                </div>
              )}
            </label>

            <label>
              Description
              <textarea
                className="description form-control"
                name="description"
                {...register("description", {
                  required: "description is required",
                })}
                onKeyUp={() => trigger("description")}
              />
              {errors.description && (
                <div>
                  <small className="text-danger">
                    {errors.description.message}
                  </small>
                </div>
              )}
            </label>
            <div>
              <input
                style={{ width: "100%" }}
                className="btn btn-success"
                type="submit"
                value="add service request"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddService;
