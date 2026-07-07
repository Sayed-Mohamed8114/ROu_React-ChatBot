import Button from "@/UI/Button";

function HomePage() {
  return (
    <section className="flex flex-col items-center text-center justify-evenly p-4 ">
      <h1 className="text-[180px] text-slate-200 font-extrabold font-serif">
        BOo
      </h1>
      <p className="text-[25px] w-[50%] text-center justify-center text-slate-300 mb-15">
        <strong>BOo</strong> is a chatbot that had been made with react and
        gemini api to make a modern and good looking ui with a great logic to
        make your daily tasks simple as much as possible
      </p>
      <Button/>
    </section>
  );
}

export default HomePage;
