import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export function Logo({ className }: HTMLAttributes<HTMLOrSVGImageElement>) {
  return (
    <svg
      className={cn("h-9 w-9 shrink-0", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="8" className="fill-black" />
      <path
        d="M17 66.4975L66.4975 17"
        strokeWidth="12"
        strokeLinecap="round"
        className="stroke-white"
      />
      <path
        d="M42.2512 78.9999L78.9999 42.2512"
        strokeWidth="12"
        strokeLinecap="round"
        className="stroke-white"
      />
      <circle cx="24.5" cy="24.5" r="7.5" className="fill-white" />
      <circle cx="79.5" cy="79.5" r="7.5" className="fill-white" />
    </svg>
  )
}
