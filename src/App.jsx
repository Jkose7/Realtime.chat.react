import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { Login } from "./components/Login";
import { auth } from "./services/firebase";
import { Chat } from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <main className="w-full h-dvh flex flex-col gap-10 justify-center items-center p-5">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-40 blur-[100px]"></div>
        </div>

        <header className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-5xl font-extrabold">💬 Chat Firebase Demo</h1>
          <p>Real-time chat demo using React, Tailwind, and Firebase</p>
        </header>
        
        <section className="container flex bg-[#ffffff27] justify-center items-center w-full h-full sm:w-2/3 xl:w-1/2 sm:h-2/3 rounded-md">
          {!user ? <Login></Login> : <Chat></Chat>}
        </section>
      </main>
    </>
  );
}

export default App;
