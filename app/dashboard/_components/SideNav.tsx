"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center ">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      </div>
      <hr className="my-5 border" />
      <div className="mt-6">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon className="w-6 h-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
