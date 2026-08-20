"use client";

import dynamic from "next/dynamic";
import { LoadingMark } from "@/app/components/@atoms/PageState/PageState";

export const JourneyLine = dynamic(
  () => import("./JourneyLine").then((module) => module.JourneyLine),
  {
    ssr: false,
    loading: () => (
      <>
        <div
          aria-hidden="true"
          className="hidden max-[900px]:mb-2 max-[900px]:mt-5 max-[900px]:block max-[900px]:h-[160px]"
        />
        <div className="absolute right-[14%] top-8 hidden lg:block">
          <LoadingMark label="Loading route" compact />
        </div>
      </>
    ),
  },
);
