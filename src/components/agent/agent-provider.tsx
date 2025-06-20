"use client";

import { useAssistant } from "@ai-sdk/react";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { AssistantStatus } from "ai";

type AgentContextType = {
  status: AssistantStatus;
  messages: any[];
  input: string;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  submitMessage: (e?: React.FormEvent<HTMLFormElement>) => void;
  stop: () => void;
  error: Error | undefined;
  threadId: string | null;
  setMessages: (messages: any[]) => void;
  handleNewChat: () => Promise<void>;
  submitMessageFromSidebar: (message: string) => void;
};

const AgentContext = createContext<AgentContextType | undefined>(undefined);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [messageToSubmit, setMessageToSubmit] = useState<string | null>(null);

  const {
    status,
    messages,
    input,
    handleInputChange,
    submitMessage,
    stop,
    error,
    setMessages,
    setInput,
  } = useAssistant({
    api: "/api/assistant",
    threadId: threadId ?? undefined,
  });

  const handleNewChat = useCallback(async () => {
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
  }, [setMessages]);

  useEffect(() => {
    if (!threadId) {
      handleNewChat();
    }
  }, [threadId, handleNewChat]);

  const submitMessageFromSidebar = (message: string) => {
    setInput(message);
    setMessageToSubmit(message);
  };

  useEffect(() => {
    if (messageToSubmit && input === messageToSubmit) {
      submitMessage();
      setMessageToSubmit(null);
    }
  }, [input, messageToSubmit, submitMessage]);

  return (
    <AgentContext.Provider
      value={{
        status,
        messages,
        input,
        handleInputChange,
        submitMessage,
        stop,
        error,
        threadId,
        setMessages,
        handleNewChat,
        submitMessageFromSidebar,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
}

export const useAgent = () => {
  const context = useContext(AgentContext);
  if (context === undefined) {
    throw new Error("useAgent must be used within an AgentProvider");
  }
  return context;
};
