"use client";

import { Message, useAssistant } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import AgentHeader from "./agent-header";
import AgentContent from "./agent-content";
import { AutosizeTextarea } from "./autosize-textarea";
import { AgentButton } from "./agent-button";
import { SendIcon, StopIcon } from "./icons";

export default function Assistant() {
  const { status, messages, input, submitMessage, handleInputChange, stop } =
    useAssistant({ api: "/api/assistant" });

  return (
    <div className="border w-85 h-[600px] overflow-hidden rounded-2xl shadow-md flex flex-col">
      <AgentHeader />
      <AgentContent>
        {messages.map((m: Message) => (
          <div key={m.id}>
            <div
              className={cn("flex ", {
                "justify-end": m.role === "user",
                "justify-start": m.role === "assistant",
              })}
            >
              <div
                className={cn(
                  "text-white break-words break-all rounded-lg p-3 max-w-[90%]",
                  m.role === "user"
                    ? "bg-gray-100 text-slate-900"
                    : "bg-blue-600"
                )}
              >
                {m.role !== "data" && m.content}
              </div>
            </div>
          </div>
        ))}
      </AgentContent>

      <form onSubmit={submitMessage} className="px-2 pb-2 ">
        <div className="flex gap-2 items-center border rounded-md relative overflow-hidden">
          {status === "in_progress" && (
            <div className="p-3 bg-white  absolute inset-0 flex items-center z-10">
              <p className="text-blue-600 animate-pulse">Thinking...</p>
            </div>
          )}
          <AutosizeTextarea
            maxHeight={120}
            minHeight={56}
            className="py-6.5 pl-3.5 pr-15 text-base disabled:animate-"
            disabled={status !== "awaiting_message"}
            value={input}
            placeholder="Enter your message..."
            onChange={handleInputChange}
          />
          <AgentButton
            disabled={status === "awaiting_message" && !input}
            variant="submit"
            className={cn("absolute right-3 top-5 group z-20", {
              "bg-red-100  text-red-500 hover:bg-red-200 hover:text-red-600":
                status !== "awaiting_message",
            })}
            onClick={() => {
              if (status === "awaiting_message") {
                submitMessage();
              } else {
                stop();
              }
            }}
          >
            {status === "awaiting_message" ? <SendIcon /> : <StopIcon />}
          </AgentButton>
        </div>
      </form>
    </div>
  );
}
