import Image from "next/image";
import { conceptItems } from "@/data/concepts";

export function Concepts() {
  const items = conceptItems;

  return (
    <section
      className="border-t border-[#f5f5f5]/[0.08] py-20 sm:py-28"
      aria-labelledby="concepts-heading"
    >
      <div className="mx-auto mb-12 flex max-w-[1400px] items-baseline justify-between gap-6 px-6 sm:px-10 lg:px-14">
        <h2
          id="concepts-heading"
          className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[#f5f5f5] uppercase"
        >
          Concepts
        </h2>
      </div>

      <div className="concepts-marquee group relative overflow-hidden pl-6 sm:pl-10 lg:pl-14">
        <div className="concepts-marquee-track inline-flex gap-8">
          <div className="flex gap-8">
            {items.map((item) => (
              <div
                key={item.filename}
                className="w-[min(72vw,280px)] shrink-0 sm:w-72 md:w-80"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#f5f5f5]/10 bg-[#111]">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 72vw, 320px"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-8" aria-hidden>
            {items.map((item) => (
              <div
                key={`loop-${item.filename}`}
                className="w-[min(72vw,280px)] shrink-0 sm:w-72 md:w-80"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#f5f5f5]/10 bg-[#111]">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 72vw, 320px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
