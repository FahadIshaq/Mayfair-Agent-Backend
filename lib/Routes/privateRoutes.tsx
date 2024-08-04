"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLocalStorageItem } from "../util";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const adminToken = getLocalStorageItem("admin");
    if (adminToken) {
      setIsUserAuthenticated(true);
    } else {
      router.push("/adminLogin");
    }
  }, [router]);

  if (!isUserAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
