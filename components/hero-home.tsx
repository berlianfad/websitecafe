import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative bg-[#D2B48C]"> {/* Slightly darker brown background */}
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Header section */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-brown-900 md:text-6xl" // Darker brown text
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Temukan Cafe Terbaik di Bogor!
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-800" // Slightly darker gray text
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Pilihan cafe nyaman di Bogor untuk bersantai dan menikmati kopi serta suasana. Dari view pegunungan hingga tempat yang instagrammable, semua ada di sini.
              </p>
              <div className="flex justify-center">
                <a
                  className="btn rounded-full w-40 bg-gradient-to-b from-gray-800 to-brown-700 text-white shadow-lg hover:bg-brown-800 transition-all duration-300"
                  href="#0"
                >
                  Download E-Book
                </a>
              </div>
            </div>
          </div>
          {/* Cafe Recommendations Section */}
          <div className="mx-auto max-w-4xl mt-12 bg-[#FAF3E0] p-8 rounded-lg shadow-md border border-brown-400">
            <h2 className="text-2xl font-semibold text-brown-900 text-center mb-6">
              Rekomendasi Cafe Bogor
            </h2>
            <div className="font-mono text-center text-gray-800 space-y-4">
              <p>📍 Cafe Sejuk dengan View Pegunungan</p>
              <p>☕️ Kopi dan Menu Unik</p>
              <p>🖼 Tempat Instagrammable</p>
              <p>👥 Cocok untuk Kumpul Bareng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
