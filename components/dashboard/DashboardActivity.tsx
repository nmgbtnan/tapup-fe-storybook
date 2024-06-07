import { tableData } from '@/lib/dashboardGrid';
import { Handshake } from 'lucide-react';

export default function Dashboardactivity() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-scroll pr-3 pt-1 xl:h-[280px] ">
      {tableData.map((data, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg bg-custom-gray p-2 shadow-md md:p-4"
        >
          <Handshake />
          <div className="flex flex-col gap-2">
            <p className="text-xs md:text-base">{data.action}</p>
            <div className="flex flex-wrap items-center gap-1 md:gap-4">
              <span className="text-xs">{data.date}</span>
              <span className="text-xs">{data.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
