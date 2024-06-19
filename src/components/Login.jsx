import { signInAnonymously, signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  const [user] = useAuthState(auth);

  const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signInWithAnonymously = () => {
    signInAnonymously(auth);
  };

  return (
    <div>
      {!user && (
        <div className="flex flex-col gap-4">
          <button
            className="bg-fuchsia-200 w-full flex items-center px-5 py-2 rounded-md text-xl gap-4 hover:scale-95 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
            onClick={singInWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} />
            <h1>Sign In Google</h1>
          </button>
          <button
            className="bg-gray-200 w-full flex items-center px-5 py-2 rounded-md text-xl gap-4 hover:scale-95 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
            onClick={signInWithAnonymously}
          >
            <FontAwesomeIcon icon={faUser} />
            <h1>Sing In Anonymous</h1>
          </button>
        </div>
      )}
    </div>
  );
}
