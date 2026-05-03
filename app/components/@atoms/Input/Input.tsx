import { cn } from "@/app/lib/utils";

interface InputProps<T extends HTMLElement>
  extends React.InputHTMLAttributes<T> {
  inputType?: "input" | "textarea";
}

export function TextField(props: InputProps<HTMLInputElement>) {
  return <Input<HTMLInputElement> {...props} />;
}

export function TextArea(props: InputProps<HTMLTextAreaElement>) {
  return <Input<HTMLTextAreaElement> {...props} inputType="textarea" />;
}

export default function Input<T extends HTMLElement>({
  inputType = "input",
  ...props
}: InputProps<T>) {
  const classes = cn(
    "px-4 py-5 ring-1 ring-gray-700 rounded-xl w-full bg-transparent transition duration-200",
    "hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary text-textColor placeholder:text-secondaryTextColor",
  );

  if (inputType === "textarea") {
    // @ts-ignore
    return <textarea className={classes} rows={4} {...props} />;
  }
  // @ts-ignore
  return <input className={classes} {...props} />;
}
