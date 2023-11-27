import { useState } from "react";

const FormImg = ({ savedImg, Agregar }) => {
  const [Img, setImg] = useState("");
  const [fileName, setFile] = useState("");

  return (
    <div className="Card">
      <p>Imagen</p>
      <div className="Input">
        <input
          type="file"
          id="file"
          className="file"
          accept="image/*"
          onChange={(e) => {
            setImg(e.target.files[0]);
            setFile(e.target.files[0]?.name);
          }}
        />
        <label htmlFor="file">Subir Imagen</label>
        {savedImg || fileName ? (
          <p className="fileName">Imagen: {savedImg?.name || fileName}</p>
        ) : (
          <p className="fileName">No hay imagen</p>
        )}
      </div>
      <button
        className="Agregar"
        onClick={() => {
          Agregar(Img);

          setImg("");
          setFile("");
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default FormImg;
