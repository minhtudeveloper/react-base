import { ReactNode } from "react";
import { AuthProvider } from "./auth/index.state";
import { StateGlobalProvider } from "./global/index.state";

const StatesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StateGlobalProvider>
      <AuthProvider>{children}</AuthProvider>
    </StateGlobalProvider>
  );
};

export default StatesProvider;
