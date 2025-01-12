import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css"; // Import the CSS file

const Er = () => {
  return (
    <div className="er-container">
      <h1 className="er-title">Oops! Page Not Found</h1>
      <p className="er-message">
        The page you're looking for doesn't exist or an error occurred.
      </p>
      <Link to="/" className="er-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Er;
