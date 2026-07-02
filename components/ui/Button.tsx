import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-[#D6216E] text-white hover:bg-[#C2185B] focus:ring-[#E91E63] hover:shadow-xl hover:-translate-y-0.5":
              variant === "primary",
            "bg-white text-[#222222] border-2 border-[#222222] hover:bg-[#222222] hover:text-white focus:ring-[#222222] hover:-translate-y-0.5":
              variant === "secondary",
            "border-2 border-[#D6216E] text-[#D6216E] hover:bg-[#D6216E] hover:text-white focus:ring-[#E91E63] hover:-translate-y-0.5":
              variant === "outline",
            "h-12 px-8 text-base": size === "default",
            "h-10 px-6 text-sm": size === "sm",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
