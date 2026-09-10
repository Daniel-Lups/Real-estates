import * as React from "react"
import { cn } from "@/src/lib/utils"

const buttonVariants = {
  default: "bg-brand-900 text-white hover:bg-brand-800 shadow-sm",
  primary: "bg-brand-900 text-white hover:bg-brand-800 shadow-sm",
  destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
  outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900",
  link: "text-brand-900 underline-offset-4 hover:underline",
}

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3 text-sm",
  lg: "h-12 rounded-md px-8 text-base",
  icon: "h-10 w-10",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, buttonSizes }
