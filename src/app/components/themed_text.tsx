import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "lead"
  | "muted"
  | "code";

type props = PropsWithChildren & { className?: string; variant?: TextVariant };

const DEFAULT_VARIANT = "p";

export const ThemedText = ({
  className,
  variant,
  children,
  ...rest
}: props) => {
  switch (variant ?? DEFAULT_VARIANT) {
    case "h1":
      return (
        <h1
          className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className
          )}
          {...rest}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            className
          )}
          {...rest}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
          )}
          {...rest}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            className
          )}
          {...rest}
        >
          {children}
        </h4>
      );
    case "p":
      return (
        <p className={cn("leading-7 text-justify", className)} {...rest}>
          {children}
        </p>
      );
    case "lead":
      return (
        <p className={cn("text-xl text-muted-foreground", className)} {...rest}>
          {children}
        </p>
      );
    case "muted":
      return (
        <p className={cn("text-sm text-muted-foreground", className)} {...rest}>
          {children}
        </p>
      );
    case "code":
      return (
        <code
          className={cn(
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
            className
          )}
          {...rest}
        >
          {children}
        </code>
      );
  }
};
