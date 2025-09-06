import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { routes } from "./routes";
import { Link } from "react-router"; // react-router link
// import userIcon from "@/assets/images/user-icon.svg";
const SidebarMain = () => {
  return (
    <Sidebar className="pt-[100px]">
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => {
            if (route.children && route.children.length > 0) {
              return (
                <Collapsible key={route.name}>
                  <SidebarGroup>
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-red-400">
                        <span className="text-black text-sm font-normal flex gap-2">
                          <img src={route.icon} alt="" style={{ width: "20px" }}  />
                          {route.name}
                        </span>
                        <ChevronDown className="ml-2 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarMenu>
                        {route.children.map((child) => (
                          <SidebarMenuItem key={child.name}>
                            <SidebarMenuButton asChild>
                              <Link to={child.path || "#"}>{child.name}</Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </CollapsibleContent>
                  </SidebarGroup>
                </Collapsible>
              );
            }

            return (
              <SidebarMenuItem key={route.name}>
                <SidebarMenuButton asChild>
                  <Link
                    className="text-black text-sm p-4 flex gap-2"
                    to={route.path || "#"}
                  >
                    <img src={route.icon} alt="" style={{ width: "20px" }} />
               
                    <span>{route.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarMain;
