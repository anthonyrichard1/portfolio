import { cn } from "@/lib/utils";
import React, { PropsWithChildren, forwardRef } from "react";

const DEFAULT_VARIANT = "p";

interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  variant?: TextVariant;
}
const Text = forwardRef<HTMLElement, Props>(
  ({ className, variant, children, ...props }, ref) => {
    switch (variant ?? DEFAULT_VARIANT) {
      case "h1":
        return (
          <h1
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={cn(
              "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
              className
            )}
            {...props}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={cn(
              "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
              className
            )}
            {...props}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={cn(
              "scroll-m-20 text-2xl font-semibold tracking-tight",
              className
            )}
            {...props}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            ref={ref as React.Ref<HTMLHeadingElement>}
            className={cn(
              "scroll-m-20 text-xl font-semibold tracking-tight",
              className
            )}
            {...props}
          >
            {children}
          </h4>
        );
      case "p":
        return (
          <p
            ref={ref as React.Ref<HTMLParagraphElement>}
            className={cn("leading-7 text-justify", className)}
            {...props}
          >
            {children}
          </p>
        );
      case "lead":
        return (
          <p
            ref={ref as React.Ref<HTMLParagraphElement>}
            className={cn("text-xl text-muted-foreground", className)}
            {...props}
          >
            {children}
          </p>
        );
      case "muted":
        return (
          <p
            ref={ref as React.Ref<HTMLParagraphElement>}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
          >
            {children}
          </p>
        );
      case "code":
        return (
          <code
            ref={ref as React.Ref<HTMLElement>}
            className={cn(
              "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
              className
            )}
            {...props}
          >
            {children}
          </code>
        );
      default:
        return (
          <p
            ref={ref as React.Ref<HTMLParagraphElement>}
            className={cn("leading-7 text-justify", className)}
            {...props}
          >
            {children}
          </p>
        );
    }
  }
);

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "lead"
  | "muted"
  | "code";

Text.displayName = "Text";
export default Text;
