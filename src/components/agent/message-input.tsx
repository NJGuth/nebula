"use client";

import { cn } from "@/lib/utils";
import { AutosizeTextarea } from "./autosize-textarea";
import { HelpIcon, SendIcon } from "./icons";
import { AgentButton } from "./agent-button";

export default function MessageInput({ ...props }) {
  return (
    <div className={cn("px-2 pb-2 space-y-1 ")}>
      <div className=" border rounded-md has-focus:border-blue-700 has-hover:border-blue-700  overflow-hidden peer-focus:ring-2 peer-focus-visible:ring-blue-500/40">
        <AutosizeTextarea
          maxHeight={120}
          minHeight={20}
          className={cn(
            "p-3 ",
            "placeholder:text-slate-500 peer",
            " focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          placeholder="What do you want to talk about?"
          onKeyDown={(e) => {
            if (e.key === "Return" && !e.shiftKey) {
              e.preventDefault();
              if (props.value) {
                props.onSubmit?.(e);
              }
            }
          }}
          {...props}
        />
        <div className="flex justify-between p-1 gap-2">
          <AgentButton>
            <HelpIcon />
          </AgentButton>
          <AgentButton variant="submit" disabled={!props.value} type="submit">
            <SendIcon />
          </AgentButton>
        </div>
      </div>
    </div>
  );
}
