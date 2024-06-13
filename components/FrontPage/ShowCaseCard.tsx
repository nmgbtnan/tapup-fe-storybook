import { TbAccessPoint } from "react-icons/tb";

const showCaseCard = [
  {
    title: "Access Card",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    title: "Access Card",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    title: "Access Card",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

export default function ShowCaseCard() {
  return (
    <div className="mt-16 flex flex-col justify-center gap-12 md:flex-row md:gap-8">
      {showCaseCard.map((c, i) => (
        <div className=" flex gap-4 md:flex-wrap lg:flex-nowrap " key={i}>
          <div
            className={`flex aspect-square h-8 w-8  items-center justify-center  rounded-lg bg-custom-black md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-32 ${i === 1 && "bg-custom-green"}`}
          >
            <TbAccessPoint className="text-white md:w-full h-8 w-8 md:h-full " />
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-sm font-semibold md:text-xl lg:text-2xl xl:text-3xl">
              {c.title}
            </span>
            <p className=" text-xs lg:text-base xl:text-lg">{c.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
