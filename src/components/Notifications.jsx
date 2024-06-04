import { useEffect, useState } from "react";
import defaultMessage, {
  getRandomMessage,
} from "../data/notifications.messages.data";
import "../styles/Notifications.css";

export default function Notifications({ currentScore }) {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (currentScore > 0) {
      setMessage(getRandomMessage());
    } else {
      setMessage(defaultMessage);
    }
  }, [currentScore]);

  return (
    <div id="notifications">
      <div className="messages">
        <p>{message}</p>
      </div>
    </div>
  );
}
