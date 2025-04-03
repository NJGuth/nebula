"use client";

import { Message, useAssistant } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import AgentContent from "./agent-content";
import { AutosizeTextarea } from "./autosize-textarea";
import { AgentButton } from "./agent-button";
import {
  SendIcon,
  StopIcon,
  AiironSprite,
  HelpIcon,
  NewChatIcon,
} from "./icons";
import { useEffect, useState } from "react";

export default function Assistant() {
  // useAssistant hook to create a new assistant
  const { status, messages, input, submitMessage, handleInputChange, stop } =
    useAssistant({
      api: "/api/assistant",
    });

  // create a new threadID when chat component created
  const [threadId, setThreadId] = useState("");
  useEffect(() => {
    const createThread = async () => {
      const res = await fetch(`/api/threads`, {
        method: "POST",
      });
      const data = await res.json();
      setThreadId(data.threadId);
      // Reset messages when new thread is created
      setThreadMessages([]);
    };
    createThread();
  }, []);

  // Create local message store, to store messages in the thread
  const [threadMessages, setThreadMessages] = useState<Message[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitMessage(e);

    // Add user message to thread messages
    setThreadMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content: input,
        role: "user",
        threadId,
      },
    ]);
    console.log("Message sent:", { content: input, threadId });
  };

  // to:do: store messages in db with threadId + User ID
  console.log(threadMessages, "threadMessages");

  return (
    <div className="relative">
      <p className="absolute -top-10 left-0">Thread ID: {threadId}</p>
      <div className="border w-[500px] h-[800px] overflow-hidden rounded-2xl shadow-md flex flex-col">
        {/* Assistant Header */}
        <div className="p-3 flex justify-between items-center gap-1">
          <div className="flex flex-1 items-center gap-1">
            <AiironSprite className="size-7" />

            <span className="font-bold text-blue-950 select-none">Aiiron</span>
          </div>
          <AgentButton>
            <HelpIcon />
          </AgentButton>
          <AgentButton
            onClick={() => {
              const createThread = async () => {
                const res = await fetch(`/api/threads`, {
                  method: "POST",
                });
                const data = await res.json();
                setThreadId(data.threadId);
                // Reset messages when new thread is created
                setThreadMessages([]);
              };
              createThread();
            }}
          >
            <NewChatIcon />
          </AgentButton>
        </div>

        {/* Assistant Content */}
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

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="px-2 pb-2 ">
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
    </div>
  );
}
