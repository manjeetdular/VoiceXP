"use client";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menu = [
    { title: "Overview", icons: "chart-pie", href:"/"},
    { title: "Conversations", icons: "message-square" , href:"Conversations"},
    { title: "Users", icons: "contact" , href:"Users",},
    { title: "Performance", icons: "gauge" , href:"Performance"},
    { title: "Feedback", icons: "gauge" , href:"Feedback"},
  ];
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-24"
          } duration-300 relative bg-primary h-screen p-5`}
        >
          <CircleArrowLeft
            className={`absolute size-8 -right-4 top-8 cursor-pointer stroke-cta fill-white ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex justify-start items-center gap-x-4">
            <Image
              src="/ham.svg"
              width={50}
              height={50}
              className={`cursor-pointer h-11 duration-500 `}
            />
            <Link href={"/"}>
              <Image
                src="/logocolor.png"
                width={120}
                height={120}
                className={`origin-left duration-300 ${!open && "scale-0"}`}
              />
            </Link>
          </div>
          <ul className="pt-10 ">
            {Menu.map((menu, index) => (
              <Link href={`${menu.href}`} key={index}>
                <li className="flex justify-start items-center p-2 gap-x-4 cursor-pointer hover:stroke-white hover:bg-cta/50 hover:text-white rounded-md">
                  <Image src={`/${menu.icons}.svg`} width={35} height={35} className="" />
                  <span
                    className={`origin-left duration-200 font-medium text-lg ${
                      !open && "scale-0"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
