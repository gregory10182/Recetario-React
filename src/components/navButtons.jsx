import React from "react";
import { Link } from "react-router-dom";


export default function NavButtons ({ children, active }) {

    return (
        <div className="ButtonContainer">
          <Link to="/ver">
            <button
              className={(active === "ver" && "Button active") || "Button"}
            >Ver Recetas</button>
          </Link>

          <Link to="/">
            <button
              className={(active === "crear" && "Button active") || "Button"}  
            >Crear Receta</button>
          </Link>

          {children}
        </div>
    )

}