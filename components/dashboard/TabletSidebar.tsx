import { SIDEBAR_LINKS } from "@/lib/dashboardLinks";
import Image from "next/image";
import Link from "next/link";

export default function TabletSidebar() {
  return (
    <aside className="fixed z-50 hidden min-h-screen bg-custom-black md:block lg:hidden">
      <nav className="flex h-dvh w-16 flex-col  p-4">
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <Image src="./T-logo.svg" alt="Tapup Logo" fill />
          </div>
        </div>

        <ul className="flex flex-1 flex-col items-center gap-8 text-white">
          {SIDEBAR_LINKS.map((el) => (
            <Link
              href={el.path}
              key={el.key}
              className={`${el.key === "settings" && "mt-auto"}`}
            >
              {el.icon}
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
