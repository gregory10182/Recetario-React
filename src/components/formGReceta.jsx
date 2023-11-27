import { useEffect, useState } from "react";

const FormGReceta = ({ DatosReceta, Agregar, fIR, sIR, type }) => {
  const [Nombre, setNombre] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [Unidad, setUnidad] = useState("");
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    console.log(DatosReceta);
    if (DatosReceta) {
      setNombre(DatosReceta?.Nombre);
      setCantidad(DatosReceta?.CantidadTotal?.[0]);
      setUnidad(DatosReceta?.CantidadTotal?.[1]);
    }
  }, [DatosReceta]);

  const AgregarDatosReceta = () => {
    if (Nombre && Cantidad && Unidad) {
      let DatosReceta = {
        Nombre: Nombre,
        CantidadTotal: [Cantidad, Unidad],
      };
      Agregar(DatosReceta);
      alert("Agregado Exitosamente");
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  };

  const AgregarIngrediente = () => {
    let Ingrediente = {
      Nombre: Nombre,
      Cantidad: [Cantidad, Unidad],
      Texto: "",
    };

    if (Unidad === "") {
      if (Nombre.charAt(Nombre.length - 1) === "s") {
        Ingrediente.Texto = Cantidad + " " + Nombre;
      } else {
        Ingrediente.Texto = Cantidad + " " + Nombre + "s";
      }
    } else {
      Ingrediente.Texto = Cantidad + " " + Unidad + " de " + Nombre;
    }

    Agregar(Ingrediente);
  };

  return (
    <div className="Card">
      <p>{fIR}</p>
      <div className="Input">
        <input
          style={{
            border: invalid && "0.2rem solid #5C0512",
          }}
          onChange={(e) => setNombre(e.target.value)}
          value={Nombre}
          type="text"
        />
      </div>
      <p>{sIR}</p>
      <div className="Input">
        <input
          style={{
            border: invalid && "0.2rem solid #5C0512",
          }}
          onChange={(e) => setCantidad(e.target.value)}
          value={Cantidad}
          className="Cantidad"
          type="Number"
        />
        <span>-</span>
        <input
          style={{
            border: invalid && "0.2rem solid #5C0512",
          }}
          onChange={(e) => setUnidad(e.target.value)}
          value={Unidad}
          className="Cantidad"
          type="text"
          placeholder="Unidad"
        />
      </div>

      <button
        className="Agregar"
        onClick={() => {
          if (type === "ing") {
            AgregarIngrediente();
          } else {
            AgregarDatosReceta();
          }
          setNombre("");
          setCantidad("");
          setUnidad("");
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default FormGReceta;
