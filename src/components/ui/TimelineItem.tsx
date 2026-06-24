import * as React from "react"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { ActionLink } from "./ActionLink"
import { ArrowRight } from "lucide-react"
import { ClinicalWeighting } from "./ClinicalWeighting"

interface TimelineItemProps {
  tag: string;
  title: string;
  meta: string;
  content: string | React.ReactNode;
  facts?: Record<string, string>;
  dependency?: string;
  progress?: number;
  active?: boolean;
  isFirst?: boolean;
  isCollapsible?: boolean;
}

export function TimelineItem({
  tag,
  title,
  meta,
  content,
  facts = {},
  dependency,
  progress = 0,
  active = false,
  isFirst = false,
  isCollapsible = false,
}: TimelineItemProps) {
  const [isOpen, setIsOpen] = useState(isCollapsible ? active : true);

  const hasFacts = facts && Object.keys(facts).length > 0;

  const handleHeaderClick = () => {
    if (isCollapsible) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={cn(
        "border-t border-black/10 transition-all",
        isCollapsible && "cursor-pointer group hover:bg-black/[0.01]",
        isCollapsible && isOpen && "bg-black/[0.01]"
      )}
      onClick={handleHeaderClick}
    >
      <div className="flex items-center gap-4 py-5.5 px-1">
        <span
          className={cn(
            "text-[0.75rem] tracking-[0.1em] font-medium w-12 flex-shrink-0 uppercase",
            active
              ? "text-[var(--color-thread-mid-green)]"
              : "text-[var(--color-thread-placeholder)]",
          )}
        >
          {tag}
        </span>
        <div className="flex-1">
          <div
            className={cn(
              "text-[1.18rem] font-medium tracking-tight",
              active
                ? "text-[var(--color-thread-heading)]"
                : "text-[var(--color-thread-dark-slate)]",
            )}
          >
            {title}
            <div className="text-[0.8rem] text-[var(--color-thread-gray)] font-normal mt-0.5 tracking-normal">
              {meta}
            </div>
          </div>
        </div>

        {/* Plus/Minus Toggle Icon for collapsible view */}
        {isCollapsible && (
          <div className="flex-shrink-0 w-[22px] h-[22px] relative">
            <div className="absolute left-0 top-1/2 w-full h-[1.5px] bg-[var(--color-thread-dark-slate)] transition-all" />
            <div
              className={cn(
                "absolute top-0 left-1/2 h-full w-[1.5px] bg-[var(--color-thread-dark-slate)] transition-all",
                isOpen && "scale-y-0",
              )}
            />
          </div>
        )}
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isCollapsible ? (isOpen ? "max-h-[1000px]" : "max-h-0") : "max-h-none opacity-100"
        )}
      >
        <div className={cn(
          "px-16 pb-12 max-md:px-2",
          isCollapsible && "pb-6.5 max-md:px-0"
        )}>
          <div className="grid grid-cols-1 gap-12">
            <div className={cn(
              "grid grid-cols-1 gap-6",
              hasFacts ? "grid-cols-[1fr,1fr] gap-12 max-lg:grid-cols-1 max-lg:gap-8" : ""
            )}>
              <div className="space-y-6">
                <div>
                  <span className="text-[0.6rem] tracking-[0.14em] uppercase text-slate-500 font-semibold mb-2 block">
                    Why this matters most
                  </span>
                  <p className="text-[0.96rem] text-slate-500 leading-relaxed max-w-[60ch]">
                    {content}
                  </p>
                </div>

                {dependency && (
                  <div className="text-[0.88rem] flex items-center gap-2.5 text-slate-500 leading-tight">
                    <ArrowRight className="w-[15px] h-[15px] flex-shrink-0 stroke-[2] text-[var(--color-thread-placeholder)]" />
                    <span dangerouslySetInnerHTML={{ __html: dependency }} />
                  </div>
                )}
              </div>

              {hasFacts && (
                <ClinicalWeighting facts={facts} />
              )}
            </div>
          </div>

          <div className="mt-4 pt-3.5 flex items-center justify-between">
            <span className="text-[0.78rem] text-slate-500 font-medium">
              Plan Progress: {progress}%
            </span>
            <ActionLink variant="slate" as="span">
              See details
            </ActionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
