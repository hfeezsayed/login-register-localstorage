import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [loginData, setLoginData] = useState([]);
  const [show, setShow] = useState(false); //modal

  const navigate = useNavigate();

  let todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const birthday = () => {
    const getUser = localStorage.getItem("user_login");
    if (getUser && getUser) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      const userBirth = loginData.map((userDate, i) => {
        return userDate.date === todayDate;
      });

      if (userBirth) {
        setTimeout(() => {
          console.log("Date OK");
          handleShow();
        }, 3000);
      }
    }
  };

  const userLogout = () => {
    localStorage.removeItem("user_login");
    navigate("/");
  };

  useEffect(() => {
    birthday();
  }, []);

  return (
    <>
      {loginData.length === 0 ? (
        <h1 className="text-danger text-center p-4">
          ERROR : Please login properly!!
        </h1>
      ) : (
        <div>
          <h1>{loginData[0].name}</h1>
          <button onClick={userLogout} className="btn btn-danger">
            Logout
          </button>
          {loginData[0].date === todayDate ? (
            <div
              className="w-25 mx-auto border rounded"
              show={show}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header px-3 pt-2">
                    <h5 className="modal-title">{loginData[0].name}</h5>
                  </div>
                  <hr />
                  <div className="modal-body px-3 pb-2">
                    <p>Many many happy returns of the day.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Details;
