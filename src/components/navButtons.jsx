import React from "react";
import { Link } from "react-router-dom";

export default function NavButtons({ children, active }) {
  return (
    <div className="ButtonContainer">
      <Link to="/ver">
        <button className="Button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1086/1086933.png"
            alt=""
          />
        </button>
      </Link>

      <Link to="/">
        <button className="Button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1237/1237946.png"
            alt=""
          />
        </button>
      </Link>

      {children}
    </div>
  );
}
