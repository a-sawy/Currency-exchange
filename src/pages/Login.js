import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/userActions";

const Login = () => {
  const { userToken, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [navigate, userToken]);

  const loginHandler = (e) => {
    e.preventDefault();

    const loginInfo = {
      enteredEmail: emailInputRef.current.value,
      enteredPassword: passwordInputRef.current.value,
    };

    dispatch(userLogin(loginInfo));
  };

  return (
    <div className="singing-container">
      {loading && <p className="statusMessage">loading...</p>}
      {error && (
        <p className="statusMessage red">
          Some Thing Went Wrong, Please Try Again
        </p>
      )}

      <form className="singing-card" onSubmit={loginHandler}>
        <h2 className="form-title">Login</h2>

        <div className="form-input">
          <label>email</label>
          <input type="text" placeholder="email" ref={emailInputRef} />
        </div>
        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </div>
        <div className="form-input">
          <button>Login</button>
        </div>
        <Link to="/register">Don't have Account ? Register now</Link>
      </form>
    </div>
  );
};

export default Login;
