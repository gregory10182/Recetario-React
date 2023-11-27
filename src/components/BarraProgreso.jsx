const BarraProgreso = ({ numeroPasos, pasoActual }) => {
  return (
    <div className="barraProgreso">
      {Array(numeroPasos)
        .fill(0)
        .map((x, i) => {
          if (pasoActual > i) {
            return <div key={i} className="pasoCompletado"></div>;
          } else if (pasoActual === i) {
            return <div key={i} className="pasoActual"></div>;
          } else {
            return <div key={i}></div>;
          }
        })}
    </div>
  );
};

export default BarraProgreso;
