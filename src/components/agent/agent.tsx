"use client";

import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import AgentHeader from "./agent-header";
import AgentContent from "./agent-content";
import MessageInput from "./message-input";
import { AgentMessage, UserMessage } from "./message";

export default function Agent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="border w-85 h-[600px] overflow-hidden rounded-2xl shadow-md flex flex-col">
      <AgentHeader />

      <AgentContent>
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
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
      </AgentContent>
      <form onSubmit={handleSubmit}>
        <MessageInput
          value={input}
          placeholder="Enter your message here..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
