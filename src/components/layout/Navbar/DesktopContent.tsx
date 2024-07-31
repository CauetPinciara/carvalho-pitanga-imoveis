"use client";
import { buttonVariants } from "../../ui/button";
import { RouteProps } from ".";
import Link from "next/link";
import { Search } from "lucide-react";

type IProps = {
  routes: RouteProps[];
};
const NavbarDesktopContent = ({ routes }: IProps) => {
  return (
    <>
      <nav className="hidden md:flex gap-2">
        {routes.map((route: RouteProps, i) => (
          <Link
            rel="noreferrer noopener"
            href={route.href}
            key={i}
            className={`text-[17px] ${buttonVariants({
              variant: "ghost",
            })}`}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex gap-2">
        <Link
          rel="noreferrer noopener"
          href="/"
          target="_blank"
          className={`border ${buttonVariants({ variant: "secondary" })}`}
        >
          <Search className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
};

export default NavbarDesktopContent;
