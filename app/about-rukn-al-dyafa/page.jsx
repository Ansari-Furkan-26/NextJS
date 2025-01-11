'use client';

import React, { useState  } from "react";
import About from '@/components/About';
// import Gallery from '@/components/HeroGallery';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import { NextSeo } from 'next-seo';

const AboutSection = () => {
  const translations = {
    english: {
      header: "Capture the Moment",
      paragraph: "Preserving your most cherished moments, one event at a time. Let us bring your celebrations to life with exquisite catering and attention to detail."
    },
    arabic: {
      header: "التقط اللحظة",
      paragraph: "نحن نحتفظ بأغلى لحظاتك، في كل مناسبة على حدة. دعنا نجعل احتفالاتك حية مع خدمة تقديم الطعام الفاخرة والاهتمام بالتفاصيل."
    }
  };

   const [language, setLanguage] = useState("english");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleLanguage = () => {
      setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
    };
  

  return (
    <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
      {/* <NextSeo
        title="Rukn Al Dyafa - Experience in Luxury, Weddings & Corporate Events"
        description="Learn more about our commitment to delivering premium catering and beverage services. We bring elegance and taste to your events in the UAE."
        canonical="https://www.ruknaldyafa.ae/about-section"
        openGraph={{
          url: 'https://www.ruknaldyafa.ae/about-section',
          title: 'Rukn Al Dyafa - About Us',
          description:
            "Explore how our premium catering and beverage services bring elegance and unforgettable moments to your special occasions in the UAE.",
          images: [
            {
              url: 'https://example.com/your-image.jpg', // Replace with your image URL
              width: 800,
              height: 600,
              alt: 'Rukn Al Dyafa Catering Services',
            },
          ],
          site_name: 'Rukn Al Dyafa',
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'Rukn Al Dyafa - About Us',
          description:
            "Discover our luxurious catering and beverage services in the UAE. Let us create unforgettable events tailored to your needs.",
          image: 'https://example.com/your-image.jpg', // Replace with your image URL
          url: 'https://www.ruknaldyafa.ae/about-section',
        }}
        additionalMetaTags={[
          {
            name: 'author',
            content: 'Rukn Al Dyafa Team',
          },
          {
            name: 'keywords',
            content:
              'top-rated beverage catering UAE, best drink catering services in Dubai, luxury catering UAE, premium catering services UAE, beverage services UAE, wedding catering UAE, corporate event catering UAE, catering services in Dubai, bespoke catering services, elegant catering solutions, birthday party catering services UAE, tailored catering UAE',
          },
        ]}
      /> */}
      
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
        
    {/* Background image and text about capturing moments */}
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/ed/5a/77/ed5a77dc9815460f8af4eb394803d727.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">
          {translations[language].header}
        </h2>
        <p className="text-lg">
          {translations[language].paragraph}
        </p>
      </div>
    </section> 
    
    <About language={language} />
    {/* <Gallery language={language} />     */}
    <Footer language={language} />
  </div>
  );
};

export default AboutSection;
