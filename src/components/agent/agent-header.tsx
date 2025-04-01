import { AgentButton } from "./agent-button";
import { NewChatIcon } from "./icons";
import AiironSprite from "./icons/aiiron-sprite";

export default function AgentHeader() {
  return (
    <div className="p-3 flex justify-between items-center  ">
      <div className="flex items-center gap-1">
        <AiironSprite className="size-7" />

        <span className="font-bold text-blue-950 select-none">Aiiron</span>
      </div>

      <AgentButton>
        <NewChatIcon />
      </AgentButton>
    </div>
  );
}
