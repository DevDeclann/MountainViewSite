import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const styles = ["btn-main", "btn-outline"];
const sizes = ["btn-medium", "btn-large"];

const Button = ({ children, onClick, type, buttonStyle, buttonSize }) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <>
      <Link to="/sign-up" className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} `}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
