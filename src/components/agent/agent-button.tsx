import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 scale-100 active:scale-95 transition-all ease-out duration-100",
  {
    variants: {
      variant: {
        default:
          "size-9 border-slate-300 text-slate-600 hover:bg-green-100 hover:text-green-700 active:bg-green-200/80",
        submit:
          "bg-green-100 text-green-700 disabled:opacity-50 size-9 hover:bg-green-700 hover:text-white",
        secondary:
          "border border-green-300 px-1 text-green-700 disabled:opacity-50  hover:bg-green-700 hover:text-white",
        newthread:
          "border border-slate-300 px-8 gap-1 text-sm font-medium text-green-700 disabled:opacity-50 hover:border-green-700  hover:bg-green-100 hover:text-green-700 disabled:cursor-not-allowed disabled:opacity-50",
      },
      size: {
        default: "h-9 px-2 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const AgentButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
AgentButton.displayName = "Button";

export { AgentButton, buttonVariants };
