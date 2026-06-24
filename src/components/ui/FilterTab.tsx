import * as React from "react"
import { cn } from "../../lib/utils"

export interface FilterTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label: string;
}

export const FilterTab = React.forwardRef<HTMLButtonElement, FilterTabProps>(
  ({ className, active, label, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "px-4 py-2 rounded-full text-[0.84rem] font-medium border border-black/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950",
          active
            ? "bg-[var(--color-thread-mid-green)] text-white border-[var(--color-thread-mid-green)]"
            : "bg-white text-slate-500 hover:text-slate-900 hover:border-[var(--color-thread-mid-green)]",
          className
        )}
        {...props}
      >
        {label}
      </button>
    )
  }
)
FilterTab.displayName = "FilterTab"
