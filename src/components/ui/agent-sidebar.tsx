import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "./button";

export function AgentSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="" {...props}>
      <SidebarContent className="bg-gradient-to-b from-brand-3 to-brand-1">
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="bg-gradient-to-b from-brand-1 to-brand-1">
        <SignOutButton>
          <Button variant="brand">SignOut</Button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
}
