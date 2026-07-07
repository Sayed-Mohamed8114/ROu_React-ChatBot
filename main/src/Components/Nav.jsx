import { BsRobot } from "react-icons/bs";

function Nav() {
  return (
    <nav
      className="w-full max-w-5xl rounded-2xl  h-[8vh]   mb-10
     bg-white/30 p-4 shadow-xl shadow-white/10 backdrop-blur md:rounded-full md:px-6 flex items-center justify-center gap-5"
    >
        <span className="font-bold text-3xl text-slate-50 text-center items-center justify-center flex">
          <BsRobot />
        </span>
      <h2 className="text-center text-xl text-slate-200">
        Your AI ChatBot
      </h2>
    </nav>
  );
}

export default Nav;
