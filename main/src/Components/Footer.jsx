import GitHub from "@/UI/GitHUb";

function Footer() {
  return (
    <footer
      className="w-full max-w-5xl rounded-2xl h-[6vh] 
     bg-white/20 p-4   shadow-xl shadow-white/10 backdrop-blur md:rounded-full md:px-6 flex text-center items-center justify-between gap-5"
    >
      <a href="mailto:sayed.mohamed8114@gmai.com">
        <span className="text-slate-300 font-serif text-2xl">&copy;Sayed</span>
      </a>
      <span className="text-slate-200 font-serif text-xs md:text-xl">Educational Purpose</span>
      <GitHub />
    </footer>
  );
}

export default Footer;
