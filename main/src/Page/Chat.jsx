import Nav from "@/Components/Nav";
import ChatPage from "@/Components/ChatPage";

function Chat() {
  return (
    <div
      className=" bg-linear-to-r to-black  from-slate-800 p-5 
                   w-full min-h-screen h-auto flex flex-col items-center"
    >
      <Nav />
      <ChatPage />
    </div>
  );
}

export default Chat;
