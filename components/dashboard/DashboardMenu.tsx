import { menuLinks } from '@/lib/dashboardGrid';
import Link from 'next/link';


export default function DashboardMenu() {
  return (
    <>
      <div className=" flex items-center gap-2 border-b-2 border-gray-500">
        <img src="../profile.svg" alt="profile-picture" className="mb-1 w-8" />
        <div className=" flex flex-col">
          <span className="text-xs font-bold md:text-sm">Jane Doe</span>
          <p className="mb-1 text-xs text-gray-400 md:text-sm">
            janedoe@gmail.com
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-6">
        {menuLinks.map((el, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 px-2 ${i === 4 && 'mt-6'} ${el.label === 'Activate Account' && 'rounded-md bg-custom-green/90 py-3 text-white  '}`}
          >
            {el.icon}
            <Link
              className={` text-xs md:text-base ${el.label === 'Activate Account' && 'hover:text-white'}`}
              href={''}
            >
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
