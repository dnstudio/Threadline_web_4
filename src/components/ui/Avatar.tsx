import * as React from "react"
import { cn } from "../../lib/utils"

export interface AvatarProps extends React.ComponentPropsWithoutRef<"div"> {
  fallback?: React.ReactNode;
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ className, fallback, src, alt, size = "md", ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-semibold transition-all overflow-hidden shrink-0",
        {
          "w-[30px] h-[30px] text-[0.82rem]": size === "sm",
          "w-[34px] h-[34px] text-[0.86rem]": size === "md",
          "w-10.5 h-10.5 text-[0.86rem]": size === "lg",
        },
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || "Avatar"} className="w-full h-full object-cover" />
      ) : (
        fallback
      )}
    </div>
  )
}
