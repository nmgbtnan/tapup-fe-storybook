"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useBuilderProfile } from "@/hooks/useBuilderProfile";
import { useBuilderColor } from "@/hooks/useBuilderColor";
import { useBuilderFont } from "@/hooks/useBuilderFont";
import { useBuilderSocial } from "@/hooks/useBuilderSocial";
import Link from "next/link";
import { capitalize } from "@/lib/capitalize";
const Preview = () => {
  const { name, position, bio, profilePhoto, coverPhoto } = useBuilderProfile(
    (state) => state
  );
  const { nameColor, fontColor, bgColor } = useBuilderColor((state) => state);
  const { nameFontFamily, fontFamily, nameSize, infoSize } = useBuilderFont(
    (state) => state
  );
  const { socials } = useBuilderSocial((state) => state);
  return (
    <div className="w-full flex flex-col justify-start items-center mt-10">
      <div className="relative">
        <Image
          width={300}
          height={300}
          alt="mobile preview"
          src="/phone.webp"
        />
        <div className={`absolute top-0 left-0 w-full h-full bg-transparent`}>
          <div
            className={`mt-10 ms-[18px] me-[13px] mb-32 rounded-xl rounded-b-[39px] h-[552px] `}
            style={{ backgroundColor: bgColor }}
          >
            {/* Cover photo */}
            <div className=" w-full h-28 relative aspect-video">
              <Image
                fill
                alt=""
                src={coverPhoto ? coverPhoto : "/defaultCover.webp"}
                className="rounded-t-lg object-cover"
              />
            </div>
            {/* Avatar */}
            <div className="flex justify-center relative">
              <Avatar className="absolute top-[-40px] h-20 w-20 border-[3px] border-white ">
                <AvatarImage src={profilePhoto} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            {/* Profile Info */}
            <div className="text-center mt-10">
              <h4
                style={{ color: nameColor, fontSize: nameSize }}
                className={nameFontFamily}
              >
                {capitalize(name) || ""}
              </h4>
              <div
                style={{ color: fontColor, fontSize: infoSize }}
                className={`${fontFamily} px-3`}
              >
                <p className="text-[0.8em] leading-[1.1rem]">{position}</p>
                <p className="text-[0.8em] leading-[1.1rem]">{bio}</p>
              </div>
            </div>
            {/* Socials */}
            <div className="flex justify-center gap-2 mt-3 flex-wrap">
              {socials?.map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  className="hover:text-green-600"
                >
                  <div
                    className="p-2 rounded-md hover:cursor-pointer"
                    style={{
                      backgroundColor: social.iconBgColor,
                      color: social.iconColor,
                    }}
                  >
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
