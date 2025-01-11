'use client';
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import About from "@/components/About";
import Plans from "../components/Plans";
import BlogSection from "../components/BlogSection";
import VideoBackground from "../components/VideoBackground";
import Form from "../components/ContactForm";
import FeaturedArtworks from "../components/HeroGallery";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  return (
    <html lang={language}>
      <body>
        <Navbar
          language={language}
          toggleLanguage={toggleLanguage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main>{children}</main>
        <About  language={language}/>
        <VideoBackground language={language} />
        <Plans language={language}/>
        <BlogSection language={language}/>
        <FeaturedArtworks language={language}/>
        <Form />
        <Footer language={language} />
      </body>
    </html>
  );
}
