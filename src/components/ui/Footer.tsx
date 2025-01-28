import { forwardRef, HTMLAttributes } from "react";
import Text from "./Text";
import { cn } from "@/lib/utils";

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        className={cn(
          "flex flex-col items-center gap-1 border-t-[1px] border-primary pt-3 pb-2",
          className
        )}
        {...ref}
        {...props}
      >
        <Text className="text-center" variant="muted">
          Portfolio 2025 &copy; par Anthony RICHARD
        </Text>
        <Text className="text-center" variant="muted">
          Tous Droits Réservés
        </Text>
      </footer>
    );
  }
);

Footer.displayName = "Footer";
export default Footer;
