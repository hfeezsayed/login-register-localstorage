import React, { useState } from "react";
import Signimg from "./Signimg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const onChangeHandle = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    const getUserData = localStorage.getItem("userData");
    console.log(getUserData);

    const { email, password } = inputVal;
    if (email === "") {
      alert("Email field is required!");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Password field is required!");
    } else if (password.length < 5) {
      alert("Password length should be greater than 5");
    } else {
      if (getUserData && getUserData.length) {
        const localStoreData = JSON.parse(getUserData);
        const userLogin = localStoreData.filter((el, i) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("Invalid user details");
        } else {
          console.log("User login successfuly");
          localStorage.setItem("user_login", JSON.stringify(userLogin));
          navigate("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container">
        <section>
          <div className="row">
            <div className="col-lg-4">
              <div className="left-data mt-3 p-2">
                <h3 className="mt-4 mb-2 text-center">Sign In</h3>
                <form onSubmit={onSubmitHandle}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email..."
                      onChange={onChangeHandle}
                      name="email"
                      value={inputVal.email}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password..."
                      onChange={onChangeHandle}
                      name="password"
                      value={inputVal.password}
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Submit
                  </button>
                </form>
                <p className="mt-3 text-center">
                  Register An Account <Link to="/">Sign up</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <Signimg />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
