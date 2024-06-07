
import { RxHamburgerMenu } from 'react-icons/rx';

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { nav_links } from '@/lib/navLinks';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className=" container  flex flex-row items-center justify-between py-2 text-lg font-bold">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/tap-up-icon.svg"
          width={50}
          height={50}
          className="scale-[.50] md:scale-75 "
          alt="brand-logo"
        />
        <p className="flex gap-1 text-xl md:text-2xl">
          <span>Tap</span>
          <span className="text-custom-green">Up</span>
        </p>
      </Link>
      <div className="hidden flex-row items-center sm:flex sm:gap-x-6 sm:pr-4 md:gap-x-8 md:pr-8 lg:gap-x-12 lg:pr-20">
        {nav_links.slice(0, 3).map((nav, i) => (
          <NavLink
            key={i}
            href={nav.href}
            link={nav.link}
         />
        ))}

        <div className="flex flex-row items-center gap-6">
          {nav_links.slice(3).map((nav, i) => (
            <Link
              key={i}
              href={nav.href}
              className={
                i === 1
                  ? 'rounded-sm bg-black px-8 py-2 text-white transition-all duration-150 hover:bg-custom-green hover:text-white'
                  : ''
              }
            >
              {nav.link}
            </Link>
          ))}
        </div>
      </div>
      <Sheet>
        <SheetTrigger className=" p-2 hover:text-custom-green sm:hidden">
          <span className="text-3xl ">
            <RxHamburgerMenu />
          </span>
        </SheetTrigger>
        <SheetContent className=" py-12">
          <div className="flex flex-col justify-center gap-4">
            {nav_links.map((nav, i) => (
              <Link
                key={i}
                href={nav.href}
                className="border-b border-transparent py-2 text-xl font-bold transition-all duration-150 hover:text-custom-green"
              >
                {nav.link}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
