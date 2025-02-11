const getMessages = async () => {
  const response = await fetch(
    "https://dark-souls-random-message.vercel.app/last-message"
  );
  return response;
};

const rateMessage = async (messageId: string, rating: number) => {
  try {
    const response = await fetch(
      `https://dark-souls-random-message.vercel.app/rate-message/${messageId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rate: rating }), // ✅ Corregido
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

export { getMessages, rateMessage };
