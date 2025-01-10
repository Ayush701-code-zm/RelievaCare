import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-teal-500 text-white shadow hover:bg-teal-600 focus-visible:ring-teal-500",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 focus-visible:ring-red-500",
        outline:
          "border border-teal-500 text-teal-500 bg-transparent shadow-sm hover:bg-teal-50 focus-visible:ring-teal-500",
        secondary:
          "bg-teal-100 text-teal-700 shadow-sm hover:bg-teal-200 focus-visible:ring-teal-500",
        ghost: "text-teal-500 hover:bg-teal-50 focus-visible:ring-teal-500",
        link: "text-teal-500 underline-offset-4 hover:underline focus-visible:ring-teal-500",
      },
      size: {
        default: "h-12 px-6 py-3 text-lg", // Increased text size for default button
        sm: "h-10 rounded-md px-4 text-base", // Increased text size for small button
        lg: "h-14 rounded-md px-10 py-4 text-xl", // Increased text size for large button
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
