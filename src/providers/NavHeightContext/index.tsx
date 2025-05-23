"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavHeightContextType {
  navHeight: number;
  navBreadcrumbHeight: number;
  setNavHeight: (height: number) => void;
}

const NavHeightContext = createContext<NavHeightContextType | undefined>(undefined);

export const NavHeightProvider = ({ children }: { children: ReactNode }) => {
  const [navHeight, setNavHeight] = useState<number>(0);
  const navBreadcrumbHeight = navHeight;

  return (
    <NavHeightContext.Provider value={{ navHeight, setNavHeight, navBreadcrumbHeight }}>
      {children}
    </NavHeightContext.Provider>
  );
};

export const useNavHeight = () => {
  const context = useContext(NavHeightContext);
  if (!context) {
    throw new Error("useNavHeight must be used within a NavHeightProvider");
  }
  return context;
};