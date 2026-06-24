import * as React from "react"
import { cn } from "../../lib/utils"
import { ActionLink } from "./ActionLink"

export function GuideCard({
  category,
  title,
  description,
  readTime,
  image,
  cornerClass = "rounded-tr-[32px]",
}: any) {
  return (
    <div
      className={cn(
        "bg-white flex flex-col cursor-pointer transition-all group overflow-hidden hover:scale-[1.01]",
        cornerClass,
      )}
    >
      {image && (
        <div className="w-full aspect-[16/9] overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[0.58rem] tracking-[0.14em] uppercase text-[var(--color-thread-mid-green)] font-bold mb-3 font-sans">
          {category}
        </span>
        <h3 className="text-[1.18rem] font-semibold tracking-tight leading-tight mb-2 text-slate-900 font-sans">
          {title}
        </h3>
        <p className="text-[0.9rem] text-slate-500 leading-relaxed flex-1 font-sans">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 mt-8">
          <span className="text-[0.78rem] text-slate-400 font-sans">{readTime}</span>
          <ActionLink variant="slate" as="span" className="group-hover:text-[var(--color-thread-mid-green)]">
            Read guide
          </ActionLink>
        </div>
      </div>
    </div>
  );
}
