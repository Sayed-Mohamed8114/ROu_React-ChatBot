import Button from "@/UI/Button";

function HomePage() {
  return (
    <section className="flex w-full flex-col items-center justify-center  md:justify-center p-4 ">
      <h1 className="text-[100px]  md:text-[180px] text-slate-200 font-extrabold font-serif">
        ROu
      </h1>
      <p className="text-[15px] w-full md:text-[25px]  text-center justify-center text-slate-300 mb-10 md:mb-15">
        <strong>ROu</strong> is a chatbot that had been made with react and
        gemini api to make a modern and good looking ui with a great logic to
        make your daily tasks simple as much as possible
      </p>
      <Button/>
    </section>
  );
}

export default HomePage;
