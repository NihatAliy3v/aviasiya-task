import { Outlet } from "react-router";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    Help
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <SidebarGroupContent>
                  <SidebarMenu>
                    {[
                      { title: "assdgsdg", icon: "fasfasaf", url: "dssdh" },
                      { title: "assdgsdg", icon: "fasfasaf", url: "dssdh" },
                      { title: "assdgsdg", icon: "fasfasaf", url: "dssdh" },
                      { title: "assdgsdg", icon: "fasfasaf", url: "dssdh" },
                    ].map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </Collapsible>
          </SidebarContent>
        </Sidebar>
        <SidebarTrigger />

        <Outlet />
      </SidebarProvider>
      <Footer />
    </>
  );
};
