import * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "./Button"

export function FileItem({
  name,
  typeName,
  date,
  shared,
  sharedWith,
  icon: Icon,
  onToggleShare,
  cornerClass = "rounded-2xl",
}: any) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 bg-white p-4.5 transition-all hover:bg-black/[0.01] group",
        cornerClass,
      )}
    >
      <div className="w-[42px] h-[42px] rounded-xl bg-[var(--color-thread-light-green)] text-[var(--color-thread-mid-green)] flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 stroke-[1.7]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[1.04rem] font-bold tracking-tight truncate">
          {name}
        </div>
        <div className="flex items-center gap-3 mt-1.25">
          <span className="text-[0.56rem] tracking-[0.12em] uppercase font-bold text-[var(--color-thread-mid-green)] bg-[var(--color-thread-light-green)] rounded-full px-2.25 py-0.75">
            {typeName}
          </span>
          <span className="text-[0.78rem] text-slate-400 font-medium">
            {date}
          </span>
        </div>
        <div
          className={cn(
            "text-[0.8rem] mt-2 flex items-center gap-1.75",
            shared ? "text-[var(--color-thread-mid-green)] font-medium" : "text-slate-400",
          )}
        >
          {shared && (
            <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-thread-mid-green)]" />
          )}
          {shared ? `Shared with ${sharedWith}` : "Not shared yet"}
        </div>
      </div>
      <Button
        onClick={onToggleShare}
        variant="muted"
        className="flex-shrink-0 text-[0.82rem]"
      >
        {shared ? "Make private" : "Share with care circle"}
      </Button>
    </div>
  );
}
