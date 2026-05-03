export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bold text-primary relative inline-block">
      {children}
      <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20" />
    </span>
  );
}
