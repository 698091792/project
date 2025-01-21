import React from "react";
import { Users, Target, Building2} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Vision from "./Vision";

const Mission = () => {
    const { t } = useLanguage();
  return (
    <div className="flex flex-col">
       <section id="mission" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t("mission")}</h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto ">
          {t("mission1")}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg hover:shadow-gray-900 shadow-md hover:shadow-lg transition-transform duration-500 hover:scale-105">
            <div className="text-yellow-600 mb-4">
              <Target className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {t("impact")}
            </h3>
            <p className="text-gray-600 text-center">{t("ImpactDesc")}</p>
          </div>
          <div className="group bg-white p-6 rounded-lg hover:shadow-gray-900 shadow-md hover:shadow-lg transition-transform duration-500 hover:scale-105">
            <div className="text-yellow-600 mb-4">
              <Users className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {t("innovate")}
            </h3>
            <p className="text-gray-600 text-center">{t("InnovateDesc")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg hover:shadow-gray-900 shadow-md hover:shadow-lg transition-transform duration-500 hover:scale-105">
            <div className="text-yellow-600 mb-4">
              <Building2 className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {t("grow")}
            </h3>
            <p className="text-gray-600 text-center">{t("GrowDesc")}</p>
          </div>
        </div>
      </div>
    </section>
     <Vision/>
      
    </div>
   
  );
};

export default Mission;
