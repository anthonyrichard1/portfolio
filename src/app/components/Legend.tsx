import { ThemedText } from "./themed_text";

type props = { text: string };

export const Legend = ({ text }: props) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="block h-6 w-6 bg-accent/40 border-2 border-primary rounded-md"></div>
      <ThemedText variant="muted">{text}</ThemedText>
    </div>
  );
};
