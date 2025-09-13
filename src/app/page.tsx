"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {

  const images = [
    "/trade-app-bg-1.jpg",
    "/trade-app-bg-2.jpg",
    "/trade-app-bg-3.jpg",
  ];

  const [showImg, setShowImg] = useState<string>(images[0]);
  const [imgId, setImgId] = useState(0);

  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Show the current image
    setShowImg(images[imgId]);

    // Restart animation by forcing a reflow
    if (imgRef.current) {
      imgRef.current.classList.remove('bg-img');
      void imgRef.current.offsetWidth; // trigger reflow
      imgRef.current.classList.add('bg-img');
    }

    // Change image after 4s
    const timer = setTimeout(() => {
      setImgId(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [imgId]);

  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when it reaches 0

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      window.location.href = "https://t.me/+jl86GPY_X4lhZDU1"
    }
  }, [timeLeft]);
  

  return (
    <main className="main-page w-screen min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-1" ><img src={showImg} ref={imgRef} alt="" className="w-full h-full object-cover bg-img" draggable={false} /></div>

      <div className="w-screen min-h-screen flex flex-col items-center">
        <div className="mt-5 mb-3"><img src="/coding.jpg" alt="" className="rounded-full w-30 h-30" /></div>
        <div className="bg-[#2c2c2c5b] backdrop-blur-2xl md:w-[35em] w-[85vw]  p-5  rounded-xl">
          <h1 className="text-center text-[1.2em] font-bold mb-3">GET EXCLUSIVE ACCESS 🚀</h1>
          <h4 className="text-center text-lg mb-1">
            <div>Join the <strong>World's No. 1</strong> </div>
            <div><strong className="text-[#e4ad15]">Bug Strategy Community</strong></div>
            <div className="mt-2"><strong className="text-xl">💰 Elite's World 💰</strong></div>
          </h4>
          <h5 className="text-center text-gray-300">Expert Strategies • Precision Signals • Consistent Profits</h5>
          <div className="text-center text-2xl mb-3 float-anim">👇</div>
          <div>
            <a href="https://t.me/+jl86GPY_X4lhZDU1" target="_blank">
              <button className="px-5 py-3 blue-shade-bg flex items-center justify-center gap-5 text-white w-full rounded-2xl cursor-pointer animated-rect hover:scale-103 transition-all duration-200 active:scale-95 active:brightness-80">
                <div><img src="telegram-logo.webp" alt="" className="w-[60px] h-[60px] flex" /></div>
                <div>
                  <div>JOIN OUR TELEGRAM COMMUNITY</div>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="my-1 flex items-center justify-center gap-2">
          <span><img src="telegram-logo.webp" alt="telegram" className="w-5 h-5" /></span>
          <span>Your'e invited to <strong>Elite's World</strong></span>
        </div>
        <div>
          <div className="text-center text-2xl">Hurry Up!</div>
          <div className="flex gap-2 items-start">
            <div className="flex flex-col items-center">
              <span className="font-bold text-4xl">00</span>
              <span className="text-sm text-gray-300">DAYS</span>
            </div>
            <div className="mt-0 text-2xl">:</div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-4xl">00</span>
              <span className="text-sm text-gray-300">HRS</span>
            </div>
            <div className="mt-0 text-2xl">:</div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-4xl">00</span>
              <span className="text-sm text-gray-300">MINS</span>
            </div>
            <div className="mt-0 text-2xl">:</div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-4xl">{String(timeLeft).padStart(2, '0')}</span>
              <span className="text-sm text-gray-300">SECS</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
