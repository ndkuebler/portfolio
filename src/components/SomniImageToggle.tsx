"use client";

import { useState, lazy, Suspense } from "react";
import Image from "next/image";

const SomniModelViewer = lazy(() =>
  import("./SomniModelViewer").then((m) => ({ default: m.SomniModelViewer }))
);

export function SomniImageToggle({ image, title }: { image: string; title: string }) {
  const [show3D, setShow3D] = useState(false);

  return (
    <div className="mt-12">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-[#f5f5f5]/10 bg-[#111]">
        {show3D ? (
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center text-[#f5f5f5]/40 text-sm">
                Loading 3D model…
              </div>
            }
          >
            <SomniModelViewer />
          </Suspense>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
            unoptimized={image.endsWith(".svg")}
          />
        )}
      </div>
      <button
        onClick={() => setShow3D((v) => !v)}
        className="mt-4 rounded-full border border-[#f5f5f5]/20 px-5 py-2 text-[0.8125rem] font-medium tracking-wide text-[#f5f5f5]/70 transition-colors hover:border-[#f5f5f5]/40 hover:text-[#f5f5f5]"
      >
        {show3D ? "View Image" : "View 3D"}
      </button>
    </div>
  );
}
