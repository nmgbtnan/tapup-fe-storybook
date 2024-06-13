import Image from "next/image";
import CustomCards from "./CustomCards";

const CUSTOM_CARDS = [
  {
    image: "./custom-card-table.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./custom-card-building.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./custom-card-anya.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
  {
    image: "./custom-card-planet.svg",
    name: "Matte Black",
    price: 3000,
    description: "Standard Black Card",
    total: 1,
  },
] as const;

export default function CustomCardBanner() {
  return (
    <section className="container relative flex flex-col items-center px-4 ">
      <div
        style={{
          background: 'url("./custom-banner.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-[400px] w-screen md:w-dvw"
      ></div>
      <div className="absolute top-32 w-[80%] md:top-12 ">
        <div className="relative">
          <Image
            src="./custom-card-banner.svg"
            alt="Custom Card Banner"
            priority
            height={1000}
            width={1000}
          />
          <p className="absolute bottom-2 left-4 text-sm font-bold text-white md:bottom-12 md:left-12 md:text-xl">
            Lorem Ipsum
          </p>
          <p className="absolute right-4 top-2 font-bold text-custom-green md:right-12 md:top-12 md:text-3xl">
            Ipsum
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-56 xl:mt-[450px]">
        <div className="flex flex-col items-center gap-2 px-2 text-center md:text-start xl:items-start">
          <h3 className="text-2xl font-[700] md:text-5xl">Custom Made Card</h3>
          <p className="w-full max-w-[400px] text-sm text-custom-textGray md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-6">
          {CUSTOM_CARDS.map((c, i) => {
            return <CustomCards key={i} {...c} />;
          })}
        </div>
      </div>
    </section>
  );
}
