import React from 'react'
import TechAnimation from './TechAnimation'
import { useLanguage } from "../context/LanguageContext";
import Accomplishments from "./Accomplishments";
import Testimonials from "./Testimonials";
   
const About = () => {
    const { t } = useLanguage();
  return (
    <div>
       <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t("about")}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="md:text-lg text-md max-w-xl text-gray-600 mb-6 text-justify">{t("aboutText")}</p>
              <TechAnimation />
            </div>
            <div className="grid md:grid-cols-2 gap-4 ">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">30+</h4>
                <p className="text-gray-600">{t("e")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">5+</h4>
                <p className="text-gray-600">{t("c")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">10+</h4>
                <p className="text-gray-600">{t("p")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">10+</h4>
                <p className="text-gray-600">{t("t")}</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Accomplishments/>
      <Testimonials/>
    </div>
   
  )
}

export default About