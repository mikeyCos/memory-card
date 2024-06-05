import { useEffect, useRef, useState } from "react";
import defaultMessage, {
  fetchMessage,
} from "../data/notifications.messages.data";
import "../styles/Notifications.css";

export default function Notifications({ currentScore }) {
  const [message, setMessage] = useState(null);
  const defaultRef = useRef(null);

  useEffect(() => {
    if (currentScore > 0) {
      fetchMessage(setMessage);
    } else {
      setMessage(defaultMessage);
    }

    defaultRef?.current.classList.add("slide");
    setTimeout(() => {
      defaultRef?.current.classList.remove("slide");
    }, 350);
  }, [currentScore]);

  return (
    <div id="notifications" role="alert">
      <div className="messages">
        <p ref={defaultRef}>{message}</p>
      </div>
    </div>
  );
}
