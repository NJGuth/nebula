"use client";

import { cn } from "@/lib/utils";
import { AutosizeTextarea } from "./autosize-textarea";
import SendIcon from "./icons/send-icon";
import { AttachIcon } from "./icons";

export default function MessageInput({ ...props }) {
  return (
    <div className={cn("p-2 space-y-1 ")}>
      <div className=" border rounded-md overflow-hidden ">
        <AutosizeTextarea
          maxHeight={120}
          minHeight={20}
          className={cn(
            "p-2 ",
            "placeholder:text-muted-foreground ",
            "focus-visible:border-none focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          placeholder="Pirates?"
          {...props}
        />
        <div className="flex justify-end p-1 gap-2">
          <button className="size-9 flex items-center justify-center  rounded-sm">
            <AttachIcon className="size-6" />
          </button>
          <button className="size-9 flex items-center justify-center rounded-sm">
            <SendIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
