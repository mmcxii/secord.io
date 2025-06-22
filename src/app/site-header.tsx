"use client";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";
import { navigationItems } from "./site-nav-items";
import { SiteLogo } from "./site-logo";
import { Container } from "@/components/container";

export const SiteHeader: React.FC = () => {
  //* State
  const pathname = usePathname();

  return (
    <header
      className={cx("sticky top-0 z-10 flex-grow-0", {
        "bg-background": pathname !== "/",
        "bg-black/10 text-white shadow-lg backdrop-blur-lg": pathname === "/",
      })}
    >
      <Container className="flex flex-col items-center gap-2 px-4 py-2 md:flex-row md:items-center md:justify-start md:gap-8">
        <h1>
          <Link href="/">
            <SiteLogo />
            <span className="sr-only">Nich Secord</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-8">
            {navigationItems.map((linkProps) => {
              return (
                <li key={JSON.stringify(linkProps)}>
                  <Link
                    {...linkProps}
                    className={cx(
                      "opacity-80 transition-all duration-300 hover:opacity-100",
                      {
                        "underline opacity-100": pathname === linkProps.href,
                      },
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
