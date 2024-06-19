import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

export function Message({ message }) {
  const [user] = useAuthState(auth);

  return (
    <article
      className={`flex gap-2 ${
        user.uid === message.uid ? "self-end" : "self-start "
      }`}
    >

      <div
        className={`flex flex-col ${
          user.uid === message.uid
            ? "self-end bg-fuchsia-200 items-end"
            : "self-start bg-gray-200"
        } rounded-md px-2 py-1 `}
      >
        <small className="opacity-30 text-black">
          {message.name || "Anonymous"}
        </small>
        <h1 className="text-black text-md">{message.text}</h1>
      </div>

      <div className="flex w-8 h-8">
        <img className="rounded-full" src={message.photo} alt="" />
      </div>
    </article>
  );
}
