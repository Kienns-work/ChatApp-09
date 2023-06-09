import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth,db,storage } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import {doc, setDoc} from 'firebase/firestore';
import LoadingOverlay from 'react-loading-overlay';
import { successToast } from "../../config/toastConfig";

function Register() {
  const [fileChosen, setFileChosen] = useState("No image chosen");
  const [imageData, setImageData] = useState("");
  const [textState, setTextState] = useState("Đang tạo tài khoản ...");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChosen = (e) => {
    const file = e.target.files[0];
    setFileChosen(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageData(reader.result);
    };
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const avatar = e.target[4].files[0];

    try {
      console.log(email);
      const res = await createUserWithEmailAndPassword(auth, email, password).then((res) => {
        setTextState("Đang tạo khởi tạo kết nối ...");
        return res;
      }).catch((err) => {
        console.log("rẽ vào nhánh sai của createUserwithEmail");
        console.log(err)
      });

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, avatar);
      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          setTextState("Đang lưu trữ Avatar ...")
          console.log("Chỗ này chạy vào phần đúng của uploadTask");
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("Con của phần đúng uploadTask ");
            console.log(res);
            await updateProfile(res.user,{
                displayName,
                photoURL: downloadURL,
            });
            setTextState("Chuẩn bị hoàn thành...")
            await setDoc(doc(db,"users",res.user.uid),{
              uid: res.user.uid,
              displayName: displayName,
              email: email,
              password,
              photoURL: downloadURL,
            });
            setIsLoading(false);
            successToast("Tạo tài khoản thành công");
            navigate("/login");
          });
        }
      );
    } catch (err) {
      console.log("Rẽ vào nhánh sai");
    }

  };


  return (
    
    <LoadingOverlay
    spinner
    text={textState}
      active= {isLoading}
      styles={{
        overlay: (base) => ({
          ...base,
          background: 'rgba(0, 0, 0,0.4)'
        })
      }}>
      
      <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={handleOnSubmit}>
            <div className="field input-field">
              <input
                type="text"
                placeholder="Your Nickname"
                className="input"
              />
            </div>

            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
              />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="field file-field input-field">
              <input type="file" id="file" hidden onChange={handleFileChosen} />
              <label htmlFor="file">Choose Your Avatar</label>
              <span className="file-chosen">{fileChosen}</span>
              {imageData && (
                <img
                  src={imageData}
                  className="chosen-image"
                  alt="Chosen File"
                />
              )}
            </div>

            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Already have an account?{" "}
              <Link to="/login" className="link login-link">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
    </LoadingOverlay>
  );
}

export default Register;
