"use client";

import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

export const Providers: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
        {children}
      </ThemeProvider>

      <Toaster position="top-center" />
    </QueryClientProvider>
  );
};
