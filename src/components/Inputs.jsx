import React, { useState } from "react";

const Inputs = ({ Type, setDato, setDato1, setDato2 }) => {

  const [fileName, setFile] = useState()


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
          id="file"
          className="file"
          accept="image/*"
          onChange={(e) => {
            setDato(e.target.files[0]);
            setFile(e.target.files[0]?.name)
          }}
        />
        <label htmlFor="file">Subir Imagen</label>
        {fileName ? (
          <p className="fileName">Imagen: {fileName}</p>
        ) : 
        (
          <p className="fileName">No hay imagen</p>
        )}
      </div>
    );
  }

  return (
    <div className="Input">
      <input onChange={(e) => setDato(e.target.value)} type="text" />
    </div>
  );
};

export default Inputs;
