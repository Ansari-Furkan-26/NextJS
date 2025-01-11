'use client'
import React, { useState, useEffect } from "react";

const importedImages = [
  { src: "/images/1.jpg", alt: "Image 1" },
  { src: "/images/2.jpg", alt: "Image 2" },
  { src: "/images/3.jpg", alt: "Image 3" },
  { src: "/images/4.jpg", alt: "Image 4" },
  { src: "/images/5.jpg", alt: "Image 5" },
  { src: "/images/6.jpg", alt: "Image 6" },
  { src: "/images/7.jpg", alt: "Image 7" },
  { src: "/images/8.jpg", alt: "Image 8" },
  { src: "/images/9.jpg", alt: "Image 9" },
  { src: "/images/10.jpg", alt: "Image 10" },
  { src: "/images/11.jpg", alt: "Image 11" },
  { src: "/images/12.jpg", alt: "Image 12" },
  { src: "/images/13.jpg", alt: "Image 13" },
  { src: "/images/14.jpg", alt: "Image 14" },
  { src: "/images/15.jpg", alt: "Image 15" },
  { src: "/images/16.jpg", alt: "Image 16" },
  { src: "/images/17.jpg", alt: "Image 17" },
  { src: "/images/18.jpg", alt: "Image 18" },
  { src: "/images/19.jpg", alt: "Image 19" },
  { src: "/images/20.jpg", alt: "Image 20" },
  { src: "/images/21.jpg", alt: "Image 21" },
  { src: "/images/22.jpg", alt: "Image 22" },
  { src: "/images/23.jpg", alt: "Image 23" },
  { src: "/images/24.jpg", alt: "Image 24" },
  { src: "/images/25.jpg", alt: "Image 25" },
  { src: "/images/26.jpg", alt: "Image 26" },
  { src: "/images/27.jpg", alt: "Image 27" },
  { src: "/images/28.jpg", alt: "Image 28" },
  { src: "/images/29.jpg", alt: "Image 29" },
  { src: "/images/30.jpg", alt: "Image 30" },
  { src: "/images/31.jpg", alt: "Image 31" },
  { src: "/images/32.jpg", alt: "Image 32" },
  { src: "/images/33.jpg", alt: "Image 33" },
  { src: "/images/34.jpg", alt: "Image 34" },
  { src: "/images/35.jpg", alt: "Image 35" },
  { src: "/images/36.jpg", alt: "Image 36" },
  { src: "/images/37.jpg", alt: "Image 37" },
  { src: "/images/38.jpg", alt: "Image 38" },
  { src: "/images/39.jpg", alt: "Image 39" },
  { src: "/images/40.jpg", alt: "Image 40" },
  { src: "/images/41.jpg", alt: "Image 41" },
  { src: "/images/42.jpg", alt: "Image 42" },
  { src: "/images/43.jpg", alt: "Image 43" },
  { src: "/images/44.jpg", alt: "Image 44" },
  { src: "/images/45.jpg", alt: "Image 45" },
  { src: "/images/46.jpg", alt: "Image 46" },
  { src: "/images/47.jpg", alt: "Image 47" },
  { src: "/images/48.jpg", alt: "Image 48" },
  { src: "/images/49.jpg", alt: "Image 49" },
  { src: "/images/50.jpg", alt: "Image 50" },
];


const ImageGallery = ({ language = "english" }) => {
    const translations = {
      english: {
        heading: "Gallery",
      },
      arabic: {
        heading: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631",
      },
    };

    return (
      <div className="pb-10 bg-gray-100 ">
      <h2 className="text-3xl font-bold text-center mb-6">
        {translations[language].heading}
      </h2>
      <div
        id="image-gallery-container"
        className="overflow-x-scroll p-4 mx-auto flex gap-4"
        style={{ whiteSpace: "nowrap" }}
      >
        {importedImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="max-w-sm w-80 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      ))}
      </div>
    </div>
    );
  };
  
  export default ImageGallery;
  