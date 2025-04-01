"use client";

import { cn } from "@/lib/utils";
import { AutosizeTextarea } from "./autosize-textarea";
import SendIcon from "./icons/send-icon";
import { AttachIcon } from "./icons";
import { AgentButton } from "./agent-button";

export default function MessageInput({ ...props }) {
  return (
    <div className={cn("px-2 pb-2 space-y-1 ")}>
      <div className=" border rounded-md has-focus:border-blue-700 has-hover:border-blue-700  overflow-hidden peer-focus:ring-2 peer-focus-visible:ring-blue-500/40">
        <AutosizeTextarea
          maxHeight={120}
          minHeight={20}
          className={cn(
            "p-2 ",
            "placeholder:text-muted-foreground peer",
            " focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          placeholder="Pirates?"
          {...props}
        />
        <div className="flex justify-end p-1 gap-2">
          <AgentButton>
            <AttachIcon />
          </AgentButton>
          <AgentButton>
            <SendIcon />
          </AgentButton>
        </div>
      </div>
    </div>
  );
}
