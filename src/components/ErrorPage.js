import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center text-danger p-4">404: Page Not Found 😭.</h1>
        <Link to="/" className="btn btn-info">
          Redirect Login
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
