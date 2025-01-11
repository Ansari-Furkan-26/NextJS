import React from "react";

// Dynamically import all images from the '/public/images' directory
const importImages = () => {
    const images = [];
    const context = require.context("../public/images", false, /\.(jpe?g|png|gif|webp)$/);
    context.keys().forEach((key, index) => {
      images.push({
        id: index + 1,
        src: `/images${key.replace("./", "/")}`, // Adjusting the path for use in public
      });
    });
    return images;
  };
  

const Gallery = ({ language = "english" }) => {
  // Translations for dual language support
  const translations = {
    english: {
      header: "Capture the joy of every sip",
      description: "Preserving your most cherished moments, one event at a time. Let us bring your celebrations to life with exquisite catering and attention to detail.",
      sectionTitle: "Catering Experience",
      sectionDescription: "Explore a dynamic showcase of our culinary artistry, where each beverage tells a story, and every event is designed to offer a flavorful, memorable journey. Dive into the world of taste and creativity, and let us bring your next celebration to life with our personalized catering services."
    },
    arabic: {
      header: "التقط فرحة كل رشفة",
      description: "نحن نحفظ لحظاتك الثمينة، حدثًا تلو الآخر. دعونا نجعل احتفالاتك حية مع خدمة تقديم الطعام الفاخرة والاهتمام بالتفاصيل.",
      sectionTitle: "تجربة تقديم الطعام",
      sectionDescription: "استكشف عرضًا ديناميكيًا لفن الطهي لدينا، حيث تروي كل مشروب قصة، وكل حدث مصمم لتقديم رحلة لذيذة ولا تُنسى. اغمر في عالم النكهة والإبداع، ودعنا نجعل احتفالك القادم ينبض بالحياة مع خدمات تقديم الطعام المخصصة لدينا."
    }
  };

  // Get the dynamically imported images
  const images = importImages();

  // Map over the array to create gallery image objects
  const galleryImages = images.map((image) => ({
    id: image.id,
    src: image.src,
    title: `${translations[language].sectionTitle} ${image.id}`,
    description: `Description for Project ${image.id}`,
  }));

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/c0/dc/49/c0dc498d4b9c855c8e299498ea2b2ea4.jpg')`,
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">{translations[language].header}</h2>
          <p className="text-lg">{translations[language].description}</p>
        </div>
      </section>

      {/* Header */}
      <header className="flex flex-col items-center justify-center text-center text-gray-800 pt-14 pb-8">
        <h1 className="text-3xl font-bold mb-2">{translations[language].sectionTitle}</h1>
        <h2 className="px-2 text-sm max-w-3xl lg:text-md text-gray-600">
          {translations[language].sectionDescription}
        </h2>
      </header>

      {/* Image Gallery */}
      <div
        className="pb-12 px-4 lg:px-32 container mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-5 gap-3"
        id="Gallery">
        {galleryImages.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid rounded-lg overflow-hidden">
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="w-full rounded-lg hover:shadow-lg hover:opacity-90 transition-all"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
