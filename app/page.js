'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";
import About from "../components/About";
import Plans from "../components/Plans";
import BlogSection from "../components/BlogSection";
import VideoBackground from "../components/VideoBackground";
import Form from "../components/ContactForm";
import FeaturedArtworks from "../components/HeroGallery";
import FAQs from "../components/FAQs";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

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

  const t = {
    heading: "Flavors that tell stories, \n and hospitality that inspires moments.",
    paragraph:
      "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering, crafting unforgettable experiences with exquisite beverages for every occasion.",
    bookNow: "Book Now",
  };

  return (
    <div className="relative bg-black h-screen px-4 sm:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-tea-coffee-service-golden-cups-ramadan-holidays-decoration-image_15567931.png"
          alt="Catering Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl"
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
          <a
            href="https://www.instagram.com/rukn_aldyafa/"
            target="_blank"
            className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/+917045992776"
            target="_blank"
            className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.snapchat.com/add/ruknaldyafa"
            target="_blank"
            className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition"
          >
            <FaSnapchat />
          </a>
        </div>
      </div>

      <About />
      <VideoBackground />
      <Plans />
      <BlogSection />
      <FeaturedArtworks />
      <Form />
      <FAQs />
      <Footer />
    </div>
  );
}
