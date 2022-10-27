import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex py-4 px-3 h-12 items-center gap-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

interface TextInputIconProps {
  children: ReactNode;
}

export function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent text-gray-100 w-full text-xs flex-1 placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}
export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
