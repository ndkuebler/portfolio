"use client";

import { useMemo, useState } from "react";

type Variant = {
  id: string;
  name: string;
  className: string;
  note: string;
};

export default function HomeHoverSandboxPage() {
  const variants: Variant[] = useMemo(
    () => [
      { id: "v1", name: "1) Full-bleed gradient wash", className: "hv1", note: "Whole image gets a clean gradient wash + text rises; slight zoom." },
      { id: "v2", name: "2) Bottom glass bar", className: "hv2", note: "iOS-style frosted bar at bottom; slides up + zoom." },
      { id: "v3", name: "3) Vignette + text only", className: "hv3", note: "No box. Whole-image vignette + crisp text; slight parallax." },
      { id: "v4", name: "4) Blur spotlight behind text", className: "hv4", note: "Blurred mask expands behind text; clean & intentional." },
      { id: "v5", name: "5) Border draw frame", className: "hv5", note: "Rounded frame draws in; text fades up." },
      { id: "v6", name: "6) Corner tag + subtitle", className: "hv6", note: "Tag pill slides in top-left + text appears; subtle bounce." },
      { id: "v7", name: "7) Slide-in panel sheet", className: "hv7", note: "Panel slides from left; text staggers; slight zoom." },
      { id: "v8", name: "8) Underline grow + type feel", className: "hv8", note: "Underline grows + letter-spacing tightens; minimal." },
      { id: "v9", name: "9) Zoom-to-detail + caption", className: "hv9", note: "Stronger zoom + slight shift; text appears with wash." },
      { id: "v10", name: "10) Cinematic wash + animated grain", className: "hv10", note: "Full overlay + subtle animated grain." },
    ],
    []
  );

  const [showOnly, setShowOnly] = useState<string>("all");
  const visible = showOnly === "all" ? variants : variants.filter((v) => v.id === showOnly);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Hover Sandbox</h1>
            <p className="text-white/60 mt-2">Hover each card. Same content, 10 different reveal styles.</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/60 text-sm">Show:</span>
            <select
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
              value={showOnly}
              onChange={(e) => setShowOnly(e.target.value)}
            >
              <option value="all">All</option>
              {variants.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {visible.map((v) => (
            <div key={v.id} className="space-y-3">
              <div className="text-sm text-white/70">{v.name}</div>

              <a href="#" className={`hvCard ${v.className}`} aria-label={v.name}>
                <img src="/work/watershield.png" alt="" className="hvImg" />
                <div className="hvContent">
                  <div className="hvTitle">WaterShield</div>
                  <div className="hvSub">Longboard wheel fender</div>
                </div>

                <div className="hvTag" aria-hidden="true">
                  Product
                </div>
                <div className="hvUnderline" aria-hidden="true" />
              </a>

              <div className="text-xs text-white/50 leading-relaxed">{v.note}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hvCard {
          position: relative;
          display: block;
          width: 100%;
          max-width: 720px;
          aspect-ratio: 16 / 9;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.06);
          transform: translateZ(0);
          isolation: isolate;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
        }

        .hvImg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: transform 420ms ease, filter 420ms ease;
          filter: saturate(1) contrast(1);
          will-change: transform, filter;
        }

        .hvContent {
          position: absolute;
          left: 22px;
          bottom: 20px;
          z-index: 3;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 220ms ease, transform 260ms ease;
          pointer-events: none;
        }

        .hvTitle {
          font-size: 34px;
          line-height: 1.06;
          letter-spacing: -0.02em;
          font-weight: 500;
          text-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
        }

        .hvSub {
          margin-top: 8px;
          font-size: 22px;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
        }

        .hvTag {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 4;
          opacity: 0;
          transform: translateX(-10px) translateY(-4px);
          transition: opacity 220ms ease, transform 260ms cubic-bezier(0.2, 0.9, 0.2, 1.1);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
          background: rgba(0, 0, 0, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
          display: none;
          pointer-events: none;
        }

        .hvUnderline {
          position: absolute;
          left: 22px;
          bottom: 16px;
          height: 2px;
          width: 0px;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 2px;
          z-index: 4;
          opacity: 0;
          transition: width 320ms ease, opacity 220ms ease;
          display: none;
          pointer-events: none;
        }

        .hvCard:hover .hvContent {
          opacity: 1;
          transform: translateY(0px);
        }

        .hvCard::before,
        .hvCard::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0;
          transition: opacity 240ms ease, transform 420ms ease;
          pointer-events: none;
        }

        /* 1 */
        .hv1::before {
          background: linear-gradient(120deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.55));
          transform: translateX(-3%);
        }
        .hv1:hover::before {
          opacity: 1;
          transform: translateX(0%);
        }
        .hv1:hover .hvImg {
          transform: scale(1.035);
        }

        /* 2 */
        .hv2::before {
          opacity: 1;
          inset: auto 0 0 0;
          height: 44%;
          transform: translateY(14px);
          background: linear-gradient(to top, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0));
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .hv2::after {
          background: radial-gradient(800px 220px at 20% 90%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
        }
        .hv2:hover::before {
          opacity: 1;
          transform: translateY(0px);
        }
        .hv2:hover::after {
          opacity: 1;
        }
        .hv2:hover .hvImg {
          transform: scale(1.03);
        }

        /* 3 */
        .hv3::before {
          background: radial-gradient(1200px 520px at 25% 80%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.62));
        }
        .hv3:hover::before {
          opacity: 1;
        }
        .hv3:hover .hvImg {
          transform: scale(1.03) translateX(6px);
        }

        /* 4 */
        .hv4::before {
          background: radial-gradient(520px 220px at 28% 78%, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
          transform: scale(0.92);
          backdrop-filter: blur(10px);
        }
        .hv4:hover::before {
          opacity: 1;
          transform: scale(1);
        }
        .hv4:hover .hvImg {
          transform: scale(1.03);
          filter: contrast(1.05);
        }

        /* 5 */
        .hv5::before {
          opacity: 1;
          inset: 12px;
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0));
        }
        .hv5::after {
          inset: 12px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.75);
          transform: scale(1.05);
        }
        .hv5:hover::after {
          opacity: 1;
          transform: scale(1);
        }
        .hv5:hover .hvImg {
          transform: scale(1.03);
        }

        /* 6 */
        .hv6 .hvTag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .hv6::before {
          background: linear-gradient(160deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.6));
        }
        .hv6:hover::before {
          opacity: 1;
        }
        .hv6:hover .hvTag {
          opacity: 1;
          transform: translateX(0px) translateY(0px);
        }
        .hv6:hover .hvImg {
          transform: scale(1.03);
        }

        /* 7 */
        .hv7::before {
          opacity: 1;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0));
          transform: translateX(-30%);
        }
        .hv7:hover::before {
          transform: translateX(0%);
        }
        .hv7:hover .hvContent {
          opacity: 1;
          transform: translateY(0px);
        }
        .hv7:hover .hvImg {
          transform: scale(1.03);
        }

        /* 8 */
        .hv8 .hvUnderline {
          display: block;
        }
        .hv8::before {
          background: radial-gradient(700px 260px at 25% 80%, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0));
        }
        .hv8:hover::before {
          opacity: 1;
        }
        .hv8:hover .hvUnderline {
          opacity: 1;
          width: 210px;
        }
        .hv8:hover .hvTitle {
          letter-spacing: -0.03em;
        }
        .hv8:hover .hvImg {
          transform: scale(1.03);
        }

        /* 9 */
        .hv9::before {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.72));
        }
        .hv9:hover::before {
          opacity: 1;
        }
        .hv9:hover .hvImg {
          transform: scale(1.065) translateX(10px) translateY(6px);
          filter: contrast(1.06) saturate(1.05);
        }

        /* 10 */
        .hv10::before {
          background: linear-gradient(120deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.68));
        }
        .hv10::after {
          background-image: repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.03) 0px,
              rgba(255, 255, 255, 0.03) 1px,
              rgba(0, 0, 0, 0) 2px,
              rgba(0, 0, 0, 0) 3px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.02) 0px,
              rgba(255, 255, 255, 0.02) 1px,
              rgba(0, 0, 0, 0) 2px,
              rgba(0, 0, 0, 0) 4px
            );
          mix-blend-mode: overlay;
        }
        .hv10:hover::before {
          opacity: 1;
        }
        .hv10:hover::after {
          opacity: 1;
          animation: grainMove 900ms steps(2, end) infinite;
        }
        .hv10:hover .hvImg {
          transform: scale(1.035);
          filter: contrast(1.08) saturate(1.03);
        }

        @keyframes grainMove {
          0% {
            transform: translate3d(-6px, -6px, 0);
          }
          50% {
            transform: translate3d(6px, 3px, 0);
          }
          100% {
            transform: translate3d(-3px, 6px, 0);
          }
        }
      `}</style>
    </main>
  );
}
