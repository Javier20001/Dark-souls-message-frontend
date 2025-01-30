const getMessages = async () => {
  const response = await fetch(
    "https://dark-souls-random-message.vercel.app/message"
  );
  return response;
};

export default getMessages;
