"use client";

import { FieldProps, useField } from "informed";
import { Textarea, TextareaProps } from "./ui/textarea";
import { Label, LabelProps } from "./ui/label";

export type FormInputTextareaProps = FieldProps<TextareaProps> & {
  label?: React.ReactNode;
  labelProps?: LabelProps;
};

export const FormInputTextarea: React.FC<FormInputTextareaProps> = (props) => {
  const { label, labelProps = {}, ...inputProps } = props;

  //* State
  const { render, userProps, informed, fieldState } = useField<
    TextareaProps,
    HTMLTextAreaElement
  >({
    ...inputProps,
  });

  //* Variables
  const { error } = fieldState;

  return render(
    <div className="grid w-full items-center gap-3">
      {label != null && <Label {...labelProps}>{label}</Label>}
      <Textarea aria-invalid={error != null} {...informed} {...userProps} />
      {error != null && (
        <span className="text-destructive text-xs">{error}</span>
      )}
    </div>,
  );
};
