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
import ReviewSection from "@/components/ReviewSection";
import { NextSeo } from 'next-seo';

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
      {/* <NextSeo
        title="Rukn Al Dyafa | Hospitality Service"
        description="Discover premium catering, hospitality and beverage services in the UAE. We specialize in luxurious drinks and unforgettable experiences for weddings, corporate events, and private gatherings guests."
        canonical="https://www.ruknaldyafa.ae/"
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'خدمات تقديم الطعام الفاخرة , تقديم المشروبات في المناسبات , شركات تقديم الطعام في الإمارات , حجز خدمات تقديم المشروبات, أفضل خدمات تقديم الطعام في الإمارات, مشروبات لحفلات الزفاف, inquire about event drink services UAE, contact beverage caterers for weddings Dubai, beverage catering Abu Dhabi for parties, event drinks setup in Sharjah, wedding beverage services in Al Ain, Dubai beverage service company for events, catering services UAE book , event drinks setup UAE online booking, beverage service for hire Dubai, beverage services near me, luxury beverages UAE, premium catering, event catering UAE',
          },
          {
            name: 'author',
            content: 'Rukn Al Dyafa Team',
          },
        ]}
        openGraph={{
          title: 'Rukn Al Dyafa - Premium Catering Services',
          description:
            'Discover luxury catering and beverage services for weddings, corporate events, and private gatherings in the UAE.',
          url: 'https://www.ruknaldyafa.ae/',
          type: 'website',
          images: [
            {
              url: 'https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg',
              width: 800,
              height: 600,
              alt: 'Rukn Al Dyafa Premium Catering',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          // site: '@RuknAlDyafa', // Uncomment if you have a Twitter handle
          title: 'Rukn Al Dyafa - Premium Catering Services',
          description:
            'Experience luxurious catering services in the UAE. From bespoke drinks to customized experiences for any event.',
          image: 'https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg',
        }}
      /> */}
      
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
      <ReviewSection />
      <Form language={language} />
      <Footer language={language} />
    </div>
  );
}
