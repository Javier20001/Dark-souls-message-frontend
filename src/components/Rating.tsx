import React, { Dispatch, SetStateAction } from "react";
import { rateMessage } from "../services/messageService";
import "./Rating.css";

interface RatingProps {
  id_message: string;
  rate: number;
  setRate: Dispatch<SetStateAction<number>>;
  setAlreadyRated: Dispatch<SetStateAction<boolean>>;
}

const Rating: React.FC<RatingProps> = ({
  id_message,
  rate,
  setRate,
  setAlreadyRated,
}) => {
  const handleRateMessage = async (rateButton: number) => {
    const response = await rateMessage(id_message, rateButton);
    if (response === "Rated successfully") {
      setRate(rate + 1);
    }
    setAlreadyRated(true);
  };

  return (
    <div className="rating">
      <button onClick={() => handleRateMessage(1)}>vote up</button>
      <button onClick={() => handleRateMessage(-1)}>vote down</button>
    </div>
  );
};

export default Rating;
