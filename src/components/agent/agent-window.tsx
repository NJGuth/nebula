import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { AppWindowMacIcon } from "lucide-react";

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
      <PopoverContent className={cn("mr-3 min-h-[500px] min-w-[300px]")}>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
}
