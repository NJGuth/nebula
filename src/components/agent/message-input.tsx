"use client";

import { cn } from "@/lib/utils";
import { AutosizeTextarea } from "./autosize-textarea";
import { SendIcon } from "lucide-react";

export default function MessageInput({ ...props }) {
  return (
    <div className={cn("p-1 relative")}>
      <AutosizeTextarea
        maxHeight={120}
        minHeight={20}
        className={cn(
          "grow w-full h-12 rounded-xl border border-input",
          "placeholder:text-muted-foreground",
          "focus-visible:border-primary focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
        placeholder="Pirates?"
        {...props}
      />
      <button className="absolute right-2 top-7 bg-slate-200 hover:bg-blue-400 cursor-pointer rounded-md p-2 -translate-y-1/2">
        <SendIcon className="size-4" />
      </button>
    </div>
  );
}
