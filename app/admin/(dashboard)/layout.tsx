import Header from "@/components/admin/layout/header";
import Sidebar from "@/components/admin/layout/sidebar";
import type { Metadata } from "next";
import "../../globals.css";
import PrivateRoute from "@/lib/Routes/privateRoutes";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateRoute>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </PrivateRoute>
  );
};

export default DashboardLayout;
