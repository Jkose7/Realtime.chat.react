import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../services/firebase";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  const singOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button className="p-2 flex gap-2 items-center hover:bg-gray-100 rounded-md transition-all" onClick={singOut}>
        <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
        <h1>Sign Out</h1>
      </button>
    </div>
  );
}
