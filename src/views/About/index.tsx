import { Content } from "@/components/Content";
import React from "react";
import { useTranslations } from "next-intl";
import Sections from "@/components/Sections";

const AboutUs = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <p className="text-xl text-center text-pink-800">{t("title")}</p>
      <p className="text-xl text-center text-pink-800">{t("welcome")}</p>
      <Sections />
      <Content />
    </div>
  );
};

export default AboutUs;
