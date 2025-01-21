import React from "react";
import AutoSlideTestimonials from "./AutoSlideTestimonials";
import { useLanguage } from "../context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t("test")}</h2>
        <AutoSlideTestimonials />
      </div>
    </section>
  );
};

export default Testimonials;
