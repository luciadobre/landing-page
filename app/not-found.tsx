import { PageState } from "@/app/components/@atoms/PageState/PageState";

export default function NotFound() {
  return (
    <PageState
      label="404 / Missing"
      title="Not found."
      description="This page does not exist, or the link points somewhere that moved."
      action={{ label: "Back home", href: "/" }}
    />
  );
}
