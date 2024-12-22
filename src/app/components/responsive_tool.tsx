import { ThemedText } from "./themed_text";

export const SizeChecker = () => {
  return (
    <div className="fixed top-0 left-0 m-4 bg-accent border-2 border-primary rounded-lg p-2">
      <ThemedText className="md:hidden">SM</ThemedText>
      <ThemedText className="hidden md:block lg:hidden">MD</ThemedText>
      <ThemedText className="hidden lg:block">LG</ThemedText>
    </div>
  );
};
