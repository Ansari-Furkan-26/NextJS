'use client';

import { useState } from 'react'; // Import useState for client-side state management
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };
  return (
    <>
      {/* Pass state and setter function to the Navbar component */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="p-4">
        <h1 className="text-2xl font-bold">About Page</h1>
        <Link href="/" className="text-blue-500 underline">
          Home
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
