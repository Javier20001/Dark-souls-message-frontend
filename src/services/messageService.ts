import { v4 as uuidv4 } from "uuid";

const getMessages = async () => {
  const response = await fetch(
    "https://dark-souls-random-message.vercel.app/last-message"
  );
  return response;
};

// cambiar la ip por un id autogenereado y guardarlo en local storage
const rateMessage = async (messageId: string, rating: number) => {
  try {
    const response = await fetch(
      `https://dark-souls-random-message.vercel.app/rate-message/${messageId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          CallerId: localStorage.getItem("userId") || "unknown", // ✅ Corregido
        },
        body: JSON.stringify({
          rate: rating,
          idUser: localStorage.getItem("userId"),
        }), // ✅ Corregido
      }
    );

    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al calificar el mensaje");
      } else {
        const errorText = await response.text();
        throw new Error(errorText || "Error al calificar el mensaje");
      }
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      alert(`Error: ${error.message}`);
    } else {
      alert(`Error: ${String(error)}`);
    }
    throw error;
  }
};

const generateAndStoreId = () => {
  const existingId = localStorage.getItem("userId");
  if (!existingId) {
    const newId = uuidv4();
    localStorage.setItem("userId", newId);
  }
};
export { getMessages, rateMessage, generateAndStoreId };
