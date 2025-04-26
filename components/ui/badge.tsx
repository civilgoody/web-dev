import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 backdrop-blur-sm shadow-sm",
        secondary:
          "border-transparent bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/30 backdrop-blur-sm shadow-sm",
        destructive:
          "border-transparent bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 hover:border-destructive/30 backdrop-blur-sm shadow-sm",
        outline: "text-foreground border-border hover:bg-accent/50 backdrop-blur-sm",
        glow: "border-transparent bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 backdrop-blur-sm shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
