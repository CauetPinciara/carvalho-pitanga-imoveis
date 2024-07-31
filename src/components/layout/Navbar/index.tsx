"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { LogoIcon } from "../../ui/logos";
import NavbarMobileContent from "./MobileContent";
import NavbarDesktopContent from "./DesktopContent";
import Link from "next/link";

export interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Comprar",
  },
  {
    href: "#testimonials",
    label: "Alugar",
  },
];

export const Navbar = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <NavbarMobileContent routes={routeList} />

          {/* desktop */}
          <NavbarDesktopContent routes={routeList} />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
