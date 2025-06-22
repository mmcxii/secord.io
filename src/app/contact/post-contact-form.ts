import { useMutation } from "@tanstack/react-query";
import { FormState } from "informed";

export function usePostContactForm() {
  return useMutation({
    mutationFn: async (params: FormState["values"]) => {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      switch (response.status) {
        case 200: {
          return;
        }

        default: {
          let errorMessage;
          try {
            errorMessage = await response.text();
          } catch {
            errorMessage = "An error occurred while submitting this form.";
          }
          throw new Error(errorMessage);
        }
      }
    },
  });
}
