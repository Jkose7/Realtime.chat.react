import { auth } from "../services/firebase";

export function Profile() {
  const singOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button onClick={singOut}>Sign Out</button>
    </div>
  );
}
