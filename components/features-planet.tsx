"use client";

import { useState } from "react";

export default function FeaturesPlanet() {
  // State to track selected region
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Sample data for cafes, categorized by region
  const regions = [
    {
      name: "Bogor Barat",
      cafes: [
        {
          name: "Cafe A",
          description: "Warkan suasana yang nyaman dengan berbagai pilihan kopi dan makanan ringan.",
          image: "/images/cafeA.jpg", 
          menuLink: "https://menukuliner.net/",
        },
        {
          name: "Cafe B",
          description: "Cafe B dikenal dengan kopi khasnya yang berkualitas dan pelayanan yang ramah.",
          image: "/images/cafeB.jpg",
          menuLink: "https://menukuliner.net/",
        },
      ],
    },
    {
      name: "Bogor Timur",
      cafes: [
        {
          name: "Cafe C",
          description: "Cafe C memiliki berbagai pilihan makanan dengan pemandangan indah.",
          image: "/images/cafeC.jpg",
          menuLink: "https://menukuliner.net/",
        },
        {
          name: "Cafe D",
          description: "Cafe D memiliki berbagai pilihan teh dan kue manis.",
          image: "/images/cafeD.jpg",
          menuLink: "https://menukuliner.net/",
        },
      ],
    },
    {
      name: "Bogor Selatan",
      cafes: [
        {
          name: "Cafe E",
          description: "Cafe E menawarkan pemandangan kota dan berbagai menu segar.",
          image: "/images/cafeE.jpg",
          menuLink: "https://menukuliner.net/",
        },
        {
          name: "Cafe F",
          description: "Cafe F cocok untuk bekerja dengan wifi cepat dan kopi enak.",
          image: "/images/cafeF.jpg",
          menuLink: "https://menukuliner.net/",
        },
      ],
    },
    {
      name: "Bogor Utara",
      cafes: [
        {
          name: "Cafe G",
          description: "Cafe G dikenal dengan suasana vintage dan menu spesialnya.",
          image: "/images/cafeG.jpg",
          menuLink: "https://menukuliner.net/",
        },
        {
          name: "Cafe H",
          description: "Cafe H menawarkan kopi single-origin dengan cita rasa lokal.",
          image: "/images/cafeH.jpg",
          menuLink: "https://menukuliner.net/",
        },
      ],
    },
    {
      name: "Tanah Sereal",
      cafes: [
        {
          name: "Cafe I",
          description: "Cafe I punya menu unik dan pemandangan yang instagrammable.",
          image: "/images/cafeI.jpg",
          menuLink: "https://menukuliner.net/",
        },
        {
          name: "Cafe J",
          description: "Cafe J menghadirkan live music untuk menemani kopi Anda.",
          image: "/images/cafeJ.jpg",
          menuLink: "https://menukuliner.net/",
        },
      ],
    },
  ];

  // Function to set the selected region
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  return (
    <section className="relative bg-[#F5F5DC] py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
          <h2 className="text-3xl font-bold text-brown-800 md:text-4xl">
            Rekomendasi Cafe Terbaik di Bogor
          </h2>
          <p className="text-lg text-brown-600">
            Pilih daerah yang Anda inginkan untuk menemukan cafe-cafe terbaik!
          </p>
        </div>

        {/* Regions List */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <div
              key={index}
              onClick={() => handleRegionSelect(region)}
              className="rounded-lg p-6 bg-brown-100 shadow-md cursor-pointer text-center"
            >
              <h3 className="mb-4 text-lg font-medium text-brown-800">{region.name}</h3>
              <p className="text-sm text-brown-700">Klik untuk melihat cafe-cafe di {region.name}</p>
            </div>
          ))}
        </div>

        {/* Show cafes based on selected region */}
        {selectedRegion && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-brown-800 mb-6">
              Cafe-cafe di {selectedRegion.name}
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {selectedRegion.cafes.map((cafe, index) => (
                <article
                  key={index}
                  className="rounded-lg p-6 bg-brown-100 shadow-md"
                >
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="mb-2 text-lg font-medium text-brown-800">{cafe.name}</h3>
                  <p className="text-sm text-brown-700">{cafe.description}</p>
                  <a
                    href={cafe.menuLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-600 font-semibold mt-4 block"
                  >
                    Selengkapnya
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
