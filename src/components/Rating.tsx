import React from "react";
import { rateMessage } from "../services/messageService";

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
    <div>
      <button onClick={handleLike}>vote up</button>
      <button onClick={handleDislike}>vote down</button>
    </div>
  );
};

export default Rating;
