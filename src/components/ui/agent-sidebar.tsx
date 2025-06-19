import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "./button";

const features = [
  {
    title: "Prepare for upcoming coaching sessions",
  },
  {
    title: "Reflect on past conversations or leadership moments",
  },
  {
    title: "Draft and refine development goals",
  },
  {
    title:
      "Understand the coaching process and maximize their partnership with a human coach",
  },
];

export function AgentSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="" {...props}>
      <SidebarContent className="bg-brand-1">
        <SidebarGroup className="text-white p-5 space-y-4">
          {/* Header Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold tracking-tight ">
                <span>Meet Aiiron</span>
                <br />
                <span className="text-sm font-medium text-white/90 leading-relaxed">
                  Your AI Coaching Assistant
                </span>
              </h2>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              Where coaching science meets AI innovation. Developed with leading
              scholars and tested by world-class executive coaches to enhance
              the human coaching experience.
            </p>
          </div>

          {/* Features Section */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              Aiiron helps coachees:
            </h3>
            <div className="grid gap-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-2 text-sm font-medium bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-white/60 font-mono mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/90 leading-relaxed">
                      {feature.title}
                    </span>
                  </div>
                </div>
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
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed">
                Security is our priority. We require sign-in for safe access and
                only store your name and email to run this demo. Your
                conversations aren't saved, and all interactions use a private
                ChatGPT instance—never used for training or shared externally.
              </p>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-gradient-to-b from-brand-1 to-brand-1">
        <SignOutButton>
          <Button variant="brand">SignOut</Button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
}
