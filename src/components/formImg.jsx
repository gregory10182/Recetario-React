import { useEffect, useState } from "react";

const FormImg = ({ savedImg, Agregar }) => {
  const [Img, setImg] = useState("");

  useEffect(() => {
    if (savedImg) {
      setImg(savedImg);
    }
  }, [savedImg]);

  const agregarImagen = () => {
    if (Img) {
      Agregar(Img);
      alert("Imagen agregada exitosamente");
      setImg("");
    }
  };

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
          }}
        />
        <label htmlFor="file">Subir Imagen</label>
        {savedImg || Img?.name ? (
          <p className="fileName">Imagen: {Img?.name}</p>
        ) : (
          <p className="fileName">No hay imagen</p>
        )}
      </div>
      <button className="Agregar" onClick={() => agregarImagen()}>
        Agregar
      </button>
    </div>
  );
};

export default FormImg;
