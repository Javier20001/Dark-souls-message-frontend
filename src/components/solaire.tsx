import React from "react";
import logo from "../assets/solaire.png";
import "./solaire.css"; // Importamos el archivo CSS

const Solaire = () => {
  return (
    <div className="solaire-animation">
      <img src={logo} alt="Solaire" width="400" />
    </div>
  );
};

export default Solaire;
