import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default function AgentContent() {
  return (
    <ScrollArea className="flex-1 flex flex-col-reverse  bg-white overflow-y-auto">
      <div className="flex flex-col gap-4 p-4">
        {/* Bot greeting message */}
        <div className="flex gap-2">
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
            <p>Hi there! How can I help you today?</p>
          </div>
        </div>

        {/* User message */}
        <div className="flex gap-2 justify-end">
          <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[80%]">
            <p>Im looking for information about pirates!</p>
          </div>
        </div>

        {/* Bot response */}
        <div className="flex gap-2">
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
            <p>
              Pirates were seafaring outlaws who roamed the oceans from the 16th
              to 19th centuries. Would you like to know about famous pirates,
              their ships, or their way of life?
            </p>
          </div>
        </div>

        {/* User follow-up */}
        <div className="flex gap-2 justify-end">
          <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[80%]">
            <p>Tell me about famous pirates!</p>
          </div>
        </div>

        {/* Bot detailed response */}
        <div className="flex gap-2">
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
            <p>
              Some of the most famous pirates include Blackbeard (Edward Teach),
              who terrorized the Caribbean, Anne Bonny, one of the most
              notorious female pirates, and Bartholomew Roberts, who captured
              over 400 ships in his career. Would you like to learn more about
              any of them specifically?
            </p>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
