import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-login-box">
      <div className="login-box">
        <h2>Social Login</h2>
        <button
          className="social-button"
          id="facebook-connect"
        //   onClick={signInWithFacebook}
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
