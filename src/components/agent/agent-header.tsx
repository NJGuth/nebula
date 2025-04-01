import { AgentButton } from "./agent-button";
import { NewChatIcon } from "./icons";

export default function AgentHeader() {
  return (
    <div className="p-3 flex justify-between items-center  ">
      <div className="flex items-center gap-2">
        <div className="size-8 bg-blue-700 rounded-full"></div>
        <span className="font-bold text-blue-600">Aiiron</span>
      </div>

      <AgentButton>
        <NewChatIcon />
      </AgentButton>
    </div>
  );
}
