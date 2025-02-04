import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast"
const ContactForm = () => {
  const {toast }= useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const serviceId = import.meta.env.VITE_PUBLIC_SERVICE_ID;
  const templateId = import.meta.env.VITE_PUBLIC_TEMPLATE_ID;
  const userId = import.meta.env.VITE_PUBLIC_PUBLIC_KEY;
  const template = {
    from_name: formData.name,
    from_email: formData.email,
    to_name: "JPTEKS",
    subject: formData.subject,
    message: formData.message,
  };
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted:", formData);
  //   // Reset form
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    // Sending form data to emailjs
    emailjs.send(serviceId, templateId, template, userId).then(
      () => {
        toast({
          title: "Successfully sent",
        });
        console.log("SUCCESS!");
        setFormData({ name: "", email: "", message: "", subject: "" });
      },
      (error) => {
        toast({
          title: "Error",
          description: error.text || "An unknown error occurred",
        });
        console.error("FAILED...", error);
      }
    );
  };
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6">{t("getInTouch")}</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-yellow-600" />
            <p>contact@jpteks.cm</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-yellow-600" />
            <p>+237 651-11-80-70</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-yellow-600" />
            <p>Makepe, Douala</p>
          </div>
        </div>
      </div>

      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Awono Jean "
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jpteks728@gmail.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("subject")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Besoin d'un site web (In need of a website)."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Decrivez le projet (Describe the project)."
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        <button
          className="w-full bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-800 transition-colors flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>{t("sendMessage")}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
