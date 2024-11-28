"use client";

import { useState } from "react";

export default function Cta() {
  const cafes = [
    { name: "Cafe A", description: "Tempat nyaman untuk bersantai", icon: "☕", photo: "/images/cafe-a.jpg" },
    { name: "Cafe B", description: "Menyajikan dessert yang lezat", icon: "🍰", photo: "/images/cafe-b.jpg" },
    { name: "Cafe C", description: "Suasana hijau dan tenang", icon: "🌿", photo: "/images/cafe-c.jpg" },
    { name: "Cafe D", description: "Makanan enak dengan pemandangan indah", icon: "🍽️", photo: "/images/cafe-d.jpg" },
    { name: "Cafe E", description: "Cocok untuk bekerja dan belajar", icon: "📚", photo: "/images/cafe-e.jpg" },
    { name: "Cafe F", description: "Pilihan kue yang beragam dan nikmat", icon: "🧁", photo: "/images/cafe-f.jpg" },
    { name: "Cafe G", description: "Spesialis minuman teh dengan suasana santai", icon: "🍵", photo: "/images/cafe-g.jpg" },
    { name: "Cafe H", description: "Menawarkan menu sehat dan organik", icon: "🥗", photo: "/images/cafe-h.jpg" },
  ];

  const [selectedCafe, setSelectedCafe] = useState(null);

  const openPopup = (cafe) => {
    setSelectedCafe(cafe);
  };

  const closePopup = () => {
    setSelectedCafe(null);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Rekomendasi Cafe di Bogor</h2>
          <ul className="space-y-4 text-left mx-auto max-w-md text-gray-700">
            {cafes.map((cafe, index) => (
              <li
                key={index}
                onClick={() => openPopup(cafe)}
                className="cursor-pointer hover:text-blue-600"
              >
                {cafe.icon} {cafe.name} - {cafe.description}
              </li>
            ))}
          </ul>
          <div className="mt-6">
          <a
  className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow hover:bg-blue-400"
  href="https://www.example.com" // Replace with your website's URL
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="relative inline-flex items-center">
    Kunjungi Website{" "}
    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
      -&gt;
    </span>
  </span>
</a>

          </div>
        </div>
      </div>

      {selectedCafe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-xs text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              {selectedCafe.icon} {selectedCafe.name}
            </h3>
            <img src={selectedCafe.photo} alt={selectedCafe.name} className="mb-4 w-full h-48 object-cover rounded-lg" />
            <p className="text-gray-700 mb-4">{selectedCafe.description}</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
