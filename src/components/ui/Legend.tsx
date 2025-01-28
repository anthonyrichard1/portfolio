import { forwardRef, HTMLAttributes, Ref } from "react";
import Text from "./Text";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Legend = forwardRef<Props, Props>(({ className, text }, ref) => {
  return (
    <div
      className={cn("flex justify-center items-center gap-2", className)}
      ref={ref as Ref<HTMLDivElement>}
    >
      <div className="block h-6 w-6 bg-accent/40 border-2 border-primary rounded-md"></div>
      <Text variant="muted">{text}</Text>
    </div>
  );
});

Legend.displayName = "Legend";
export default Legend;
