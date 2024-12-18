import { ThemedText } from "./themed_text";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t-[1px] border-primary pt-3">
      <ThemedText className="text-center" variant="muted">
        Portfolio 2025 &copy; par Anthony RICHARD
      </ThemedText>
      <ThemedText className="text-center" variant="muted">
        Tous Droits Réservés
      </ThemedText>
    </footer>
  );
};
