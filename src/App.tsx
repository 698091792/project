import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import TechAnimation from './components/TechAnimation';
import ContactForm from './components/ContactForm';
import AutoSlideTestimonials from './components/AutoSlideTestimonials';
import AutoSlideTeam from './components/AutoSlideTeam';
import AutoSlideGallery from './components/AutoSlideGallery';
import { Users, Target, Building2, UserPlus } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';
import linkedin from './assets/linkedin.png';
import face from './assets/face.png'; 
import insta from './assets/insta.png'; 
import stiven1 from './assets/stiven1.jpeg'; 
import { FaWhatsapp } from "react-icons/fa";
function App() {
  const { t } = useLanguage();
  const galleryImages = [
    { src: stiven1, alt: "Office" },
    { src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80", alt: "Team Working" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80", alt: "Meeting" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section id="home" className="pt-16">
        <Carousel />
      </section>

      {/* Mission & Values */}
      <section id="mission" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('mission')}</h2>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto ">
           {t('mission1')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ransition-transform duration-300 hover:scale-105">
              <div className="text-yellow-600 mb-4">
                <Target className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{t('Impact')}</h3>
              <p className="text-gray-600 text-center">{t('ImpactDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ransition-transform duration-300 hover:scale-105">
              <div className="text-yellow-600 mb-4">
                <Users className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{t('Innovate')}</h3>
              <p className="text-gray-600 text-center">{t('InnovateDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ransition-transform duration-300 hover:scale-105">
              <div className="text-yellow-600 mb-4">
                <Building2 className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{t('Grow')}</h3>
              <p className="text-gray-600 text-center">{t('GrowDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Goals */}
      <section id="vision" className="py-20 bg-yellow-600 text-white px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">{t('vision')}</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg transform transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">{t('ourVision')}</h3>
        <p className="text-lg">{t('visionText')}</p>
      </div>
      <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg transform transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">{t('ourGoals')}</h3>
        <ul className="space-y-2">
          <li className="before:content-['✔'] before:mr-2 before:text-green-400">Deliver exceptional value to our clients</li>
          <li className="before:content-['✔'] before:mr-2 before:text-green-400">Foster innovation and creativity</li>
          <li className="before:content-['✔'] before:mr-2 before:text-green-400">Build lasting partnerships</li>
          <li className="before:content-['✔'] before:mr-2 before:text-green-400">Contribute to technological advancement</li>
        </ul>
      </div>
    </div>
  </div>
</section>




      {/* About JPTEKS */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('about')}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                {t('aboutText')}
              </p>
              <TechAnimation />
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">10+</h4>
                <p className="text-gray-600">{t('e')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">500+</h4>
                <p className="text-gray-600">{t('p')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">100+</h4>
                <p className="text-gray-600">{t('t')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-yellow-600">50+</h4>
                <p className="text-gray-600">{t('c')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="py-20 bg-gray-100 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Accomplishments</h2>
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
        <a
          href="https://mentorguru.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 min-w-[300px] hover:shadow-xl  transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Award Image 1"
            className="h-32 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Mentor Guru</h3>
          <p className="text-gray-600">{t('m')}</p>
        </a>
        {/* Accomplishment 2 */}
        <a
          href="https://top100techcompanies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 min-w-[300px] hover:shadow-xl  transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Award Image 2"
            className="h-32 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Top 100 Tech Companies</h3>
          <p className="text-gray-600">Listed among the most innovative companies</p>
        </a>
        {/* Accomplishment 3 */}
        <a
          href="https://excellenceinservice.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 min-w-[300px] hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Award Image 3"
            className="h-32 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
          <p className="text-gray-600">Awarded for outstanding client satisfaction</p>
        </a>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
        onClick={() => {
          document.querySelector('.overflow-x-scroll').scrollBy({
            left: -300,
            behavior: 'smooth',
          });
        }}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
        onClick={() => {
          document.querySelector('.overflow-x-scroll').scrollBy({
            left: 300,
            behavior: 'smooth',
          });
        }}
      >
        &#10095;
      </button>
    </div>
  </div>
</section>




       {/* Testimonials */}
       <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('test')}</h2>
          <AutoSlideTestimonials />
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-4xl font-bold text-center mb-12">{t('team')}</h2>
          <AutoSlideTeam />
        </div>
      </section>



      {/* Gallery */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-4xl  mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('gallery')}</h2>
          <AutoSlideGallery slide={galleryImages} />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('contactUs')}</h2>
          <p className="text-gray-600 text-center mb-12">{t('contactText')}</p>
          <ContactForm />
        </div>
      </section>

      {/* Join the Community */}
      <section className="py-20 bg-yellow-600 text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t('joinCommunity')}</h2>
          <p className="text-xl mb-8">{t('joinText')}</p>
          <button 
  className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
>
  <a 
    href="https://chat.whatsapp.com/DX7TyLFGSw6JdECpuujKQa" // Replace with your desired phone number
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <FaWhatsapp className="text-green-500 mr-2" size={20} /> 
    {t('joinNow')}
  </a>
</button>

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
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-600">{t('home')}</a></li>
              <li><a href="#about" className="hover:text-yellow-600">{t('about')}</a></li>
              <li><a href="#team" className="hover:text-yellow-600">{t('team')}</a></li>
              <li><a href="#gallery" className="hover:text-yellow-600">{t('gallery')}</a></li>
              <li><a href="#contact" className="hover:text-yellow-600">{t('contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-2 text-gray-400">
            <li>
    <a href="mailto:jpteks@gmail.com" className="text-white hover:text-yellow-600">
      jpteks@gmail.com
    </a>
  </li>
  <li className="flex items-center">
  <FaWhatsapp className="text-green-500 mr-2" size={20} /> {/* WhatsApp Icon */}
  <a href="https://wa.me/237651118070" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-600">
    +237 651-11-80-70
  </a>
</li>
              <li>Makepe, Douala </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={face} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/jpteks_2023?igsh=MTZpOG96bndlbGFxaQ==" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
            
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;