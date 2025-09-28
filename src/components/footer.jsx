// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      id="tentang"
      className="text-white py-12"
      style={{ backgroundColor: "#5d4037" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tentang Kami</h3>
            <p style={{ color: "#f9f9f9", opacity: 0.8 }}>
              Platform edukasi untuk meningkatkan kesadaran tentang konsumsi dan
              produksi yang bertanggung jawab sesuai dengan SDGs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul
              className="space-y-2"
              style={{ color: "#f9f9f9", opacity: 0.8 }}
            >
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                saskiaaedlida@gmail.com
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +62 812-1265-2525
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center"
          style={{
            borderTop: "1px solid #2e7d32",
            color: "#f9f9f9",
            opacity: 0.7,
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Responsible Consumption and
            Production. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
