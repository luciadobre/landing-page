import { cn } from "@/app/lib/utils";

export function TextField({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full border border-border bg-card px-4 py-3 text-sm text-white outline-none placeholder:text-dim focus:border-primary",
        className,
      )}
      {...props}
    />
  );
}

export function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={5}
      className={cn(
        "w-full resize-none border border-border bg-card px-4 py-3 text-sm text-white outline-none placeholder:text-dim focus:border-primary",
        className,
      )}
      {...props}
    />
  );
}
