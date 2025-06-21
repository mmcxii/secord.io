import { LinkProps } from "next/link";

export const navigationItems: Array<React.PropsWithChildren<LinkProps>> = [
  // { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/contact", children: "Contact" },
  { href: "/resume", children: "Resume" },
];
