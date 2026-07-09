import HomePage from "@/Components/HomePage";
import Footer from "@/Components/Footer";
import Galaxy from "@/Components/Galaxy";

function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-linear-to-r from-slate-900 to-black">
      <div className="absolute inset-0 z-0">
        <Galaxy
          density={1}
          glowIntensity={0.2}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={0.5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={0.8}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-start text-white p-5  flex-col">
        <main className="flex-1  items-center justify-center">
        <HomePage/>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
