"use client";
import { useEffect, useRef, useState } from "react";
import { PromptInput, PromptInputTextarea } from "@/components/ai/prompt-input";
import { Message, MessageContent } from "@/components/ai/message";
import { ChatContainer } from "@/components/ai/chat-container";
import { useAssistant } from "@ai-sdk/react";
import AiironSprite from "@/components/ai/AiironSprite";
import { SendButton } from "@/components/agent/send-button";
import { Loader } from "@/components/ai/loader";
import { cn } from "@/lib/utils";
import { MessageCirclePlus } from "lucide-react";
import { AgentButton } from "@/components/agent/agent-button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DemoPage() {
  // Initialize AI SDK
  const {
    messages,
    input,
    handleInputChange,
    submitMessage,
    status,
    stop,
    setMessages,
  } = useAssistant({
    api: "/api/assistant",
  });

  const [threadId, setThreadId] = useState<string | null>(null);

  const handleNewChat = async () => {
    try {
      const res = await fetch("/api/threads", {
        method: "POST",
      });
      const data = await res.json();
      setThreadId(data.threadId);
      setMessages([
        {
          id: "welcome-message",
          role: "assistant",
          content:
            "Hi, I'm Aiiron! I am an AI coach, here to support you between your coaching sessions. I can help you prepare for sessions, reflect on your coaching, craft development goals, and more. Get started by letting me know what you need!",
        },
      ]);
    } catch (error) {
      console.error("Error creating new thread:", error);
    }
  };

  // Create initial thread on mount
  useEffect(() => {
    if (!threadId) {
      handleNewChat();
    }
  }, []);

  //Push to bottom when new message enter
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden">
      <div className=" w-full  bg-background  overflow-hidden h-[calc(100vh)]  my-auto flex flex-col">
        <header className="flex items-center justify-between px-3 py-3 border-b h-15">
          <div className="block md:hidden">
            <SidebarTrigger />
          </div>
          <div className="flex items-center gap-3">
            <AiironSprite className="size-6 ml-0.5" />

            <h1 className="text-lg text-brand-1 font-bold">Aiiron</h1>
          </div>

          <AgentButton
            variant="newthread"
            onClick={handleNewChat}
            disabled={!messages.some((m) => m.role === "user")}
          >
            <span className="text-xs font-medium">New</span>
            <MessageCirclePlus />
          </AgentButton>
        </header>
        <ChatContainer
          className="flex-1 py-4"
          ref={containerRef}
          scrollToRef={bottomRef}
          autoScroll={true}
        >
          {messages.map((message) => (
            <Message key={message.id} role={message.role}>
              {/* {message.role === "assistant" && (
                <MessageAvatar src="" alt="Aiiron">
                  <AiironSprite />
                </MessageAvatar>
              )} */}
              <MessageContent>{message.content}</MessageContent>
            </Message>
          ))}
        </ChatContainer>

        <div className="px-3 pb-3">
          <PromptInput onSubmit={submitMessage} value={input}>
            <PromptInputTextarea
              value={input}
              onChange={handleInputChange}
              autoFocus
              disabled={status === "in_progress"}
              className={cn("pr-12", status === "in_progress" && "opacity-0")}
              placeholder={
                status === "in_progress" ? "Thinking..." : "Ask Aiiron..."
              }
            />
            {status === "in_progress" && (
              <div className="absolute left-3.5 bg-background top-4 min-w-15 text-primary">
                <Loader
                  variant="loading-dots"
                  className="animate-pulse"
                  text="Thinking.."
                />
              </div>
            )}

            <div className="absolute right-2.5 top-3">
              <SendButton
                status={status}
                stop={stop}
                handleSubmit={() => submitMessage()}
                input={input}
              />
            </div>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}
