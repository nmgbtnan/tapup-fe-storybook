import { recentTaps } from "@/lib/dashboardGrid";
import Image from "next/image";

export default function DashboardTaps() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-scroll pt-1 xl:h-[280px]">
      {recentTaps.map((el, i) => (
        <div
          key={i}
          className="flex flex-wrap gap-2 px-4 md:max-lg:justify-between lg:justify-between"
        >
          <div className="flex gap-2">
            <div className="relative">
              <Image
                src={el.profile}
                alt="User Profile"
                className="w-6 md:w-8 xl:w-10"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold xl:text-sm">{el.name}</p>
              <p className="text-xs text-custom-textGray xl:text-sm">
                {el.email}
              </p>
            </div>
          </div>
          <span className="ml-7 text-sm font-extrabold md:ml-0">
            {el.income}
          </span>
        </div>
      ))}
    </div>
  );
}
