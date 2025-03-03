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
    // Convierte el score en un índice de 0 a 4
    const index = Math.min(Math.floor(score / 50), logos.length - 1);
    return logos[index];
  }, [score]);

  return (
    <div>
      <img
        src={iconURL}
        alt="rating icon"
        style={{ width: 100, height: 100, margin: 10 }}
      />
    </div>
  );
};

export default RatingScoreIcon;
