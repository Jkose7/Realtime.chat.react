import { Profile } from "./Profile";
import { useState, useEffect, useRef } from "react";
import { auth, db } from "../services/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { Message } from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const scroll = useRef();

  const sendMessage = async (event) => {
    event.preventDefault();

    if (message.trim() === "") {
      console.log("Enter a message");
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      photo: photoURL,
      name: displayName,
      createAt: serverTimestamp(),
      uid,
    });

    setMessage("");
  };

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createAt", "desc"),
      limit(20)
    );

    const fecthMessages = onSnapshot(q, (QuerySnapshot) => {
      const fecthedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fecthedMessages.push({ ...doc.data(), id: doc.id });
      });

      const sortedMessages = fecthedMessages.sort(
        (a, b) => a.createAt - b.createAt
      );
      setMessages(sortedMessages);
    });

    return () => fecthMessages;
  }, []);

  console.log(messages);

  return (
    <div className="w-full h-full flex flex-col p-4 gap-4">
      <header className="h-7 flex items-center">
        <Profile></Profile>
      </header>

      <section className="chat flex flex-col w-full h-full gap-4 overflow-y-scroll">
        {messages?.map((message) => (
          <Message key={message.id} message={message}></Message>
        ))}
      </section>

      <form className="flex gap-2" onSubmit={sendMessage}>
        <input
          type="text"
          id="message"
          placeholder="send message..."
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-gray-200 rounded-md shadow-md px-2"
        />
        <button type="submit" className="transition-all">
          <FontAwesomeIcon icon={faPaperPlane} size="xl" className="hover:scale-90 transition-all ease-in-out" />
        </button>
      </form>
    </div>
  );
}
