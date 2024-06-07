import { MOBILE_MENU } from '@/lib/dashboardLinks';
import Link from 'next/link';


export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 z-40 block w-full bg-custom-black p-2 text-white md:hidden">
      <ul className="flex items-center justify-between">
        {MOBILE_MENU.map((m) => (
          <li
            key={m.key}
            className={`${m.key === 'dashboard' && 'text-custom-green'} flex flex-col items-center gap-1`}
          >
            {m.icon}
            <Link
              href={m.path}
              className={`text-xs text-white ${m.label === 'Dashboard' && 'hover:text-custom-green'}`}
            >
              {m.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
