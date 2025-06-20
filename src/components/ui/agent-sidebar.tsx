"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "./button";
import { useAgent } from "../agent/agent-provider";

const features = [
  {
    title: "Can you help me prioritize my overwhelming workload.",
  },
  {
    title:
      "Can you help me think through the best way to give my colleague feedback?",
  },
  {
    title: "I'd like to work on a goal in my Strategic Development Plan",
  },
  {
    title: "I'd like to prepare for an upcoming session with my coach",
  },
  {
    title:
      "I'm having trouble with a relationship at work and need to figure out a way forward",
  },
];

export function AgentSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { submitMessageFromSidebar, status } = useAgent();

  const handleFeatureClick = (feature: string) => {
    submitMessageFromSidebar(feature);
  };

  return (
    <Sidebar className="" {...props} variant="sidebar" side="left">
      <SidebarContent className="bg-brand-1 pl-1 w-full">
        <SidebarGroup className="text-white p-5 space-y-4">
          {/* Header Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold tracking-tight ">
                <span>Meet Aiiron</span>
                <br />
              </h2>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Aiiron can provide real-time coaching to generate insight, help
              you problem solve, or help you get unstuck. It can be the perfect
              complement to your human coaching experience. Here are a few
              example prompts you can use to get started:
            </p>
          </div>

          {/* Features Section */}
          <div className="space-y-3 border-t border-white/20 pt-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              Try these prompts:
            </h3>
            <div className="grid gap-2">
              {features.map((feature, index) => (
                <button
                  onClick={() => handleFeatureClick(feature.title)}
                  disabled={status === "in_progress"}
                  key={feature.title}
                  className="group p-2 text-sm cursor-pointer font-medium bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] text-white/90  items-start leading-4.5"
                >
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          {/* Data Protection Section */}
          <div className="space-y-3 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">
                Data Protection
              </h3>
            </div>
            <div className=" p-2 rounded-lg border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed">
                Security is our priority. Your conversations aren&apos;t saved,
                and all interactions use a private ChatGPT instance—never used
                for training or shared externally.
              </p>
            </div>
          </div>
          <SignOutButton>
            <Button variant="brand">SignOut</Button>
          </SignOutButton>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
