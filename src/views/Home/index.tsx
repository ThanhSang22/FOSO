"use client";

import ProductCard from "@/components/Card";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <p className="text-xl text-center text-pink-800">{t("title")}</p>
      <p className="text-xl text-center text-pink-800">{t("welcome")}</p>
      <Header />

      <ProductCard
        image="/images/product1.png"
        title="Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer"
        price={299000}
        originalPrice={329000}
        discount={10}
        isHotDeal={true}
      />
    </div>
  );
};

export default Home;
