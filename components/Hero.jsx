"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen md:min-h-[124vh]
        flex flex-col justify-end
        bg-[url('/images/space.jpg')] bg-cover bg-center
        overflow-hidden
        px-4 sm:px-6 md:px-16
        pt-24
      "
    >
      <Navbar />

      <div className="relative z-10 ">
        <h1
          className="
            text-3xl md:text-5xl xl:text-[80px]
            font-extrabold leading-tight uppercase
          "
        >
          Let’s Travel to the Edge <br className="hidden sm:block" /> of Space
        </h1>

        <p
          className="
            mt-4
            text-gray-300
            text-md lg:text-[24px] 
            leading-relaxed
          "
        >
          We are a group that love to explore and learn new information related
          to our universe. <br /> Join us and explore.
        </p>

        <button
          className="
            mt-6
            border-2 border-white cursor-pointer
            px-6 sm:px-8 py-2.5 sm:py-3
            text-xs lg:text-sm
            font-semibold
            tracking-widest uppercase
            hover:bg-white hover:text-black
            transition
          "
        >
          Discover More
        </button>
      </div>

      <div
        className="
          relative z-10
          flex items-center justify-end gap-16
          mt-10
        "
      >
        {/* Moon */}
        <Image
          src="/images/moon1.png"
          alt="Moon"
          width={320}
          height={320}
          className="
            opacity-90
            w-38 sm:w-48 md:w-54 lg:w-64 xl:w-80
            animate-spin-slow
          "
        />

        <Image
          src="/images/ScrollDown.png"
          alt="ScrollDown"
          width={20}
          height={20}
          className="w-4 sm:w-5 animate-bounce"
        />
      </div>
    </section>
  );
}
