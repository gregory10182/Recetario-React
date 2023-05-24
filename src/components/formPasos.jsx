import React from "react";
import { useState } from "react";

const FormPasos = ({ Agregar }) => {
  const [paso, setPaso] = useState("");



  return (
    <div className="Card">
      <p>Paso:</p>
      <div className="Input">
        <textarea
          onChange={(e) => {
            setPaso(e.target.value);
          }}
          name=""
          id=""
          cols="30"
          rows="10"
          value={paso}
        ></textarea>
      </div>

      <button
        className="Agregar"
        onClick={() => {
          Agregar(paso);

          setPaso("")
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default FormPasos;
