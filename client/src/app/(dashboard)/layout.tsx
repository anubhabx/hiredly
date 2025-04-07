import DashboardNavbar from "@/components/shared/DashboardNavbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center relative min-h-screen w-full">
      <div className="absolute top-0 left-0 px-4 md:px-32 py-4 w-full">
        <DashboardNavbar />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
