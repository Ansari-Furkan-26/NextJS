'use client';
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import About from "@/components/About";
import Plans from "@/components/Plans";
import BlogSection from "@/components/BlogSection";
import VideoBackground from "@/components/VideoBackground";
import Form from "@/components/ContactForm";
import FeaturedArtworks from "@/components/HeroGallery";
import Home from "@/components/Home"
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Navbar */}
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      {/* Page Components */}
      <Home language={language}/>
      <About language={language} />
      <VideoBackground language={language} />
      <Plans language={language} />
      <BlogSection language={language} />
      <FeaturedArtworks language={language} />
      <Form language={language} />
      <Footer language={language} />
    </div>
  );
}
