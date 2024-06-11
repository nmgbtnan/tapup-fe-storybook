"use client";

import getToken from "@/lib/auth/getToken";
import Axios from "@/lib/Axios";
import { menuLinks } from "@/lib/dashboardGrid";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserData = {
  user: {
    name: string;
    avatarUrl: string;
  };
  email: string;
};

export default function DashboardMenu() {
  const router = useRouter();
  const { data: datas }: UseQueryResult<UserData, Error> = useQuery({
    queryKey: ["userdata"],
    queryFn: async () => {
      return getToken();
    },
  });

  const Logout = async () => {
    await Axios.get("/auth/logout").then(() => {
      router.push("/sign-in");
    });
  };

  return (
    <>
      <div className=" flex items-center gap-2 border-b-2 border-gray-500">
        <img
          src={`${datas?.user.avatarUrl}`}
          alt="profile-picture"
          className="mb-1 w-8 border rounded-full"
        />
        <div className=" flex flex-col">
          <span className="text-xs font-bold md:text-sm">
            {datas?.user.name}
          </span>
          <p className="mb-1 text-xs text-gray-400 md:text-sm">
            {datas?.email}
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-6">
        {menuLinks.map((el, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 px-2 ${i === 4 && "mt-6"} ${el.label === "Activate Account" && "rounded-md bg-custom-green/90 py-3 text-white  "}`}
          >
            {el.icon}
            <Link
              className={` text-xs md:text-base ${el.label === "Activate Account" && "hover:text-white"}`}
              href={el.path}
            >
              {el.label}
            </Link>
            {el.label === "" && (
              <p onClick={Logout} className="cursor-pointer">
                Logout
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
