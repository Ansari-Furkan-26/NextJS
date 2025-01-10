'use client';
import React, { useEffect, useState } from "react";
import Plans from '../components/Plans';
import BlogSection from '../components/BlogSection';
import About from '../components/About';
import VideoBackground from '../components/VideoBackground';
import Form from "../components/ContactForm";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";
import FeaturedArtworks from "../components/HeroGallery";
import Head from "next/head"; // Import Head from next
import FAQs from "../components/FAQs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CateringHeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  // Define image paths
  const images = [
    "/images/2.JPG",
    "/About.jpg",
    "/images/51.JPG",
    "/images/49.JPG",
    "/images/10.JPG",
    "/home.jpg",
    "/images/43.JPG",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Directly set the English text here
  const t = {
    heading: "Flavors that tell stories, \n and hospitality that inspires moments.",
    paragraph:
      "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering, crafting unforgettable experiences with exquisite beverages for every occasion.",
    bookNow: "Book Now",
    SideQuote: "Every season there is a set for two-tours",
    SideDesc: "Exclusive arrangements, and immersive experiences for beverage services."
  };

  return (
    <div className="relative bg-black h-screen px-4 sm:px-8">
      <Head>
        <title>Rukn Al Dyafa | Hospitality service</title>  
        <meta name="description" 
          content="Discover premium catering, hospitality and beverage services in the UAE. We specialize in luxurious drinks and unforgettable experiences for weddings, corporate events, and private gatherings guests." />
        <meta name="keywords" content="خدمات تقديم الطعام الفاخرة , تقديم المشروبات في المناسبات , شركات تقديم الطعام في الإمارات , حجز خدمات تقديم المشروبات, أفضل خدمات تقديم الطعام في الإمارات, مشروبات لحفلات الزفاف, inquire about event drink services UAE, contact beverage caterers for weddings Dubai, beverage catering Abu Dhabi for parties, event drinks setup in Sharjah, wedding beverage services in Al Ain, Dubai beverage service company for events, catering services UAE book , event drinks setup UAE online booking, beverage service for hire Dubai, beverage services near me, luxury beverages UAE, premium catering, event catering UAE" />
        <link href="https://www.ruknaldyafa.ae/" rel="canonical"/>
        <link rel="icon" type="image/png" href="https://i.pinimg.com/originals/46/65/46/466546a84dbb58e61e1eafc5ee4864b6.png"/>
        <meta name="author" content="Rukn Al Dyafa Team" />
        <meta property="og:title" content="Rukn Al Dyafa - Premium Catering Services" />
        <meta property="og:description" content="Discover luxury catering and beverage services for weddings, corporate events, and private gatherings in the UAE." />
        <meta property="og:image" content="https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg" />
        <meta property="og:url" content="https://www.ruknaldyafa.ae/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rukn Al Dyafa - Premium Catering Services" />
        <meta name="twitter:description" content="Experience luxurious catering services in the UAE. From bespoke drinks to customized experiences for any event." />
        <meta name="twitter:image" content="https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg" />
      </Head>

      <Navbar language={language} toggleLanguage={toggleLanguage} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>

       {/* Background Marquee for Mobile View */}
       <div className="absolute inset-0 md:hidden overflow-hidden bg-black opacity-70">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100 " : "opacity-0 "}`}>
              <img src={src}
                alt="Luxury hospitality services in UAE"
                className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
        
      {/* Background Image */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-tea-coffee-service-golden-cups-ramadan-holidays-decoration-image_15567931.png"
          alt="Catering Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl  font-bold leading-tight max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.heading}
        </motion.h1>

        <motion.p
          className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.paragraph}
        </motion.p>

        <a href="/luxury-hospitality-services">
          <motion.button
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t.bookNow}
          </motion.button>
        </a>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6">
          <a href="https://www.instagram.com/rukn_aldyafa/" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
            <FaInstagram />
          </a>
          <a href="https://wa.me/+917045992776" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
            <FaWhatsapp />
          </a>
          <a href="https://www.snapchat.com/add/ruknaldyafa" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
            <FaSnapchat />
          </a>
        </div>
      </div>

      <About />
      {/* <VideoBackground /> */}
      <Plans />
      <BlogSection />
      <FeaturedArtworks />
      <Form />
      <FAQs />
      <Footer />
    </div>
  );
};

export default CateringHeroSection;
