import React, { useContext, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { LogedinInstContext } from "../../../Contexts";

function AddBank() {
  const { Email_pass_inst, setEmail_pass_inst } =
    useContext(LogedinInstContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const CollectionRef = collection(db, "Bank");
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
      accountNO: data.accountNO,
      name: data.name,
      ifsc: data.ifsc,
      upiID: data.upiID,
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
      await HandleUpload("Bank", ImgUpload.name, ImgUpload)
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
            <label style={{ textAlign: "center" }}>
              QR Code
              <input
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "33rem",
                  backgroundImage:
                    "url(data:image/png;base64,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)",
                  backgroundRepeat: "round",
                }}
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
              Account Holder's Name
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
              Account Number
              <input
                className="form-control"
                name="accountNO"
                {...register("accountNO", {
                  required: "accountNO is required",
                })}
                onKeyUp={() => trigger("accountNO")}
              />
              {errors.accountNO && (
                <div>
                  <small className="text-danger">
                    {errors.accountNO.message}
                  </small>
                </div>
              )}
            </label>

            <label>
              IFSC
              <input
                className="form-control"
                name="ifsc"
                {...register("ifsc", {
                  required: "ifsc is required",
                })}
                onKeyUp={() => trigger("ifsc")}
              />
              {errors.ifsc && (
                <div>
                  <small className="text-danger">{errors.ifsc.message}</small>
                </div>
              )}
            </label>

            <label>
              UPI ID
              <input
                className="form-control"
                name="upiID"
                {...register("upiID", {
                  required: "upiID is required",
                })}
                onKeyUp={() => trigger("upiID")}
              />
              {errors.upiID && (
                <div>
                  <small className="text-danger">{errors.upiID.message}</small>
                </div>
              )}
            </label>

            <div>
              <input
                style={{ width: "100%" }}
                className="btn btn-success"
                type="submit"
                value="add bank"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBank;
