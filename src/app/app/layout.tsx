import { AppSidebar } from "@/components";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={500} disableHoverableContent>
        <AppSidebar />
        <SidebarTrigger />
        <main>{children}</main>
      </TooltipProvider>
    </SidebarProvider>
  );
}
