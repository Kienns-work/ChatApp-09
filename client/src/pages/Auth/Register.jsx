import React from "react";
import {Link} from 'react-router-dom';

function Register() {
  return (
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form action="#">
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

            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Already have an account? { " "}
              <Link to="/login" className="link login-link">
                Login
              </Link>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Register;
