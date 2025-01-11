'use client'
import React, { useState } from "react";
import { useRouter  } from "next/router";
import { MdDelete } from "react-icons/md";


const hotBeverages = [
  "Arabic coffee | قهوة عربية",
  "Turkish coffee | قهوة تركية",
  "Black Tea with Zaffran | شاي أسود بالزعفران",
  "Green Tea | شاي أخضر",
  "Lemon Grass Tea | شاي الليمون",
  "Moroccan Tea | شاي مغربي",
  "Pineapple Tea with Cinnamon | شاي الأناناس بالقرفة",
  "Apple Tea | شاي التفاح",
  "Habbat Al Hamra with Custard | حبّة الحمرا بالكاسترد",
  "Cappuccino | كابتشينو",
  "Hot Chocolate | شوكولاتة ساخنة",
  "Rose with Custard | ورد بالكاسترد",
  "Pistachio Latte | لاتيه بالفستق",
  "Sahlab | سحلب",
  "Milk with Ginger | حليب بالزنجبيل",
  "Milk with Zaffran | حليب بالزعفران",
  "Milk with Zaatar | حليب بالزعتر",
];

const coldBeverages = [
  "Faloodah | فولوده",
  "Hibiscus | كركديه",
  "Mojito blueberry | موهيتو بالتوت الأزرق",
  "Mojito passion fruit | موهيتو فاكهة العاطفة",
  "Lemon with Lavender | ليمون مع اللافندر",
  "Pistachio latte | لاتيه بالفستق",
  "Faloodah Strawberry | فولوده بالفراولة",
  "Faloodah Mango | فولوده بالمانجو",
  "Apricot drink | مشروب المشمش",
  "Pina Colada | بينا كولادا",
  "Lemon with Mint | ليمون بالنعناع",
  "Orange Juice | عصير البرتقال",
  "Zaffran Drink | مشروب الزعفران",
  "Iced Tea with Peach | شاي مثلج مع الخوخ",
  "Coconut Water | ماء جوز الهند",
];

const foodItems = [
  { name: "Luqaimat | لقيمات (per plate)", price: 500 },
  { name: "Khubs shabab | خبز رقاق (per plate)", price: 500 },
  { name: "Khubs rigag | خبز رقاق (per plate)", price: 1000 },
  { name: "Khubs khameer | خبز خمير (per plate)", price: 800 },
  { name: "Mahallah Zayed | محلي زايد (per plate)", price: 600 },
  { name: "Emarati Balaleet | بلاليط او شعيرية (per kg)", price: 400 },
  { name: "Khabees | خبيصة (per kg) ", price: 500 },
  { name: "Dhango (Chick peas) | دنقو او نخي (per kg)", price: 400 },
];

const translations = {
  english: {
    header: "Cart Summary",
    HotDrink: "Hot Drinks",
    ColdDrink: "Cold Drinks",
    select: "Selected Package",
    title: "Package Title",
    price: "Package Price",
    drinks: "Drinks",
    fooditem: "Traditional Food items",
    selectedfood: "Selected Food Item",
    Charges: "Delivery Charges",
    total: "Total",
    clientEntries: "Client Entries",
    name: "Name",
    email: "Email",
    city: "City",
    phone: "Phone",
    guests: "Number of Guests",
    eventDate: "Event Date",
    thankYouTitle: "🎉 Thank You!",
    thankYouMessage: "Your order has been successfully submitted. We will reach out to you shortly.",
    specialOffer: "Special Offer: Order Package 3 or higher and get a complimentary Beverage or Perfume with your order.",
    order: "Order Now",
  },
  arabic: {
    header: "ملخص العربة",
    HotDrink: "المشروبات الساخنة",
    ColdDrink: "المشروبات الباردة",
    select: "الحزمة المختارة",
    title: "عنوان الحزمة",
    price: "سعر الباقة",
    drinks: "مشروبات",
    fooditem: "الأطعمة التقليدية",
    selectedfood: "صنف طعام مختار",
    Charges: "رسوم التوصيل",
    total: "المجموع",
    clientEntries: "بيانات العميل",
    name: "الاسم",
    email: "البريد الإلكتروني",
    city: "المدينة",
    phone: "الهاتف",
    guests: "عدد الضيوف",
    eventDate: "تاريخ الحدث",
    thankYouTitle: "🎉 شكراً!",
    thankYouMessage: "تم إرسال طلبك بنجاح. سنصل إليك قريبًا.",
    specialOffer: "عرض خاص: اطلب حزمة 3 أو أكثر واحصل على مشروب أو عطر مجاني مع طلبك.",
    order: "اطلب الآن",
  },
};


const Cart = ({ selectedPackage, selectedPackagePrice , language }) => {
  const location = useRouter();
  const formData = location.state?.formData || {};
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false); // State to show the popup
  const DRINK_PRICE = 200;

  const DELIVERY_CHARGES = {
    "Abu Dhabi": 300,
    "Ajman": 0,
    "Al Ain": 400,
    "Dubai": 0,
    "Fujairah": 300,
    "Ras Al Khaimah": 300,
    "Sharjah": 0,
    "Umm Al Quwain": 0,
  };

  const handleDrinkSelection = (drinkType, drinkName) => {
    if (!drinkName || selectedDrinks.some((drink) => drink.name === drinkName)) return;
  
    setSelectedDrinks((prevDrinks) => [
      ...prevDrinks,
      { type: drinkType, name: drinkName, price: DRINK_PRICE },
    ]);
  };
  
  const handleFoodSelection = (foodName) => {
    const foodItem = foodItems.find((item) => item.name === foodName);
    if (!foodItem || selectedFoodItems.some((food) => food.name === foodName)) return;

    setSelectedFoodItems((prevFood) => [...prevFood, foodItem]);
  };

  const removeDrink = (indexToRemove) => {
    setSelectedDrinks((prevDrinks) =>
      prevDrinks.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeFoodItem = (indexToRemove) => {
    setSelectedFoodItems((prevFood) =>
      prevFood.filter((_, index) => index !== indexToRemove)
    );
  };
 
    // Dynamically get the translation for the current language
    const t = translations[language] || translations.english;

  const calculateTotal = () => {
    const drinksTotal = selectedDrinks.reduce((sum, drink) => sum + drink.price, 0);
    const foodTotal = selectedFoodItems.reduce((sum, food) => sum + food.price, 0);
    const deliveryCharge = DELIVERY_CHARGES[formData.city] || 0;
    return (selectedPackagePrice || 0) + drinksTotal + foodTotal + deliveryCharge;
  };

  const handleOrderSubmit = () => {
    setShowThankYouPopup(true);
      const totalAmount = calculateTotal();
      const message = `
    Hello, I would like to place an order. Here are the details:
    
    *Selected Package:* 
    - Package Title: ${selectedPackage || "N/A"}
    - Package Price: ${selectedPackagePrice || 0} AED

    *Selected Food Items:*
    ${selectedFoodItems.map((food, index) => `- ${food.name} (${food.price} AED)`).join("\n")}
    
    *Selected Drinks:*
    ${selectedDrinks.map((drink, index) => `- ${drink.type}: ${drink.name} (${drink.price} AED)`).join("\n")}   
    
    *Client Information:*
    - Name: ${formData.name || "N/A"}
    - Email: ${formData.email || "N/A"}
    - City: ${formData.city || "N/A"}
    - Phone: ${formData.countryCode ? `${formData.countryCode} ${formData.phone}` : formData.phone || "N/A"}
    - Guests: ${formData.guests || "N/A"}
    - Event Date: ${formData.eventDate || "N/A"}

    *Delivery Charge:* ${DELIVERY_CHARGES[formData.city] || 0} AED
    
    *Total Amount:* ${totalAmount} AED
      `.trim();
    
      // Encode the message for use in a URL
      const encodedMessage = encodeURIComponent(message);
    
      // WhatsApp API link
      const whatsappLink = `https://wa.me/+917045992776?text=${encodedMessage}`;
    
      // Redirect to WhatsApp
      window.open(whatsappLink, "_blank");
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center" id="cart">
    
      <div className="hidden md:block h-full w-full p-8">
      <img 
        src="https://i.pinimg.com/736x/36/db/a0/36dba0a1d51aab032bb4855f8075b8c3.jpg" 
        alt="Package Image" 
        className="object-cover max-h-full w-full rounded-xl"/>
      </div>
      <div className="max-w-6xl w-full bg-gray-50 rounded-lg py-8 px-3 md:p-8">
        <h1 className="text-2xl font-bold text-center">{t.header}</h1>

        {/* Drink Selection */}
      <div className="flex justify-between items-center my-6">
        <div className="w-1/2 mr-4">
          <label htmlFor="hotDrink" className="block text-sm font-medium mb-2">
            {t.HotDrink}
          </label>
          <select
            id="hotDrink"
            onChange={(e) => handleDrinkSelection("Hot Drink", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">-- Select --</option>
            {hotBeverages.map((drink) => (
              <option key={drink} value={drink}>
                {drink}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <label htmlFor="coldDrink" className="block text-sm font-medium mb-2">
          {t.ColdDrink}
          </label>
          <select
            id="coldDrink"
            onChange={(e) => handleDrinkSelection("Cold Drink", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">-- Select --</option>
            {coldBeverages.map((drink) => (
              <option key={drink} value={drink}>
                {drink}
              </option>
            ))}
          </select>
        </div>
      </div>

       {/* Food Section */}
       <div className="mb-6">
          <h2 className="text-md font-semibold mb-2">{t.fooditem}</h2>
          <select
            onChange={(e) => handleFoodSelection(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">-- Select --</option>
            {foodItems.map((food) => (
              <option key={food.name} value={food.name}>
                {food.name} - {food.price} AED
              </option>
            ))}
          </select>
        </div>
        
      
                {/* Selected Package Details */}
        <div className="border rounded-lg p-4 my-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">{t.select}</h2>

          {/* Display Package Details Only if Available */}
          {selectedPackage && selectedPackagePrice && (
            <>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.title}:</span>
                <span>{selectedPackage}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.price}:</span>
                <span>{selectedPackagePrice} AED</span>
              </div>
            </>
          )}

          {/* Display Selected Drinks, if Any */}
          {selectedDrinks.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{t.drinks}:</h3>
              {selectedDrinks.map((drink, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span>{drink.type}: {drink.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{drink.price} AED</span>
                    <button
                      className="ml-4 text-red-500 font-bold hover:text-red-700"
                      onClick={() => removeDrink(index)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Display Selected Food Items, if Any */}
          {selectedFoodItems.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{t.selectedfood}:</h3>
              {selectedFoodItems.map((food, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>{food.name}</div>
                  <div className="flex items-center">
                    <span>{food.price} AED</span>
                    <button
                      className="ml-4 text-red-500 font-bold hover:text-red-700"
                      onClick={() => removeFoodItem(index)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        
        {/* Delivery Charges */}
        <div className="flex justify-between mt-4 text-lg">
          <span>{t.Charges}:</span>
          <span>
            {DELIVERY_CHARGES[formData.city] === 0 ? "Free" : `${DELIVERY_CHARGES[formData.city]} AED`}
          </span>
        </div>

        <div className="flex justify-between mt-4 text-lg font-bold">
          <span>{t.total}:</span>
          <span>{calculateTotal()} AED</span>
        </div>        
        
        {/* Client Entries Section */}
        <div className="border rounded-lg p-4 my-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">{t.clientEntries}</h2>
          <div className="space-y-2">
            {[
              { label: t.name, value: formData.name },
              { label: t.email, value: formData.email }, // No truncation
              { label: t.city, value: formData.city },
              { label: t.phone, value: formData.countryCode ? `${formData.countryCode} ${formData.phone}` : formData.phone },
              { label: t.guests, value: formData.guests },
              { label: t.eventDate, value: formData.eventDate },
            ].map((item, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="font-medium">{item.label}:</span>
                <span className="truncate max-w-xs md:max-w-full">
                  {item.value || "N/A"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-left my-5 rounded-lg">
        <p><strong>Special Offer: </strong><br /> Order Package 3 or higher and get a complimentary Beverage or Perfume with your order.</p>
      </div> */}

        {/* Place Order Button */}
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-green-600"
          onClick={handleOrderSubmit}>
          {t.order}
        </button>

        {/* Thank You Popup */}
        {showThankYouPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold mb-4">{t.thankYouTitle}</h2>
              <p>{t.thankYouMessage}</p>
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                onClick={() => setShowThankYouPopup(false)}
              >
                Close
              </button>
            </div>
          </div>  
        )}
      </div>
    </div>
  );
};

export default Cart;