import * as React from "react"
import { cn } from "@/src/lib/utils"

const badgeVariants = {
  default: "bg-brand-900 text-white shadow hover:bg-brand-800",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  outline: "text-gray-900 border border-gray-200",
  sale: "bg-amber-600 text-white",
  rent: "bg-emerald-600 text-white",
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-900",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
