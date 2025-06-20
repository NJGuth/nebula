import { AgentSidebar } from "@/components/ui/agent-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AgentProvider } from "@/components/agent/agent-provider";

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AgentProvider>
      <SidebarProvider>
        <div className="flex h-screen w-screen ">
          <AgentSidebar className="w-[300px] hidden md:flex" />
          <SidebarInset className="flex-1 overflow-auto">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AgentProvider>
  );
}
