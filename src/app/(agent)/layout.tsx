import { AgentSidebar } from "@/components/ui/agent-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AgentSidebar />
      <SidebarInset className="h-svh overflow-hidden">
        <div className="relative bg-white h-svh">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
