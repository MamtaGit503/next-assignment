export default function About() {
  return (
    <section
      id="about"
      className=" mx-auto px-6 md:px-16 pt-5 pb-10 md:pb-16 bg-[url('/images/space.jpg')] bg-cover bg-center overflow-hidden"
    >
      <h3 className="font-semibold tracking-widest text-sm md:text-lg  md:text-[32px] sm:text-[16px] text-center mb-12 md:mb-24">
        KNOW MORE ABOUT US HERE
      </h3>

      <div className="flex flex-col md:flex-row items-center  gap-10">
        <img src="/images/aboutImg.png" className="md:w-[230px] w-[170px]" />
        <div>
          <h3 className="font-semibold tracking-widest text-sm sm:text-[16px] md:text-[20px] lg:text-[32px] mb-6 text-center md:text-left">
            WE ARE CLUB THAT LEARN, SHARE AND EXPLORE EVERYTHING RELATED TO OUR
            UNIVERSE.
          </h3>
          <p className=" text-sm md:text-[16px] lg:text-[24px]   leading-relaxed uppercase text-center md:text-left">
            Dhruva is a College club, we work toward increasing knowledge about
            space, cosmos and everything we are still learning about. We share
            and learn together.
          </p>
        </div>
      </div>
      <h3 className="font-semibold tracking-widest text-sm md:text-[24px] mb-6  text-center mt-10 md:mt-24 uppercase">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </h3>
    </section>
  );
}
