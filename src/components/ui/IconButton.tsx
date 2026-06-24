import * as React from "react"
import { cn } from "../../lib/utils"

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasBadge?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, hasBadge, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "w-10.5 h-10.5 rounded-full bg-white border border-black/10 flex items-center justify-center text-slate-900 relative cursor-pointer hover:border-black/20 transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 shrink-0",
          className
        )}
        {...props}
      >
        {hasBadge && (
          <span className="absolute top-[10px] right-[11px] w-[7px] h-[7px] rounded-full bg-[var(--color-thread-mid-green)] border-2 border-white shadow-sm" />
        )}
        {children}
      </button>
    )
  }
)
IconButton.displayName = "IconButton"
