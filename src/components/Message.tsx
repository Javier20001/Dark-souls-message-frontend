import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import getMessages from "../services/messageService";

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
        height: "100vh",
        color: "red",
      }}
    >
      {message && (
        <motion.h2
          initial={{ opacity: 0 }} // Inicia completamente transparente
          animate={{ opacity: 1 }} // Se vuelve completamente visible
          transition={{ duration: 2, ease: "easeInOut" }} // Aparece en 2 segundos de forma suave
          style={{ fontSize: "24px", textAlign: "center" }}
        >
          {message}
        </motion.h2>
      )}
    </div>
  );
};

export default Message;
