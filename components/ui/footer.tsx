import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-brown-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Cruip.com - All rights reserved.
            </div>
          </div>

          {/* Contact block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  className="hover:text-gray-900"
                  href="https://instagram.com"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900"
                  href="https://twitter.com"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <span className="block">No HP: <span className="font-semibold">0812-3456-7890</span></span>
              </li>
            </ul>
          </div>

          {/* Additional block for company info */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <h3 className="text-lg font-bold text-gray-800">About Us</h3>
            <p className="text-sm text-gray-600">
              We are dedicated to providing the best cafe recommendations in Bogor. Explore our site for more information!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
