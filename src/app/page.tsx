"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  // 🔹 Images 1–13
  const images = Array.from({ length: 13 }, (_, i) => `/${i + 1}.jpg`);

  // 🔹 Random starting image
  const [showImg, setShowImg] = useState<string>(
    images[Math.floor(Math.random() * images.length)]
  );

  const imgRef = useRef<HTMLImageElement>(null);

  // 🔹 Random image changer every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setShowImg(images[randomIndex]);

      if (imgRef.current) {
        imgRef.current.classList.remove("bg-img");
        void imgRef.current.offsetWidth; // trigger reflow
        imgRef.current.classList.add("bg-img");
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  // 🔹 Hidden timer (10 seconds) → Redirect
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://t.me/+jl86GPY_X4lhZDU1";
    }, 10000); // ✅ 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main-page w-screen min-h-screen flex flex-col">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <img
          src={showImg}
          ref={imgRef}
          alt=""
          className="w-full h-full object-cover bg-img"
          draggable={false}
        />
      </div>

      {/* Main content */}
      <div className="w-screen flex-grow flex flex-col items-center">
        <div className="mt-5 mb-3">
          <img
            src="/coding-logo.jpg"
            alt=""
            className="rounded-full w-30 h-30"
          />
        </div>

        <div className="bg-[#2c2c2c5b] backdrop-blur-2xl md:w-[35em] w-[85vw] p-5 rounded-xl">
          <h1 className="text-center text-[1.2em] font-bold mb-3">
            GET EXCLUSIVE ACCESS 🚀
          </h1>
          <h4 className="text-center text-lg mb-1">
            <div>
              Join the <strong>Fastest-Growing</strong>
            </div>
            <div>
              <strong className="text-[#e4ad15]">
                Trading Education Community
              </strong>
            </div>
            <div className="mt-2">
              <strong className="text-xl">💥 Elite&apos;s World 💥</strong>
            </div>
          </h4>
          <h5 className="text-center text-gray-300">
            Step-by-Step Lessons • Simple Strategies • Daily Insights
          </h5>
          <div className="text-center text-2xl mb-3 float-anim">👇</div>
          <div>
            <a href="https://t.me/+jl86GPY_X4lhZDU1" target="_blank">
              <button className="px-5 py-3 blue-shade-bg flex items-center justify-center gap-5 text-white w-full rounded-2xl cursor-pointer animated-rect hover:scale-103 transition-all duration-200 active:scale-95 active:brightness-80">
                <div>
                  <img
                    src="telegram-logo.webp"
                    alt=""
                    className="w-[60px] h-[60px] flex"
                  />
                </div>
                <div>
                  <div>JOIN OUR LEARNING COMMUNITY</div>
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="my-1 flex items-center justify-center gap-2">
          <span>
            <img
              src="telegram-logo.webp"
              alt="telegram"
              className="w-5 h-5"
            />
          </span>
          <span>
            You&apos;re invited to <strong>Elite&apos;s World</strong>
          </span>
        </div>
      </div>

      {/* ✅ Disclaimer at the bottom (scroll to see it) */}
      <div className="text-center text-xs text-gray-400 font-light font-sans italic py-4 px-4">
        Disclaimer: This content is for educational purposes only. 
        It is not financial advice and there are no guarantees of income.
      </div>
    </main>
  );
}
