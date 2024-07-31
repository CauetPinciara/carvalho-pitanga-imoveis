"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, Search } from "lucide-react";
import { ModeToggle } from "../../ui/mode-toggle";
import { buttonVariants } from "../../ui/button";
import { useState } from "react";
import { RouteProps } from ".";
import Link from "next/link";

type IProps = {
  routes: RouteProps[];
};
const NavbarMobileContent = ({ routes }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <span className="flex md:hidden">
      <ModeToggle />

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="px-2">
          <Menu
            className="flex md:hidden h-5 w-5"
            onClick={() => setIsOpen(true)}
          ></Menu>
        </SheetTrigger>

        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle className="font-bold text-xl">
              Carvalho Pitanga
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col justify-center items-center gap-2 mt-4">
            {routes.map(({ href, label }: RouteProps) => (
              <Link
                rel="noreferrer noopener"
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className={buttonVariants({ variant: "ghost" })}
              >
                {label}
              </Link>
            ))}
            <Link
              rel="noreferrer noopener"
              href="/"
              target="_blank"
              className={`w-[110px] border ${buttonVariants({
                variant: "secondary",
              })}`}
            >
              <Search className="w-5 h-5" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </span>
  );
};

export default NavbarMobileContent;
