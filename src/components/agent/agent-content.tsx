import { ScrollArea } from "../ui/scroll-area";

export default function AgentContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollArea className="flex-1 flex w-full flex-col-reverse bg-white overflow-y-auto">
      {children}
    </ScrollArea>
  );
}
