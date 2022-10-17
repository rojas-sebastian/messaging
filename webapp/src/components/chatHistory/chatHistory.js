import { useEffect, useState } from "react";
import Message from "../message/message";
import axios from "axios";

function ChatHistory() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAllMessages();
  }, []);

  async function getAllMessages() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_MESSAGING_API}/messaging/api/v1/messages`
      );
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {messages.map((message) => (
        <Message className="p-5" text={message.body} phone={message.reciver} />
      ))}
    </div>
  );
}

export default ChatHistory;
