import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="mt-20 bg-custom-black p-8 text-custom-gray lg:rounded-tl-[300px] lg:rounded-tr-[300px]  xl:p-14">
      <div className="container relative  flex flex-col items-center gap-8">
        <img
          src="./footer-card.svg"
          alt="footer-card"
          className="absolute hidden md:-left-24 md:-top-32 lg:-top-28 lg:left-10 lg:block xl:-top-40 xl:left-44"
          width={300}
        />
        <div className="flex flex-col space-y-2 text-center md:w-1/2 lg:w-[35%]">
          <h2 className=" font-bold tracking-tighter text-custom-gray lg:text-3xl xl:text-5xl">
            Choose Your Cards
          </h2>
          <p className="md:text-sm lg:text-[16px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
            nisi!
          </p>
        </div>
        <div className="flex flex-col-reverse items-center gap-8 md:gap-16 lg:flex-row">
          <div className="flex items-center gap-2">
            <img src="./footer-card.svg" alt="footer-card" width={50} />
            <p className="flex items-center gap-2 font-bold">
              Tap
              <span className="text-custom-green">Up</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 xl:flex-nowrap">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="flex flex-col gap-1 text-center" key={i}>
                <h4 className="text-sm xl:text-base">Lorem Ipsum</h4>
                <p className="text-xs md:text-base">Lorem Ipsum</p>
                <p className="text-xs md:text-base">Lorem Ipsum</p>
                <p className="text-xs md:text-base">Lorem Ipsum</p>
                <p className="text-xs md:text-base">Lorem Ipsum</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-start">
            <div className="flex items-center justify-between rounded-full border border-[#f3f3f3] bg-transparent pr-6 lg:w-60 xl:w-80">
              <input
                type="text"
                placeholder="Search..."
                className=" w-full bg-transparent px-6 py-3 text-[#d9d9d9] outline-none"
              />
              <FiSearch className="  stroke-[#d9d9d9] text-2xl" />
            </div>
            <p className="font-bold">Lorem Ipsum</p>
            <p className="md:w-3/4 lg:w-3/5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="flex items-center gap-4 text-2xl text-custom-green">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
