'use client'
import React, { useState, useEffect } from "react";

const importedImages = [
  { src: "/images/1.JPG", alt: "Image 1" },
  { src: "/images/2.JPG", alt: "Image 2" },
  { src: "/images/3.JPG", alt: "Image 3" },
  { src: "/images/4.JPG", alt: "Image 4" },
  { src: "/images/5.JPG", alt: "Image 5" },
  { src: "/images/6.JPG", alt: "Image 6" },
  { src: "/images/7.JPG", alt: "Image 7" },
  { src: "/images/8.JPG", alt: "Image 8" },
  { src: "/images/9.JPG", alt: "Image 9" },
  { src: "/images/10.JPG", alt: "Image 10" },
  { src: "/images/11.JPG", alt: "Image 11" },
  { src: "/images/12.JPG", alt: "Image 12" },
  { src: "/images/13.JPG", alt: "Image 13" },
  { src: "/images/14.JPG", alt: "Image 14" },
  { src: "/images/15.JPG", alt: "Image 15" },
  { src: "/images/16.JPG", alt: "Image 16" },
  { src: "/images/17.JPG", alt: "Image 17" },
  { src: "/images/18.JPG", alt: "Image 18" },
  { src: "/images/19.JPG", alt: "Image 19" },
  { src: "/images/20.JPG", alt: "Image 20" },
  { src: "/images/21.JPG", alt: "Image 21" },
  { src: "/images/22.JPG", alt: "Image 22" },
  { src: "/images/23.JPG", alt: "Image 23" },
  { src: "/images/24.JPG", alt: "Image 24" },
  { src: "/images/25.JPG", alt: "Image 25" },
  { src: "/images/26.JPG", alt: "Image 26" },
  { src: "/images/27.JPG", alt: "Image 27" },
  { src: "/images/28.JPG", alt: "Image 28" },
  { src: "/images/29.JPG", alt: "Image 29" },
  { src: "/images/30.JPG", alt: "Image 30" },
  { src: "/images/31.JPG", alt: "Image 31" },
  { src: "/images/32.JPG", alt: "Image 32" },
  { src: "/images/33.JPG", alt: "Image 33" },
  { src: "/images/34.JPG", alt: "Image 34" },
  { src: "/images/35.JPG", alt: "Image 35" },
  { src: "/images/36.JPG", alt: "Image 36" },
  { src: "/images/37.JPG", alt: "Image 37" },
  { src: "/images/38.JPG", alt: "Image 38" },
  { src: "/images/39.JPG", alt: "Image 39" },
  { src: "/images/40.JPG", alt: "Image 40" },
  { src: "/images/41.JPG", alt: "Image 41" },
  { src: "/images/42.JPG", alt: "Image 42" },
  { src: "/images/43.JPG", alt: "Image 43" },
  { src: "/images/44.JPG", alt: "Image 44" },
  { src: "/images/45.JPG", alt: "Image 45" },
  { src: "/images/46.JPG", alt: "Image 46" },
  { src: "/images/47.JPG", alt: "Image 47" },
  { src: "/images/48.JPG", alt: "Image 48" },
  { src: "/images/49.JPG", alt: "Image 49" },
  { src: "/images/50.JPG", alt: "Image 50" },
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
      <div className="pb-10 bg-gray-100">
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
  