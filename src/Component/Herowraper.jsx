import Hero from "./hero";
import MobileHero from "./MobileHero";

export default function HeroWrapper() {
  return (
    <>
      {/* 📱 Mobile Hero (≤ 760px) */}
      <div className="block md:hidden">
       <MobileHero/>
      </div>

      {/* 💻 Desktop Hero (> 760px) */}
      <div className="hidden md:block">
        <Hero/>
      </div>
    </>
  );
}