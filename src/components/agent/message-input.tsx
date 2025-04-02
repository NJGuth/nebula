"use client";

import { cn } from "@/lib/utils";
import { AutosizeTextarea } from "./autosize-textarea";

export default function MessageInput({ ...props }) {
  return (
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
  );
}
