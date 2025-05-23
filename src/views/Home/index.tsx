"use client";

import Header from "@/components/Header";
import { Nav } from "@/components/Nav";
import { useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <p className="text-xl text-center text-pink-800">{t("title")}</p>
      <p className="text-xl text-center text-pink-800">{t("welcome")}</p>
      <Header />
    </div>
  );
};

export default Home;
