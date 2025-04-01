function AgentMessage({ message }: { message: string }) {
  return (
    <div className="flex gap-2">
      <div className="bg-gray-100 rounded-lg p-3 max-w-[90%]">
        <p>{message}</p>
      </div>
    </div>
  );
}

function UserMessage({ message }: { message: string }) {
  return (
    <div className="flex gap-2 justify-end">
      <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[90%]">
        <p>{message}</p>
      </div>
    </div>
  );
}

export { AgentMessage, UserMessage };
