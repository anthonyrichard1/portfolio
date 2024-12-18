import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { ThemedText } from "./themed_text";

type props = PropsWithChildren & { className?: string; title?: string };

export const Section = ({ className, title, children, ...rest }: props) => {
  return (
    <section className={cn("flex flex-col gap-4", className)} {...rest}>
      {title ? (
        <ThemedText className="text-center" variant="h3">
          {title}
        </ThemedText>
      ) : null}
      {children}
    </section>
  );
};
