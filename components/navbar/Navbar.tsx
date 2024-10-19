import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const NavItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export function Navbar() {
  return (
    <div className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon />
        <span className="ml-2">Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {NavItems.map((navItem) => (
        <ActiveLink
          key={navItem.path}
          path={navItem.path}
          text={navItem.text}
        />
      ))}
    </div>
  );
}
