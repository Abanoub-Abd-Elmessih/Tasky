import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Logo } from "./Logo";
import { UserButton } from "@clerk/nextjs";
import { CirclePlus } from "lucide-react";
import { SIDEBAR_LINKS } from "@/constants";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link className="p-2" href={"/app/inbox"}>
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* task create button */}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-primary hover:text-primary">
                  <CirclePlus /> Add task
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Sidebar links */}
              {SIDEBAR_LINKS.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>0</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton
          showName
          appearance={{
            elements: {
              rootBox: "w-full",
              userButtonBox: "flex-row-reverse",
              userButtonTrigger:
                "p-2 hover:bg-sidebar-accent w-full duration-300 justify-start",
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};
