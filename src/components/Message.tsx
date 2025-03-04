import { useState, useEffect } from "react";
import { getMessages } from "../services/messageService";
import Solaire from "./solaire";
import Rating from "./Rating";
import "./message.css"; // Importamos el archivo CSS
import RatingScoreIcon from "./RatingScoreIcon";

const Message = () => {
  const [message, setMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [alreadyRated, setAlreadyRated] = useState(false);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const fetchMessages = async () => {
      let response = await getMessages();
      if (!response.ok) {
        for (let i = 0; i <= 5; i++) {
          response = await getMessages();
          if (response.ok) {
            break;
          }
        }
      }
      if (response.ok) {
        const data = await response.json();
        setMessage(data.text);
        setIdMessage(data._id);
        setRate(data.totalRates);
      } else {
        setMessage("Error al cargar el mensaje");
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <div className="message-container">
        {message ? (
          <>
            <div className="message-background"></div>
            <div className="message">
              <RatingScoreIcon score={rate} />
              <div className="message-content">
                <h2 className="message-text animation">{message}</h2>
                <div className="message-rate">
                  <p className="animation">Rating </p>
                  <h3 className="message-text animation">{rate}</h3>
                </div>
              </div>
              {alreadyRated ? (
                <h3 style={{ padding: "0px 20px" }}>thanks for vote</h3>
              ) : (
                <Rating
                  id_message={idMessage}
                  rate={rate}
                  setRate={setRate}
                  setAlreadyRated={setAlreadyRated}
                />
              )}
            </div>
          </>
        ) : (
          <p></p>
        )}
      </div>
      <div>{message === "Praise the Sun!" && <Solaire />}</div>
    </div>
  );
};

export default Message;
