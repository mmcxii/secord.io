"use client";

import { FieldProps, useField } from "informed";
import { Input, InputProps } from "./ui/input";
import { Label, LabelProps } from "./ui/label";

export type FormInputTextProps = FieldProps<InputProps> & {
  label?: React.ReactNode;
  labelProps?: LabelProps;
  errorMessage?: string | Record<string, unknown>;
};

export const FormInputText: React.FC<FormInputTextProps> = (props) => {
  const { label, labelProps = {}, ...inputProps } = props;

  //* State
  const { render, userProps, informed, fieldState } = useField<
    InputProps,
    HTMLInputElement
  >({
    type: "text",
    ...inputProps,
  });

  //* Variables
  const { error } = fieldState;

  return render(
    <div className="grid w-full items-center gap-3">
      {label != null && <Label {...labelProps}>{label}</Label>}
      <Input aria-invalid={error != null} {...informed} {...userProps} />
      {error != null && (
        <span className="text-destructive text-xs">{error}</span>
      )}
    </div>,
  );
};
