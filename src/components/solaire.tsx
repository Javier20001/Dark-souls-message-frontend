import React from "react";
import logo from "../assets/solaire.png";
import "./solaire.css"; // Importamos el archivo CSS

const Solaire = () => {
  return (
    <div className="solaire-animation">
      <img src={logo} alt="Solaire" style={{ display: "flex" }} />
    </div>
  );
};

export default Solaire;
