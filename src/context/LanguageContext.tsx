import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    home: 'Home',
    mission: 'Mission & Values',
    vision: 'Vision',
    about: 'About',
    team: 'Team',
    gallery: 'Gallery',
    contact: 'Contact',
    joinUs: 'Join Us',
    innovation: 'Innovation',
    collaboration: 'Collaboration',
    excellence: 'Excellence',
    ImpactDesc: 'We aim to impact the lives of Africa students by equipping them with valuable IT skills and fostering a love for learning through technology.',
    InnovateDesc: 'Through innovative solutions, we create tools and resources that empower teachers, students, and communities.',
    GrowDesc: 'As we impact lives and innovate, we grow together, building a brighter future for Africa with education as its foundation.',
    ourVision: 'Our Vision',
    ourGoals: 'Our Goals',
    visionText: 'At JPTEKS, we envision becoming a renowned leader in the Edtech industry, know for driving positive change and fosting educational progress across the continent. We believe that the access to quality education is fundamental to achieving Sustainable development goals, and we are committed to eradicating barriers to education through technology',
    aboutText: 'JPTEKS is an Edtech company dedicated to transforming the education sector in Cameroon and, ultimately, across Africa throungh the power of technology. Our Mission is to increase youth engagement in IT, with a target of empowering at least 80% of teenagers to pursue skills in technology. Achieving this goal will be a significant milestone in realizing our mission within Cameroon, after which we aim to expand our impact through Africa.',
    joinCommunity: 'Join Our Community',
    joinText: 'Be part of our growing technology community and stay updated with the latest innovations',
    joinNow: 'Join Now',
    getInTouch: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    contactUs: 'Contact Us',
    contactText: 'Have questions or want to discuss a project? Get in touch with us.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: '© 2024 JPTEKS. All rights reserved.'
  },
  es: {
    home: 'Inicio',
    mission: 'Misión y Valores',
    vision: 'Visión',
    about: 'Sobre Nosotros',
    team: 'Equipo',
    gallery: 'Galería',
    contact: 'Contacto',
    joinUs: 'Únete',
    innovation: 'Innovación',
    collaboration: 'Colaboración',
    excellence: 'Excelencia',
    innovationDesc: 'Superando límites y creando soluciones innovadoras',
    collaborationDesc: 'Trabajando juntos para lograr resultados excepcionales',
    excellenceDesc: 'Manteniendo los más altos estándares en todo lo que hacemos',
    ourVision: 'Nuestra Visión',
    ourGoals: 'Nuestros Objetivos',
    visionText: 'Ser el proveedor líder de soluciones tecnológicas, transformando empresas a través de la innovación y la excelencia.',
    aboutText: 'JPTEKS es una empresa líder en tecnología dedicada a proporcionar soluciones innovadoras para empresas en todo el mundo. Con nuestro equipo experto y tecnología de vanguardia, ayudamos a las organizaciones a transformar su presencia digital y alcanzar sus objetivos.',
    joinCommunity: 'Únete a Nuestra Comunidad',
    joinText: 'Sé parte de nuestra creciente comunidad tecnológica y mantente actualizado con las últimas innovaciones',
    joinNow: 'Únete Ahora',
    getInTouch: 'Ponte en Contacto',
    name: 'Nombre',
    email: 'Correo',
    subject: 'Asunto',
    message: 'Mensaje',
    sendMessage: 'Enviar Mensaje',
    contactUs: 'Contáctanos',
    contactText: '¿Tienes preguntas o quieres discutir un proyecto? Ponte en contacto con nosotros.',
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Síguenos',
    copyright: '© 2024 JPTEKS. Todos los derechos reservados.'
  },
  fr: {
    home: 'Accueil',
    mission: 'Mission et Valeurs',
    vision: 'Vision',
    about: 'À Propos',
    team: 'Équipe',
    gallery: 'Galerie',
    contact: 'Contact',
    joinUs: 'Rejoignez-nous',
    innovation: 'Innovation',
    collaboration: 'Collaboration',
    excellence: 'Excellence',
    innovationDesc: 'Repousser les limites et créer des solutions de pointe',
    collaborationDesc: 'Travailler ensemble pour obtenir des résultats exceptionnels',
    excellenceDesc: 'Maintenir les plus hauts standards dans tout ce que nous faisons',
    ourVision: 'Notre Vision',
    ourGoals: 'Nos Objectifs',
    visionText: 'Être le principal fournisseur de solutions technologiques, transformant les entreprises grâce à l\'innovation et l\'excellence.',
    aboutText: 'JPTEKS est une entreprise technologique de premier plan dédiée à fournir des solutions innovantes aux entreprises du monde entier. Avec notre équipe d\'experts et notre technologie de pointe, nous aidons les organisations à transformer leur présence numérique et à atteindre leurs objectifs.',
    joinCommunity: 'Rejoignez Notre Communauté',
    joinText: 'Faites partie de notre communauté technologique en pleine croissance et restez informé des dernières innovations',
    joinNow: 'Rejoignez-nous',
    getInTouch: 'Contactez-nous',
    name: 'Nom',
    email: 'Email',
    subject: 'Sujet',
    message: 'Message',
    sendMessage: 'Envoyer le Message',
    contactUs: 'Contactez-nous',
    contactText: 'Vous avez des questions ou souhaitez discuter d\'un projet ? Contactez-nous.',
    quickLinks: 'Liens Rapides',
    followUs: 'Suivez-nous',
    copyright: '© 2024 JPTEKS. Tous droits réservés.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};