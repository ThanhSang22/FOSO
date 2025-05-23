"use client";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import React from "react";

const App = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default App;
