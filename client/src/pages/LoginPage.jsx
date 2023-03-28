import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import {auth} from '../config/firebaseConfig'
import { useNavigate } from "react-router-dom";
import {errorToast, successToast} from '../config/toastConfig';

const LoginPage = () => {

    const navigate = useNavigate();
    const signInWithFB = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then(res => {
            console.log(res);
            navigate("/");
            successToast(`Welcome ${res.user.displayName}`);
        })
        .catch(err => {
            console.log(err.message);
            errorToast('Đăng nhập thất bại');
        })
    }

    
  return (
    <div className="bg-login-box">
      <div className="login-box">
        <h2>Social Login</h2>
        <button
          className="social-button"
          id="facebook-connect"
          onClick={signInWithFB}
        >
          {" "}
          <span>Connect with Facebook</span>
        </button>
        <button
          
          className="social-button"
          id="google-connect"
        //   onClick={signInWithGoogle}
        >
          {" "}
          <span>Connect with Google</span>
        </button>
        <button
          className="social-button"
          id="github-connect"
        //   onClick={signInWithGithub}
        >
          {" "}
          <span>Connect with Github</span>
        </button>
        <button className="social-button" id="phone-connect">
          {" "}
          <span>Connect with Phone</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
