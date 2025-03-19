/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldPath, FieldValues } from "react-hook-form";

interface FormFieldComponentProps {
  name: FieldPath<FieldValues>;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  control: any;
}
const FormFieldComponent = ({
  name,
  label,
  placeholder,
  type,
  required,
  control,
}: FormFieldComponentProps) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldComponent;
