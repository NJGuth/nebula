import { AgentButton } from "./agent-button";
import { NewChatIcon, AiironSprite, HelpIcon } from "./icons";

export default function AgentHeader() {
  return (
    <div className="p-3 flex justify-between items-center gap-1">
      <div className="flex flex-1 items-center gap-1">
        <AiironSprite className="size-7" />

        <span className="font-bold text-blue-950 select-none">Aiiron</span>
      </div>
      <AgentButton>
        <HelpIcon />
      </AgentButton>
      <AgentButton>
        <NewChatIcon />
      </AgentButton>
    </div>
  );
}
