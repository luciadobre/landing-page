"use client";

import { PageState } from "@/app/components/@atoms/PageState/PageState";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <PageState
      eyebrow="Something broke"
      title="Try again."
      description="The page hit a rendering problem. Retry it once and it should recover if the issue was temporary."
      action={{ label: "Retry", onClick: reset }}
    />
  );
}
