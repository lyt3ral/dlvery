"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Package } from "lucide-react";

export default function Home() {
  return (
    <main>
      <BackgroundBoxesDemo />
    </main>
  );
}

// todo: add boxes for explaining features

export function BackgroundBoxesDemo() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <div className="relative z-20 flex items-center gap-2 text-xl text-white md:text-4xl">
        <h1>DLVERY</h1>
        <Package className="h-10 w-10 stroke-white" />
      </div>
      <p className="relative z-20 mt-2 text-center text-neutral-300">
        Realtime Professional Delivery Service
      </p>
    </div>
  );
}
