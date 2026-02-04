import React, { useState } from "react";
import Logo from "../assets/Images/AstroLogo.png";
import Cloud from "../assets/Images/C1.png";

export default function Header_2() {
  const [split, setSplit] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleEvent = () => {
    setSplit(true);

    // show text after clouds start moving
    setTimeout(() => {
      setShowText(true);
    }, 800);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#090909]">

      {/* 🌥️ CLOUD LAYER */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          split ? "z-10" : "z-30"
        }`}
      >
        <img src={Cloud} className={`cloud cloud-top ${split && "move-top"}`} />
        <img src={Cloud} className={`cloud cloud-bottom ${split && "move-bottom"}`} />
        <img src={Cloud} className={`cloud cloud-left ${split && "move-left"}`} />
        <img src={Cloud} className={`cloud cloud-right ${split && "move-right"}`} />
        <img src={Cloud} className={`cloud top-left ${split && "move-top-left"}`} />
        <img src={Cloud} className={`cloud top-right ${split && "move-top-right"}`} />
        <img src={Cloud} className={`cloud bottom-left ${split && "move-bottom-left"}`} />
        <img src={Cloud} className={`cloud bottom-right ${split && "move-bottom-right"}`} />
      </div>

      {/* 🌙 LOGO (BEFORE CLICK) */}
      {!split && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h3 className="mb-4 font-[Mystery_Quest]">Click the logo</h3>

          <img
            src={Logo}
            onClick={handleEvent}
            className="w-[280px] cursor-pointer transition-transform duration-300 hover:scale-105 md:w-[400px]"
          />

          <h1 className="mt-4 font-[Mystery_Quest] text-red-500">
            WITCH WAY OUT ________
          </h1>
        </div>
      )}

      {/* ✨ HERO TEXT (AFTER CLOUD SPLIT) */}
      {showText && (
        <div className="relative z-30 flex h-full flex-col items-center justify-center text-center text-white animate-fadeUp">

          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            STOP · BREATHE · HEAL
          </h1>

          <h1 className="mt-2 text-6xl md:text-8xl font-bold">
            ALCHEMISE
          </h1>

          <div className="mt-8 flex gap-6">
            <button className="rounded-full bg-black px-8 py-3 transition hover:bg-gray-700">
              Shop Online
            </button>
            <button className="rounded-full bg-black px-8 py-3 transition hover:bg-gray-700">
              Visit Store
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
