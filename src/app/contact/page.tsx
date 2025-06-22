"use client";

import { FormInputText } from "@/components/form-input-text";
import { FormInputTextarea } from "@/components/form-input-textarea";
import { Button } from "@/components/ui/button";
import { Form, FormApi, FormProps, InformedProps } from "informed";
import { usePostContactForm } from "./post-contact-form";
import { Loader } from "@/components/loader";
import * as React from "react";
import { toast } from "sonner";
import { EMAIL_REGEX } from "@/utils/constants";

const Contact: React.FC = () => {
  //* State
  const { isPending, mutate } = usePostContactForm();

  //* Refs
  const formApiRef = React.useRef<null | FormApi>(null);

  //* Handlers
  const handleOnSubmit: InformedProps<FormProps>["onSubmit"] = (formState) => {
    const { values } = formState;

    mutate(values, {
      onSuccess: () => {
        formApiRef.current?.reset();
        toast.success("Message Received", {
          description:
            "I've got your message and I will get back to you as soon as possible.",
        });
      },
      onError: (error) => {
        toast.error("Well This is Awkward...", {
          description: error?.message,
        });
      },
    });
  };

  return (
    <Form
      formApiRef={formApiRef}
      onSubmit={handleOnSubmit}
      className="flex h-full flex-col justify-center gap-2 p-4"
    >
      <div className="flex flex-col gap-2 md:flex-row">
        <FormInputText
          errorMessage={{
            pattern: "Enter a valid email address.",
          }}
          pattern={EMAIL_REGEX}
          required
          name="email"
          label="Your Email"
        />
        <FormInputText required name="name" label="Your Name" />
      </div>
      <FormInputTextarea required name="message" label="Message" />
      <Button type="submit">Submit</Button>

      {isPending && <Loader />}
    </Form>
  );
};

export default Contact;
