import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5 text-gray-600" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "fr")}
        className="bg-transparent text-gray-600 hover:text-yellow-800 transition-colors focus:outline-none cursor-pointer"
      >
        <option value="en">English</option>

        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
