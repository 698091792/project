import React from 'react'
import AutoSlideTeam from './AutoSlideTeam'
import { useLanguage } from "../context/LanguageContext";

    
const Team = () => {
    const { t } = useLanguage();
  return (
    <section id="team" className="py-20 bg-gray-100 px-4">
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-4xl font-bold text-center mb-12">{t("team")}</h2>
      <AutoSlideTeam />
    </div>
  </section>
  )
}

export default Team