import Image from "next/image";
import ShowCaseCard from "./ShowCaseCard";

export default function Showcase() {
  return (
    <section className="container flex justify-end py-20 ">
      <div className="relative rounded-bl-3xl rounded-tl-3xl bg-custom-gray p-12 md:w-[95%] md:p-20 lg:-right-0 lg:w-full xl:-right-28">
        <Image
          alt="Tapup-Card Image"
          src="./black-card-forward.svg"
          width={350}
          height={350}
          className="absolute -left-8 -top-[0] z-20 -translate-y-1/2 scale-[0.7] md:left-32 md:scale-[0.7] lg:left-80 lg:scale-[0.8] xl:left-[600px]"
        />
        <Image
          alt="Tapup-Card Image"
          src="./chrome-card-forward.svg"
          width={350}
          height={350}
          className="absolute -right-12 -top-0 z-10 -translate-y-1/2 scale-[0.7] md:-right-14 md:scale-[0.7] lg:right-0  lg:scale-[0.8] xl:right-10"
        />

        <ShowCaseCard />
      </div>
    </section>
  );
}
