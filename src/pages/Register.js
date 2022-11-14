import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userActions";

const Register = () => {
  const { loading, error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate("/login");
  }, [navigate, success]);

  // const userNameRef = useRef("");
  const emailRef = useRef("");
  // const nameRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const userInfo = {
      // const enteredUsername = userNameRef.current.value;
      enteredEmail: emailRef.current.value,
      // const enteredName = nameRef.current.value;
      enteredPassword: passwordRef.current.value,
    };

    dispatch(registerUser(userInfo));
  };

  return (
    <div className="singing-container">
      {loading && <p className="statusMessage">loading...</p>}
      {error && (
        <p className="statusMessage red">
          Some Thing Went Wrong, Please Try Again
        </p>
      )}
      {success && <p className="statusMessage green"> register completed</p>}

      <form className="singing-card" onSubmit={submitHandler}>
        <h2 className="form-title">Create Account</h2>
        {/* <div className="form-input">
          <label>Username</label>
          <input type="text" placeholder="Username" ref={userNameRef} />
        </div> */}
        <div className="form-input">
          <label>Email</label>
          <input type="email" placeholder="Username" ref={emailRef} />
        </div>
        {/* <div className="form-input">
          <label>Name</label>
          <input type="email" placeholder="Name" ref={nameRef} />
        </div> */}
        <div className="form-input">
          <label>Password</label>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <div className="form-input">
          <button>Register</button>
        </div>
        <Link to="/login">already have Account ? sing in</Link>
      </form>
    </div>
  );
};

export default Register;
