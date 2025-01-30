import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import getMessages from "../services/messageService";
import Solaire from "./solaire";

const Message = () => {
  const [message, setMessage] = useState("");

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
        setMessage(data.message);
      } else {
        setMessage("Error al cargar el mensaje");
      }
    };

    fetchMessages();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#970000",
      }}
    >
      {message && (
        <motion.h2
          initial={{ opacity: 0 }} // Inicia completamente transparente
          animate={{ opacity: 1 }} // Se vuelve completamente visible
          transition={{ duration: 2, ease: "easeInOut" }} // Aparece en 2 segundos de forma suave
          style={{ fontSize: "90px", textAlign: "center" }}
        >
          {message}
        </motion.h2>
      )}

      {message === "Praise the Sun!" && <Solaire />}
    </div>
  );
};

export default Message;
