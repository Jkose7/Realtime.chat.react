import { signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

export function Login() {
  const [user] = useAuthState(auth)

  const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  };

  const singOutWithGoogle = () => {
    auth.signOut()
  };

  return (
    <div>
      {!user ? (
        <button onClick={singInWithGoogle}>Sign in with Google</button>
      ) : (
        <button onClick={singOutWithGoogle}>Sing Out</button>
      )}
    </div>
  );
}
