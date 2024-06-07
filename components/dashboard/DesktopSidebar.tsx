'use client'
import { ChevronDown, Dot } from 'lucide-react';
import { SidebarLink, SIDEBAR_LINKS } from '@/lib/dashboardLinks';
import { useState } from 'react';
import TabletSidebar from './TabletSidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import DashboardSubLink from './DashboardSubLink';

export default function DesktopSidebar() {
  return (
    <>
      <TabletSidebar />
      <aside className="fixed z-30 hidden min-h-screen bg-custom-black shadow-lg lg:block">
        <nav className="flex h-dvh flex-col bg-custom-black shadow-sm">
          <div className="mb-8 flex items-center gap-2 p-4 pb-2 text-2xl">
            <span className="font-bold text-white">Tap</span>
            <span className="font-bold text-custom-green">Up</span>
          </div>

          <ul className="flex flex-1 flex-col gap-4 px-8 text-white">
            {SIDEBAR_LINKS.map((el, i) => (
              <SidebarItems item={el} key={el.key} chevron={i < 2} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

type SidebarItemsProps = {
  item: SidebarLink;
  chevron: boolean;
};

export function SidebarItems({ item, chevron }: SidebarItemsProps) {
  const pathname = usePathname();
  const isActive = () => {
    return item.path === pathname;
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li
        className={`flex items-center justify-between rounded-md px-2 py-3 duration-300  ${isActive() ? 'bg-custom-green' : 'bg-custom-black hover:bg-custom-green/80'} ${item.key === 'settings' && 'mb-3 mt-auto'}`}
      >
        <Link
          href={item.path}
          className="flex  w-40 items-center gap-2 text-sm hover:text-white"
        >
          {item.icon}
          {item.label}
        </Link>
        {chevron && (
          <div onClick={() => setIsOpen(!isOpen)}>
            <ChevronDown
              className={`${isOpen ? 'rotate-180' : ''} cursor-pointer duration-300`}
            />
          </div>
        )}
      </li>

      {chevron && (
        <div
          className={`overflow-hidden transition-all duration-300   ${
            isOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          {item.subLinks?.map((el) => (
            <DashboardSubLink
              href={el.path}
              key={el.key}
              link={el.label}
            />             
          ))}
        </div>
      )}
    </>
  );
}
