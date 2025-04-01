import AgentWindow from "@/components/agent/agent-window";
import MessageInput from "@/components/agent/message-input";
import { AutosizeTextarea } from "@/components/test-2";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-center h-screen relative">
      <div
        className={cn(
          "border w-75 h-[500px] overflow-hidden rounded-2xl shadow-md flex flex-col"
        )}
      >
        <div className="flex-1 bg-slate-100"></div>

        <MessageInput />
      </div>
    </div>
  );
}
