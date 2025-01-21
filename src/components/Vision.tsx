import React from 'react'
import { useLanguage } from "../context/LanguageContext";

    
const Vision = () => {
    const { t } = useLanguage();
  return (
    <section id="vision" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("vision")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">{t("ourVision")}</h3>
              <p className="text-lg">{t("visionText")}</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">{t("ourGoals")}</h3>
              <ul className="space-y-2">
                <li className="before:content-['✔'] before:mr-2 before:text-green-400">
                  Deliver exceptional value to our clients
                </li>
                <li className="before:content-['✔'] before:mr-2 before:text-green-400">
                  Foster innovation and creativity
                </li>
                <li className="before:content-['✔'] before:mr-2 before:text-green-400">
                  Build lasting partnerships
                </li>
                <li className="before:content-['✔'] before:mr-2 before:text-green-400">
                  Contribute to technological advancement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Vision