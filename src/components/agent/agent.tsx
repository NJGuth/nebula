"use client";

import { useChat } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import { SendIcon, StopIcon } from "./icons";
import { AgentButton } from "./agent-button";
import AgentHeader from "./agent-header";
import AgentContent from "./agent-content";
import { AgentMessage, UserMessage } from "./message";
import { AutosizeTextarea } from "./autosize-textarea";

export default function Agent() {
  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat({
      initialMessages: [
        {
          role: "assistant",
          content:
            "Hello im Aiiron,\nI am an AI coach, here to support you between your coaching sessions. I can help you prepare for sessions, reflect on your coaching, craft development goals and more, get started by letting me know what you need!",
          id: "initial",
        },
      ],
    });
  return (
    <div className="border w-85 h-[600px] overflow-hidden rounded-2xl shadow-md flex flex-col">
      <AgentHeader />

      <AgentContent>
        <div className="flex flex-col gap-4 p-3 w-85">
          {messages.map((message) => (
            <div key={message.id} className="whitespace-pre-wrap break-words">
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case "text":
                    return message.role === "user" ? (
                      <UserMessage
                        key={`${message.id}-${i}`}
                        message={part.text}
                      />
                    ) : (
                      <AgentMessage
                        key={`${message.id}-${i}`}
                        message={part.text}
                      />
                    );

                  default:
                    return null;
                }
              })}
            </div>
          ))}
        </div>
      </AgentContent>

      {/* {(status === "submitted" || status === "streaming") && (
        <div>
          {status === "submitted" && <p>Submitted</p>}
          {status === "streaming" && <p>Streaming</p>}
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )} */}
      <div className={cn("px-2 pb-2 space-y-1 ")}>
        <div className=" border rounded-md has-focus:border-blue-700 has-hover:border-blue-700  overflow-hidden peer-focus:ring-2 peer-focus-visible:ring-blue-500/40">
          <form onSubmit={handleSubmit}>
            <AutosizeTextarea
              value={input}
              placeholder="Enter your message here..."
              onChange={handleInputChange}
              className={cn(
                "p-3 ",
                "placeholder:text-slate-500 peer",
                " focus-visible:outline-none",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
            />

            <div className="flex justify-end p-1 gap-2">
              <AgentButton
                variant="submit"
                type="submit"
                disabled={!input && status !== "streaming"}
                onClick={
                  status === "streaming" || status === "submitted"
                    ? () => stop()
                    : undefined
                }
              >
                {status === "streaming" ? <StopIcon /> : <SendIcon />}
              </AgentButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
