import Nav from "@/Components/Nav";
import ChatPage from "@/Components/ChatPage"
import Input from "@/Components/Input";


function Chat() {
  return (
    <div className="bg-linear-to-r to-black  from-slate-800 w-full h-screen text-white p-5 justify-start items-center flex flex-col ">
        <Nav/>
        <ChatPage/>
        <Input/>

    </div>
  )
}

export default Chat