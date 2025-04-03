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
import { TrashIcon, Dot } from "lucide-react";
import { useEffect, useState } from "react";

export default function Assistant() {
  // useAssistant hook to create a new assistant
  const {
    status,
    messages,
    input,
    submitMessage,
    handleInputChange,
    stop,
    setMessages,
  } = useAssistant({
    api: "/api/assistant",
    onError(error) {
      console.error("Error:", error);
    },
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
      setMessages([
        {
          id: "welcome-message",
          role: "system",
          content:
            "Hi i'm Aiiron\n\nI am an AI coach, here to support you between your coaching sessions.\n\n\n\nI can help you prepare for sessions, reflect on your coaching, craft development goals and more, get started by letting me know what you need!",
        },
      ]);
    };
    createThread();
  }, []);

  // handle delete of a single message
  // const handleDelete = (id: string) => {
  //   setMessages(messages.filter((message) => message.id !== id));
  // };

  // handle creating a new thread
  const handleNewThread = async () => {
    const res = await fetch(`/api/threads`, {
      method: "POST",
    });
    const data = await res.json();
    setThreadId(data.threadId);
    // Reset messages when new thread is created
    setMessages([
      {
        id: "welcome-message",
        role: "system",
        content:
          "Hi i'm Aiiron\n\nI am an AI coach, here to support you between your coaching sessions.\n\n\n\nI can help you prepare for sessions, reflect on your coaching, craft development goals and more, get started by letting me know what you need!",
      },
    ]);
  };

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
          <AgentButton onClick={handleNewThread}>
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
              {/* <AgentButton variant="default" onClick={() => handleDelete(m.id)}>
                <TrashIcon />
              </AgentButton> */}
            </div>
          ))}
        </AgentContent>

        {/* Form Input */}
        <form onSubmit={submitMessage} className="px-2 pb-2 ">
          <div className="flex gap-2 items-center border rounded-md relative overflow-hidden">
            {status === "in_progress" && (
              <div className="p-3 bg-white  absolute inset-0 flex items-center z-10">
                <div className="justify-left flex space-x-1">
                  <div className="flex -space-x-2.5">
                    <Dot className="h-5 w-5 1.25s animate-bounce ease-out infinite" />
                    <Dot className="h-5 w-5 1.25s animate-bounce ease-out infinite [animation-delay:90ms]" />
                    <Dot className="h-5 w-5 1.25s animate-bounce ease-out infinite [animation-delay:180ms]" />
                  </div>
                </div>
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
