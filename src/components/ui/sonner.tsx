"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

export type ToasterComponentProps = ToasterProps;

export const Toaster: React.FC<ToasterComponentProps> = (props) => {
  //* State
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
