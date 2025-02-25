import React from "react";
import { rateMessage } from "../services/messageService";
import "./rating.css";

interface RatingProps {
  id_message: string;
}

const Rating: React.FC<RatingProps> = ({ id_message }) => {
  const handleLike = async () => {
    rateMessage(id_message, 1);
  };

  const handleDislike = async () => {
    rateMessage(id_message, -1);
  };

  return (
    <div className="rating">
      <button onClick={handleLike}>vote up</button>
      <button onClick={handleDislike}>vote down</button>
    </div>
  );
};

export default Rating;
