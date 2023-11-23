import React, { useState } from "react";
import Signimg from "./Signimg";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    date: "",
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
    const { name, email, date, password } = inputVal;
    if (name === "") {
      alert("Name field is required!");
    } else if (email === "") {
      alert("Email field is required!");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (date === "") {
      alert("date field is required!");
    } else if (password === "") {
      alert("Password field is required!");
    } else if (password.length < 5) {
      alert("Password length should be greater than 5");
    } else {
      localStorage.setItem("userData", JSON.stringify([...data, inputVal]));
    }
    setInputVal({
      name: "",
      email: "",
      date: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <section>
        <div className="row">
          <div className="col-lg-4">
            <div className="left-data mt-3 p-2">
              <h3 className="mt-4 mb-2 text-center">Sign Up</h3>
              <form onSubmit={onSubmitHandle}>
                <div className="mb-3">
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter name..."
                    onChange={onChangeHandle}
                    name="name"
                    value={inputVal.name}
                  />
                </div>
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
                    type="date"
                    className="form-control"
                    onChange={onChangeHandle}
                    name="date"
                    value={inputVal.date}
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
                Already Have An Account <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <Signimg />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
