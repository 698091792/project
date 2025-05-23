// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import slide1 from "../assets/w.png";
// import slide2 from "../assets/r.png";
// import slide3 from "../assets/a.png";
// import { useLanguage } from "../context/LanguageContext";

// const Carousel = () => {
//   const { t } = useLanguage(); // Destructure `t` from the language context
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       title: t("title1"), // Translation key with fallback
//       description: t(
//         "desc1",
//       ), // Translation key with fallback
//       image: slide1,
//     },
//     {
//       title: t("title2"), // Translation key with fallback
//       description: t(
//         "desc2",
//       ), // Translation key with fallback
//       image: slide2,
//     },
//     {
//       title: t("title3"), // Translation key with fallback
//       description: t(
//         "desc3",
//       ), // Translation key with fallback
//       image: slide3,
//     },
//   ];

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-[600px] group">
//       {/* Slide */}
//       <div
//         className="w-full h-full bg-center bg-cover duration-500"
//         style={{
//           backgroundImage: `url(${slides[currentIndex].image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
//           <h2 className="text-4xl font-bold mb-4">{slides[currentIndex].title}</h2>
//           <p className="text-lg max-w-2xl">{slides[currentIndex].description}</p>
//         </div>
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-4 text-white text-2xl bg-black/30 p-3 rounded-full"
//       >
//         <ChevronLeft size={30} />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-4 text-white text-2xl bg-black/30 p-3 rounded-full"
//       >
//         <ChevronRight size={30} />
//       </button>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../assets/w.png";
import slide2 from "../assets/r.png";
import slide3 from "../assets/a.png";
import { useLanguage } from "../context/LanguageContext";

const Carousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: t("title1"),
      description: t("desc1"),
      image: slide1,
    },
    {
      title: t("title2"),
      description: t("desc2"),
      image: slide2,
    },
    {
      title: t("title3"),
      description: t("desc3"),
      image: slide3,
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] group">
      {/* Slide */}
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        <div className="absolute font-serif inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            {slides[currentIndex].title}
          </h2>
          <p className="text-sm md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl px-2 sm:px-4">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 text-white text-2xl bg-black/30 p-2 sm:p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 text-white text-2xl bg-black/30 p-2 sm:p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
