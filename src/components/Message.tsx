import { useState, useEffect } from "react";
import { getMessages } from "../services/messageService";
import Solaire from "./solaire";
import Rating from "./Rating";
import "./message.css"; // Importamos el archivo CSS

const Message = () => {
  const [message, setMessage] = useState("");
  const [id_message, setIdMessage] = useState("");

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
      } else {
        setMessage("Error al cargar el mensaje");
      }
    };

    fetchMessages();
  }, []);

  return (
    <div
      className="message"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#970000",
      }}
    >
      {message && <h2 className="message-animation">{message}</h2>}
      <Rating id_message={id_message} />
      {message === "Praise the Sun!" && <Solaire />}
    </div>
  );
};

export default Message;
