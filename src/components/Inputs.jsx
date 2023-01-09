import React from "react";

const Inputs = ({ Type, setDato, setDato1, setDato2 }) => {
  if (Type === "Doble") {
    return (
      <div className="Input">
        <input
          onChange={(e) => setDato1(e.target.value)}
          className="Cantidad"
          type="Number"
        />
        <span>-</span>
        <input
          onChange={(e) => setDato2(e.target.value)}
          className="Cantidad"
          type="text"
          placeholder="Unidad"
        />
      </div>
    );
  } else if (Type === "TextArea") {
    return (
      <div className="Input">
        <textarea
          onChange={(e) => {
            setDato(e.target.value);
          }}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    );
  } else if (Type === "File") {
    return (
      <div className="Input">
        <input
          type="file"
          className="file"
          onChange={(e) => {
            setDato(e.target.files[0]);
          }}
        />
      </div>
    );
  }

  return (
    <div className="Input">
      <input onChange={(e) => setDato(e.target.value)} type="text" />
    </div> //Fin de Ingredientes
  );
};

export default Inputs;
