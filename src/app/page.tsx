import Agent from "@/components/agent/agent";
import Assistant from "@/components/agent/assistant";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-center h-screen relative">
      {/* <Agent /> */}
      <Assistant />
    </div>
  );
}
