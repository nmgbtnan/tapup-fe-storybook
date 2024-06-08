"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, isNotAuthenticated } from "./useToken";

const IsAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    isAuthenticated(router);
  }, []);
  return <>{children}</>;
};

const IsNotAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    isNotAuthenticated(router);
  }, []);
  return <>{children}</>;
};

export { IsAuth, IsNotAuth };
