export default function Events() {
  return (
    <section
      id="events"
      className="px-6 md:px-16 py-10   bg-[url('/images/space.jpg')] bg-cover bg-center
        overflow-hidden"
    >
      <h3 className="tracking-widest text-sm sm:text-[16px]  md:text-[32px] font-semibold mb-3">
        RECENT EVENTS
      </h3>

      <div
        className="relative bg-[url('/images/eventBgImg.png')] bg-cover bg-center
        overflow-hidden  h-auto lg:h-140 flex flex-col w-full justify-center items-end p-5 md:p-20"
      >
        <div className="  w-full sm:w-120 bg-white/20 md:bg-white/30 backdrop-blur-md px-5 py-8 lg:w-137.5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <p className="text-xs md:text-[16px]">18/06/2023</p>
          <h4 className="text-xl lg:text-[36px] font-semibold mt-2">
            TALK ON COSMIC NEBULA
          </h4>
          <p className="text-sm lg:text-[19px] mt-2 text-white">
            Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar
            duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit
            amet consectetur. Augue duis etiam pulvinar duis interdum accumsan
            tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue
            duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
          </p>
          <button className="mt-4 bg-white text-black px-4  py-2 text-sm lg:text-[16px] font-semibold hover:bg-black hover:text-white transition cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
