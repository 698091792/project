import React from "react";
import { useLanguage } from "../context/LanguageContext";
import logo from '../assets/logo.jpeg' 
import img1 from '../assets/img1.jpeg'
import jj from  "../assets/jj.jpeg";
import stiven1 from "../assets/stiven1.jpeg";

const Accomplishments = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gray-900 px-4 ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          Accomplishments
        </h2>
        <div className="relative">
          {/* Sliding Container */}
          <div
            className="flex overflow-x-scroll space-x-8 transition-transform duration-500 hide-scrollbar"
            style={{
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For IE 10+
            }}
          >
            {/* Accomplishment 1 */}
            <div
              
              className="bg-white/10 h-fixed p-6 rounded-lg shadow-lg flex-shrink-0 min-w-[300px] hover:shadow-xl  transform transition-transform duration-300 hover:scale-105 max-w-xl"
            >
              <img
                src={logo}
                alt="Award Image 1"
                className="h- w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mentor Guru</h3>
              <p className="text-white">{t("m")}</p>
            </div>
            {/* Accomplishment 2 */}
            <div
              
              className="bg-white/10 p-6 h-fixed rounded-lg shadow-lg flex-shrink-0 min-w-[300px] hover:shadow-xl  transform transition-transform duration-300 hover:scale-105 max-w-xl"
            >
              <img
                src={img1}
                alt="Award Image 1"
                className="h-96 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Training</h3>
              <p className="text-white">{t("bbb")}</p>
            </div>
            {/* Accomplishment 3 */}
            <div
              
              className="bg-white/10 h-fixed p-6 rounded-lg shadow-lg flex-shrink-0 min-w-[300px] hover:shadow-xl  transform transition-transform duration-300 hover:scale-105 max-w-xl"
            >
              <img
                src={jj}
                alt="Award Image 1"
                className="h-96 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Competition</h3>
              <p className="text-white">{t("bb")}</p>
            </div>

            {/* Accomplishment 4 */}
            <div
              
              className="bg-white/10 p-6 h-fixed rounded-lg shadow-lg flex-shrink-0 min-w-[300px] hover:shadow-xl  transform transition-transform duration-300 hover:scale-105 max-w-xl"
            >
              <img
                src={stiven1}
                alt="Award Image 1"
                className="h- w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Partnership Stiven</h3>
              <p className="text-white ">{t("bbbb")}</p>

            </div>
            
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
            onClick={() => {
              document.querySelector(".overflow-x-scroll").scrollBy({
                left: -300,
                behavior: "smooth",
              });
            }}
          >
            &#10094;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
            onClick={() => {
              document.querySelector(".overflow-x-scroll").scrollBy({
                left: 300,
                behavior: "smooth",
              });
            }}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
