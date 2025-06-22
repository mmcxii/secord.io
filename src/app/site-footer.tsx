"use client";

import Link from "next/link";
import { navigationItems } from "./site-nav-items";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { Container } from "@/components/container";

export const SiteFooter: React.FC = () => {
  //* State
  const { setTheme } = useTheme();

  //* Variables
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-4">
      <Container>
        <Separator />
        <div className="flex items-start justify-between py-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Made by me, in {currentYear}.</p>
            <nav className="text-sm">
              <ul>
                {navigationItems.map((linkProps) => {
                  return (
                    <li key={JSON.stringify(linkProps)}>
                      <Link
                        {...linkProps}
                        className="text-muted-foreground hover:text-primary transition-all duration-300"
                      />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <ToggleGroup
            onValueChange={setTheme}
            type="single"
            size="lg"
            variant="outline"
          >
            <ToggleGroupItem value="system" aria-label="Toggle system theme">
              <ComputerIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="light" aria-label="Toggle light theme">
              <SunIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Toggle dark theme">
              <MoonIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Container>
    </footer>
  );
};
