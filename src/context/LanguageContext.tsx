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
    mission1: 'We understand that education is one of the critical challenges outlined in the United Nation Sustainable Development Goal(SDGs). By harnessing technology, we are dedicated to overcoming the lack of access to education and delivering inclusive learning opportunities that can bridge the education gap in Africa.',
    vision: 'Vision',
    about: 'About',
    team: 'Team',
    gallery: 'Gallery',
    contact: 'Contact',
    joinUs: 'Contact Us',
    innovate: 'Innovate',
    impact: 'Impact',
    grow: 'Grow',
    collaboration: 'Collaboration',
    excellence: 'Excellence',
    ImpactDesc: 'We aim to impact the lives of African students by equipping them with valuable IT skills and fostering a love for learning through technology.',
    InnovateDesc: 'Through innovative solutions, we create tools and resources that empower teachers, students, and communities.',
    GrowDesc: 'As we impact lives and innovate, we grow together, building a brighter future for Africa with education as its foundation.',
    ourVision: 'Our Vision',
    ourGoals: 'Our Goals',
    goal1: 'Deliver exceptional value to our clients',
    visionText: 'At JPTEKS, we envision becoming a renowned leader in the Edtech industry, known for driving positive change and fostering educational progress across the continent. We believe that access to quality education is fundamental to achieving Sustainable Development Goals, and we are committed to eradicating barriers to education through technology.',
    e: 'Years Experience',
    p: 'Projects Completed',
    t: 'Team Members',
    c: 'Countries Served',
    m: 'Recognized for groundbreaking solutions in AI',
    test: 'Testimonials',
    text1: 'Excellent service, highly recommended!',
    author1: 'John Smith',
    role1: 'CEO',
    text2: 'Outstanding service and exceptional results. A true technology partner.',
    author2: 'Sarah Johnson',
    role2: 'CTO',
    text3: "The team's expertise and dedication made our project a huge success.",
    author3: 'Michael Brown',
    role3: 'Director',
    aboutText: 'JPTEKS is an Edtech company dedicated to transforming the education sector in Cameroon and, ultimately, across Africa through the power of technology. Our Mission is to increase youth engagement in IT, with a target of empowering at least 80% of teenagers to pursue skills in technology. Achieving this goal will be a significant milestone in realizing our mission within Cameroon, after which we aim to expand our impact across Africa.',
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
    copyright: '© 2024 JPTEKS. All rights reserved.',
    title1: "Training",
    desc1: "Unlock your tech potential with our hands-on training in website creation and app development, designed for teens and adults to build real-world skills and unleash creativity!",
    title2: "Website Creation",
    desc2: "We develop high-quality websites designed to attract and convert more prospects, driving growth and success for your business.",
    title3: "Web and App Development",
    desc3: "Alongside our Edtech products, we create customized web and mobile applications tailored to enhance enterprise operations and productivity."
  },  
  es: {
   "home": "Inicio",
  "mission": "Misión y Valores",
  "mission1": "Entendemos que la educación es uno de los desafíos críticos definidos en los Objetivos de Desarrollo Sostenible de las Naciones Unidas (ODS). Al aprovechar la tecnología, estamos dedicados a superar la falta de acceso a la educación y ofrecer oportunidades de aprendizaje inclusivas que puedan cerrar la brecha educativa en África.",
  "vision": "Visión",
  "about": "Sobre Nosotros",
  "team": "Equipo",
  "gallery": "Galería",
  "contact": "Contacto",
  "joinUs": "Contáctanos",
  "innovate": "Innovar",
  "impact": "Impacto",
  "grow": "Crecer",
  "collaboration": "Colaboración",
  "excellence": "Excelencia",
  "ImpactDesc": "Nuestro objetivo es impactar las vidas de los estudiantes africanos dotándolos de valiosas habilidades en TI y fomentando el amor por el aprendizaje a través de la tecnología.",
  "InnovateDesc": "A través de soluciones innovadoras, creamos herramientas y recursos que empoderan a los maestros, estudiantes y comunidades.",
  "GrowDesc": "A medida que impactamos vidas e innovamos, crecemos juntos, construyendo un futuro más brillante para África con la educación como base.",
  "ourVision": "Nuestra Visión",
  "ourGoals": "Nuestros Objetivos",
  "goal1": "Brindar un valor excepcional a nuestros clientes",
  "visionText": "En JPTEKS, visualizamos convertirnos en un líder reconocido en la industria Edtech, conocido por impulsar cambios positivos y fomentar el progreso educativo en todo el continente. Creemos que el acceso a una educación de calidad es fundamental para lograr los Objetivos de Desarrollo Sostenible, y estamos comprometidos a erradicar las barreras para la educación a través de la tecnología.",
  "e": "Años de Experiencia",
  "p": "Proyectos Completados",
  "t": "Miembros del Equipo",
  "c": "Países Atendidos",
  "m": "Reconocido por soluciones innovadoras en IA",
  "test": "Testimonios",
  "text1": "¡Excelente servicio, altamente recomendado!",
  "author1": "John Smith",
  "role1": "CEO",
  "text2": "Servicio excepcional y resultados sobresalientes. Un verdadero socio tecnológico.",
  "author2": "Sarah Johnson",
  "role2": "CTO",
  "text3": "La experiencia y dedicación del equipo hicieron que nuestro proyecto fuera un gran éxito.",
  "author3": "Michael Brown",
  "role3": "Director",
  "aboutText": "JPTEKS es una empresa Edtech dedicada a transformar el sector educativo en Camerún y, en última instancia, en toda África a través del poder de la tecnología. Nuestra misión es aumentar el compromiso de los jóvenes en TI, con el objetivo de empoderar al menos al 80% de los adolescentes para que sigan carreras en tecnología. Lograr este objetivo será un hito significativo para nuestra misión en Camerún, tras lo cual planeamos expandir nuestro impacto en toda África.",
  "joinCommunity": "Únete a Nuestra Comunidad",
  "joinText": "Sé parte de nuestra creciente comunidad tecnológica y mantente actualizado con las últimas innovaciones",
  "joinNow": "Únete Ahora",
  "getInTouch": "Ponte en Contacto",
  "name": "Nombre",
  "email": "Correo",
  "subject": "Asunto",
  "message": "Mensaje",
  "sendMessage": "Enviar Mensaje",
  "contactUs": "Contáctanos",
  "contactText": "¿Tienes preguntas o quieres discutir un proyecto? Contáctanos.",
  "quickLinks": "Enlaces Rápidos",
  "followUs": "Síguenos",
  "copyright": "© 2024 JPTEKS. Todos los derechos reservados.",
  "title1": "Capacitación",
  "desc1": "Desbloquea tu potencial tecnológico con nuestra capacitación práctica en creación de sitios web y desarrollo de aplicaciones, diseñada para adolescentes y adultos para desarrollar habilidades del mundo real y liberar creatividad.",
  "title2": "Creación de Sitios Web",
  "desc2": "Desarrollamos sitios web de alta calidad diseñados para atraer y convertir más prospectos, impulsando el crecimiento y éxito de tu negocio.",
  title3: "Desarrollo Web y de Aplicaciones",
  desc3: "Junto con nuestros productos Edtech, creamos aplicaciones web y móviles personalizadas diseñadas para mejorar las operaciones y la productividad empresarial."
},
  fr: {
    
  "home": "Accueil",
  "mission": "Mission et Valeurs",
  "mission1": "Nous comprenons que l'éducation est l'un des défis majeurs définis dans les Objectifs de Développement Durable des Nations Unies (ODD). En exploitant la technologie, nous nous consacrons à surmonter le manque d'accès à l'éducation et à offrir des opportunités d'apprentissage inclusives qui peuvent combler l'écart éducatif en Afrique.",
  "vision": "Vision",
  "about": "À Propos",
  "team": "Équipe",
  "gallery": "Galerie",
  "contact": "Contact",
  "joinUs": "Rejoignez-nous",
  "innovate": "Innover",
  "impact": "Impact",
  "grow": "Grandir",
  "collaboration": "Collaboration",
  "excellence": "Excellence",
  "ImpactDesc": "Nous visons à impacter la vie des étudiants africains en les dotant de compétences précieuses en informatique et en favorisant l'amour de l'apprentissage grâce à la technologie.",
  "InnovateDesc": "Grâce à des solutions innovantes, nous créons des outils et des ressources qui autonomisent les enseignants, les étudiants et les communautés.",
  "GrowDesc": "À mesure que nous impactons les vies et innovons, nous grandissons ensemble, construisant un avenir plus brillant pour l'Afrique avec l'éducation comme fondement.",
  "ourVision": "Notre Vision",
  "ourGoals": "Nos Objectifs",
  "goal1": "Fournir une valeur exceptionnelle à nos clients",
  "visionText": "Chez JPTEKS, nous envisageons de devenir un leader reconnu dans l'industrie Edtech, connu pour promouvoir un changement positif et favoriser les progrès éducatifs sur tout le continent. Nous croyons que l'accès à une éducation de qualité est fondamental pour atteindre les Objectifs de Développement Durable, et nous nous engageons à éradiquer les barrières à l'éducation grâce à la technologie.",
  "e": "Années d'Expérience",
  "p": "Projets Complétés",
  "t": "Membres de l'Équipe",
  "c": "Pays Servis",
  "m": "Reconnu pour des solutions innovantes en IA",
  "test": "Témoignages",
  "text1": "Service excellent, vivement recommandé !",
  "author1": "John Smith",
  "role1": "CEO",
  "text2": "Service exceptionnel et résultats remarquables. Un véritable partenaire technologique.",
  "author2": "Sarah Johnson",
  "role2": "CTO",
  "text3": "L'expertise et le dévouement de l'équipe ont fait de notre projet un grand succès.",
  "author3": "Michael Brown",
  "role3": "Directeur",
  "aboutText": "JPTEKS est une entreprise Edtech dédiée à transformer le secteur de l'éducation au Cameroun et, en fin de compte, en Afrique grâce au pouvoir de la technologie. Notre mission est d'augmenter l'engagement des jeunes dans les technologies de l'information, avec pour objectif de permettre à au moins 80% des adolescents de développer des compétences en technologie. Atteindre cet objectif sera une étape importante pour la réalisation de notre mission au Cameroun, après quoi nous visons à étendre notre impact à travers l'Afrique.",
  "joinCommunity": "Rejoignez Notre Communauté",
  "joinText": "Faites partie de notre communauté technologique croissante et restez informé des dernières innovations",
  "joinNow": "Rejoignez-nous",
  "getInTouch": "Prenez Contact",
  "name": "Nom",
  "email": "Email",
  "subject": "Sujet",
  "message": "Message",
  "sendMessage": "Envoyer le Message",
  "contactUs": "Contactez-nous",
  "contactText": "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous.",
  "quickLinks": "Liens Rapides",
  "followUs": "Suivez-nous",
  "copyright": "© 2024 JPTEKS. Tous droits réservés.",
  "title1": "Formation",
  "desc1": "Déverrouillez votre potentiel technologique avec notre formation pratique en création de sites web et développement d'applications, conçue pour les adolescents et les adultes afin de développer des compétences réelles et de libérer la créativité.",
  "title2": "Création de Sites Web",
  "desc2": "Nous développons des sites web de haute qualité conçus pour attirer et convertir davantage de prospects, favorisant la croissance et le succès de votre entreprise.",
  "title3": "Développement Web et d'Applications",
  "desc3": "En plus de nos produits Edtech, nous créons des applications web et mobiles personnalisées conçues pour améliorer les opérations et la productivité des entreprises."
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