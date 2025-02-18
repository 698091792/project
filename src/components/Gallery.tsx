import React from "react";

import ContactForm from "../components/ContactForm";
import AutoSlideGallery from "./AutoSlideGallery";
import stiven1 from "../assets/stiven1.jpeg";

import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import linkedin from "../assets/linkedin.png";
import face from "../assets/face.png";
import insta from "../assets/insta.png";
import aa from  "../assets/aa.jpeg";
import bbb from  "../assets/bbb.jpeg";
import cc from  "../assets/cc.jpeg";
import dd from  "../assets/dd.jpeg";
import ee from  "../assets/ee.jpeg";
import ff from  "../assets/ff.jpeg";
import gg from  "../assets/gg.jpeg";
import hh from  "../assets/hh.jpeg";
import ii from  "../assets/ii.jpeg";
import jj from  "../assets/jj.jpeg";
import { useLanguage } from "../context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

const Gallery = () => {
  const galleryImages = [
    { src: stiven1, alt: "Office" },
    {
      src: img2,
      alt: "Team Working",
    },    {
      src: img3,
      alt: "Meeting",},{  src: img4,alt: "Meeting",},
    {
      src: img5,
      alt: "Meeting",
    },
    {
      src: aa,
      alt: "Meeting",
    },
    
    {
      src: cc,
      alt: "Meeting",
    },
    {
      src: dd,
      alt: "Meeting",
    },
    {
      src: ee,
      alt: "Meeting",
    },
    {
      src: ff,
      alt: "Meeting",
    },
    {
      src: gg,
      alt: "Meeting",
    },
    {
      src: hh,
      alt: "Meeting",
    },
    {
      src: ii,
      alt: "Meeting",
    },
    {
      src: jj,
      alt: "Meeting",
    },
  ];
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-xl  mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("gallery")}
          </h2>
          <AutoSlideGallery slide={galleryImages} />
        </div>
      </section>
      {/* Join the Community */}
      <section className="py-20 bg-gray-800 text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t("joinCommunity")}</h2>
          <p className="text-xl mb-8">{t("joinText")}</p>
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors inline-flex items-center">
            <a
              href="https://chat.whatsapp.com/DX7TyLFGSw6JdECpuujKQa" // Replace with your desired phone number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaWhatsapp className="text-green-500 mr-2" size={20} />
              {t("joinNow")}
            </a>
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("contactUs")}
          </h2>
          <p className="text-gray-600 text-center mb-12">{t("contactText")}</p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JPTEKS</h3>
            <p className="text-gray-400">IMPACT-INNAVATE-GROW</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-yellow-600">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-600">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-yellow-600">
                  {t("team")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yellow-600">
                  {t("gallery")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-600">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("contact")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:contact@jpteks.cm"
                  className="text-white hover:text-yellow-600"
                >
                  contact@jpteks.cm
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-green-500 mr-2" size={20} />{" "}
                {/* WhatsApp Icon */}
                <a
                  href="https://wa.me/237651118070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-600"
                >
                  +237 651-11-80-70
                </a>
              </li>
              <li>Makepe, Douala </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("followUs")}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={face} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/jpteks_2023?igsh=MTZpOG96bndlbGFxaQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
