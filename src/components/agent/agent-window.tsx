import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { AiironSprite } from "./icons";
import Assistant from "./assistant";

export default function AgentWindow() {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "absolute bottom-3 right-3 size-14 flex items-center justify-center rounded-3xl group ring-0 transition-all ease-out duration-150",
          "bg-blue-700 ",
          "hover:bg-blue-800 active:bg-blue-900",
          "data-[state=closed]:hover:scale-105",
          "data-[state=open]:bg-blue-800 data-[state=open]:ring-4 data-[state=open]:ring-blue-500/40 data-[state=open]:shadow-lg"
        )}
      >
        <AiironSprite className="size-8 rotate-0  transition-all ease-out duration-150 group-data-[state=open]:scale-125 group-data-[state=closed]:hover:scale-105" />
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "p-0 mb-1 w-85 mr-3 h-[600px] overflow-hidden rounded-2xl shadow-md flex flex-col"
        )}
      >
        <Assistant />
      </PopoverContent>
    </Popover>
  );
}
