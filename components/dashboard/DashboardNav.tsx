"use client";
import { ChevronDown, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import DashboardMenu from "./DashboardMenu";
import { useState, useEffect, useRef } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { capitalize } from "@/lib/capitalize";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";
import getToken from "@/lib/auth/getToken";

type UserData = {
  user: {
    name: string;
    avatarUrl: string;
  };
};

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const menuRef = useRef<HTMLElement>(null);

  const handleMenu = () => {
    setIsOpen((c) => !c);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const { data: datas }: UseQueryResult<UserData, Error> = useQuery({
    queryKey: ["userdata"],
    queryFn: async () => {
      return getToken();
    },
  });

  return (
    <header className="sticky top-0 z-10 bg-white" ref={menuRef}>
      <nav className="mx-1 flex justify-end gap-2 py-2 md:mx-4 md:gap-4 ">
        <div className="  flex items-center rounded-lg border-2 border-slate-300 px-2 md:w-[65%] lg:max-2xl:w-[55%] xl:w-[67%]">
          <SearchIcon />
          <Input
            placeholder="Search here"
            className="  w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className=" flex items-center gap-2 md:gap-4">
          <span className="text-center text-xs font-bold md:text-start md:text-sm">
            Hi, {capitalize(datas?.user.name.split(" ")[0] || "")}
          </span>
          <div
            className="relative flex cursor-pointer items-center gap-2"
            onClick={handleMenu}>
            <Avatar className="border">
              <AvatarImage src={`${datas?.user.avatarUrl}`} />
              <AvatarFallback>
                {capitalize(datas?.user.name.slice(0, 1) || "")}
              </AvatarFallback>
            </Avatar>
            {/* <img
              src={`${datas?.user.avatarUrl}`}
              alt="profile-picture"
              className="w-8 md:w-10 border rounded-full"
            /> */}
            <div className=" absolute bottom-0 left-4 z-50 flex h-3 w-3 items-center justify-center rounded-full  border-2 border-custom-textGray bg-custom-black text-white md:left-6 md:h-4 md:w-4">
              <ChevronDown />
            </div>
          </div>
        </div>
        <div
          className={`absolute right-0 top-16 w-[270px] space-y-4 rounded-md bg-white p-4 pb-6 shadow-2xl duration-300 ${isOpen ? "invisible opacity-0" : "visible opacity-100"}`}>
          <DashboardMenu />
        </div>
      </nav>
    </header>
  );
}
