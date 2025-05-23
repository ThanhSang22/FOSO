"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import React from "react";

const App = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default App;
