import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { AppWindowMacIcon } from "lucide-react";
import MessageInput from "./message-input";
import AgentHeader from "./agent-header";
import AgentContent from "./agent-content";

export default function AgentWindow() {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "absolute bottom-3 right-3 size-14 flex items-center justify-center rounded-3xl",
          "bg-blue-700 text-white",
          "hover:bg-blue-800 active:bg-blue-900",
          "data-[state=open]:bg-blue-800"
        )}
      >
        <AppWindowMacIcon className="size-6" />
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "p-0 mb-1 w-85 mr-3 h-[600px] overflow-hidden rounded-2xl shadow-md flex flex-col"
        )}
      >
        <AgentHeader />
        <AgentContent />
        <MessageInput />
      </PopoverContent>
    </Popover>
  );
}
