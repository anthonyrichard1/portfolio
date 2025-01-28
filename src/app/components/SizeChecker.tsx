import { forwardRef, HTMLAttributes, Ref } from "react";
import Text from "./Text";
import { cn } from "@/lib/utils";

const SizeChecker = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "fixed top-0 left-0 m-4 bg-accent border-2 border-primary rounded-lg p-2",
          className
        )}
        ref={ref as Ref<HTMLDivElement>}
        {...props}
      >
        <Text className="md:hidden">SM</Text>
        <Text className="hidden md:block lg:hidden">MD</Text>
        <Text className="hidden lg:block">LG</Text>
      </div>
    );
  }
);

SizeChecker.displayName = "SizeChecker";
export default SizeChecker;
