import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import React from "react";
import {Link} from "react-router-dom";
import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../config/toastConfig";
import { getImagePath } from "../../utils/GetImagePath";


const fbIcon = getImagePath('fbIcon');
const ggIcon = getImagePath('ggIcon');

const LoginPage = () => {
  const navigate = useNavigate();
  const signInWithFB = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/");
        successToast(`Welcome ${res.user.displayName}`);
      })
      .catch((err) => {
        console.log(err.message);
        errorToast("Đăng nhập thất bại");
      });
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/");
        successToast(`Welcome ${res.user.displayName}`);
      })
      .catch((err) => {
        console.log(err.message);
        errorToast("Đăng nhập thất bại");
      });
  };
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log("Đăng nhập");
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  
  

  }

  return (
    <section className="container forms">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>
                    <form onSubmit={handleOnSubmit}>
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input" />
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Password" className="password" />
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="form-link">
                            <Link href="/" className="forgot-pass">Forgot password?</Link>
                        </div>

                        <div className="field button-field">
                            <button>Login</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Don't have an account? <Link to="/register" className="link signup-link">Signup</Link></span>
                    </div>
                </div>

                <div className="line"></div>

                <div className="media-options">
                    <button onClick={signInWithFB} className="field facebook">
                        <img src={fbIcon} alt="" className="google-img" />
                        <span>Login with Facebook</span>
                    </button>
                </div>

                <div className="media-options">
                    <button onClick={signInWithGoogle} className="field google">
                        <img src={ggIcon} alt="" className="google-img" />
                        <span>Login with Google</span>
                    </button>
                </div>

            </div>

            
        </section>
  );
};

export default LoginPage;
