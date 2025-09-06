import { Outlet } from "react-router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarMain from "@/components/layout/Sidebar";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <SidebarProvider className="">
        <SidebarMain />
        <main className="pt-[48px]">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
      <Footer />
    </>
  );
};
