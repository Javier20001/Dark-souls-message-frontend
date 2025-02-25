import React, { useMemo } from "react";

// Importamos todas las imágenes en un array
import logo1 from "../assets/logos2.png";
import logo2 from "../assets/logos3.png";
import logo3 from "../assets/logos4.png";
import logo4 from "../assets/logos5.png";
import logo5 from "../assets/logos6.png";

interface RatingScoreIconProps {
  score: number;
}

const logos = [logo1, logo2, logo3, logo4, logo5];

const RatingScoreIcon: React.FC<RatingScoreIconProps> = ({ score }) => {
  const iconURL = useMemo(() => {
    const index = Math.floor(score / 2); // Convierte el score en índice (0-5)
    return logos[index]; // Si está fuera del rango, usa logo1 por defecto
  }, [score]);

  return (
    <div>
      <img
        src={iconURL}
        alt="rating icon"
        style={{ width: 75, height: 75, margin: 10 }}
      />
    </div>
  );
};

export default RatingScoreIcon;
