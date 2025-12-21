export default function Footer() {
  return (
    <footer className="relative  text-white/80 overflow-hidden px-6 md:px-16 bg-[url('/images/space.jpg')] bg-cover bg-start overflow-hidden">
      <div className="absolute inset-0 "></div>

      <div className="relative py-6">
        <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 tracking-wide text-[16px] md:text-[18px]">
          <li className="text-white cursor-pointer hover:text-gray-400">
            Home
          </li>
          <li className="text-white cursor-pointer hover:text-gray-400">
            Experts
          </li>
          <li className="text-white cursor-pointer hover:text-gray-400">
            About us
          </li>
          <li className="text-white cursor-pointer hover:text-gray-400">
            Podcasts
          </li>
          <li className="text-white cursor-pointer hover:text-gray-400">
            Contacts
          </li>
        </ul>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm mt-5">
          {/* Left */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-white transition  text-[16px] md:text-[18px]">
            <span className="text-lg">💬</span>
            <span>Let’s chat</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 text-[16px] md:text-[18px] hover:text-white transition cursor-pointer ">
            <span>✉</span>
            <span>info@logoipsum.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
