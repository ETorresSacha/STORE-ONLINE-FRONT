import React from "react";
import "./servicio.css";

const Servicio = () => {
  const serviciosStore = [
    {
      tipo: "Ropas",
      imagen: "../../../../image/clothes.jpg",
    },
    {
      tipo: "Accesorios",
      imagen: "../../../../image/accesorios.jpg",
    },
    {
      tipo: "Joyas",
      imagen: "../../../../image/joyas.jpg",
    },
  ];
  console.log(serviciosStore);
  return (
    <div className="conteiner-servicio">
      <h1> MIS SERVICIOS</h1>
      <div className="conteiner-car-servicio">
        {serviciosStore.map((element, index) => {
          return (
            <div className="car-servicio">
              <img src={element.imagen} />
              <h4>{element.tipo}</h4>
            </div>
          );
        })}
        {/* <div className="car-servicio">
          <img src="../../../../image/store.jpg" />
          <h4>hola</h4>
        </div>
        <div className="car-servicio">
          <img src="../../../../image/store.jpg" />
          <h4>hola</h4>
        </div>
        <div className="car-servicio">
          <img src="../../../../image/store.jpg" />
          <h4>hola</h4>
        </div> */}
      </div>
    </div>
  );
};

export default Servicio;
