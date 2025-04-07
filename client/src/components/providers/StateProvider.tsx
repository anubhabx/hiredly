import StoreProvider from "@/state/redux";
import React from "react";
import { AuthProvider } from "./AuthProvider";

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AuthProvider>{children}</AuthProvider>
    </StoreProvider>
  );
};

export default StateProvider;
