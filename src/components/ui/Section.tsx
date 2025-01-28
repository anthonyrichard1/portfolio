import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, Ref } from "react";
import Text from "./Text";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Section = forwardRef<HTMLDivElement, Props>(
  ({ className, children, title, ...props }, ref) => {
    return (
      <section
        className={cn("flex flex-col gap-4", className)}
        {...props}
        ref={ref as Ref<HTMLDivElement>}
      >
        {title ? (
          <Text className="text-center" variant="h3">
            {title}
          </Text>
        ) : null}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
