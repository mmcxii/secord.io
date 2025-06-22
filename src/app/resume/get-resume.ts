import { useQuery } from "@tanstack/react-query";

export function useGetResume() {
  return useQuery({
    queryKey: ["get-resume"],
    queryFn: async () => {
      const response = await fetch("/api/resume", {
        method: "GET",
      });

      switch (response.status) {
        case 200: {
          const { data } = await response.json();
          return data;
        }

        default: {
          let errorMessage;
          try {
            errorMessage = await response.text();
          } catch {
            errorMessage = "An error occurred while loading this content.";
          }
          throw new Error(errorMessage);
        }
      }
    },
  });
}
