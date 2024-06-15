import { cards } from "@/lib/dashboardGrid";
import { Button } from "@/components/ui/button";
import GridCard from "@/components/Common/GridCard";
import Image from "next/image";

export default function DashboardCard() {
  return (
    <>
      <GridCard className="col-span-12 flex gap-4 p-4 sm:max-md:col-span-6 md:col-span-6 xl:col-span-8">
        <div className="flex flex-col space-y-4 md:items-start xl:w-[495px] ">
          <span className="text-sm font-bold text-custom-green md:text-base">
            Congratulations Highlands Bali! 🎉
          </span>
          <p className="text-sm xl:text-base">
            You have done 72% more sales today. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <Button className="bg-custom-badge-greenbg text-xs font-bold text-green-700 hover:bg-green-300 md:text-base">
            View Badge
          </Button>
        </div>
        <div className="relative aspect-auto xl:w-[230px]">
          <Image
            src="../dashboard-image.svg"
            alt="Dashboard Image"
            fill
            className="object-fill hidden xl:block"
          />
        </div>
      </GridCard>

      {cards.map((el) => (
        <GridCard
          key={el.key}
          className="col-span-6 flex flex-col justify-between gap-4 p-4 text-center sm:max-md:col-span-3 md:col-span-3 xl:col-span-2"
        >
          <div className="flex items-center justify-between ">
            <span className="text-xs font-bold md:text-sm xl:text-lg">
              {el.label}
            </span>
            {el.calendar}
          </div>
          <span className=" text-3xl font-extrabold text-custom-textGray xl:text-4xl">
            {el.count}
          </span>
          {el.badge}
        </GridCard>
      ))}
    </>
  );
}
