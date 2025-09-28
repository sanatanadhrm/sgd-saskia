// components/SWOTSection.js
import React from "react";

const SWOTSection = () => {
  return (
    <section
      id="swot"
      className="py-16 text-white"
      style={{
        background: `linear-gradient(135deg, #c08b2f 0%, #2e7d32 100%)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔎 Analisis SWOT – Program Minyak Jelantah Jadi Sabun
          </h2>
          <p className="text-lg text-white/80">
            Menilai kekuatan, kelemahan, peluang, dan ancaman dalam mendukung
            SDG 12: Responsible Consumption and Production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strengths */}
          <div className="backdrop-blur-sm rounded-xl p-6 bg-white/10">
            <h3 className="text-2xl font-bold mb-4 text-green-200">
              Strengths (Kekuatan)
            </h3>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>
                Mengurangi pencemaran lingkungan akibat pembuangan minyak
                jelantah.
              </li>
              <li>
                Menghasilkan produk ramah lingkungan yang bermanfaat sehari-hari
                (sabun).
              </li>
              <li>
                Biaya produksi rendah, bahan baku mudah diperoleh dari limbah
                rumah tangga.
              </li>
              <li>
                Mendukung pencapaian SDG 12 dan meningkatkan kesadaran konsumsi
                berkelanjutan.
              </li>
              <li>
                Dapat dijadikan peluang usaha sosial (sosial entrepreneurship).
              </li>
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="backdrop-blur-sm rounded-xl p-6 bg-white/10">
            <h3 className="text-2xl font-bold mb-4 text-red-200">
              Weaknesses (Kelemahan)
            </h3>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>
                Perlu keterampilan khusus dalam proses pembuatan agar sabun aman
                digunakan.
              </li>
              <li>
                Keterbatasan pengetahuan masyarakat tentang teknik pengolahan
                minyak jelantah.
              </li>
              <li>
                Produksi skala kecil sulit bersaing dengan produk komersial
                besar.
              </li>
              <li>
                Proses membutuhkan waktu (misalnya sabun harus didiamkan hingga
                keras).
              </li>
              <li>
                Potensi bau minyak jika tidak disaring atau diolah dengan benar.
              </li>
            </ul>
          </div>

          {/* Opportunities */}
          <div className="backdrop-blur-sm rounded-xl p-6 bg-white/10">
            <h3 className="text-2xl font-bold mb-4 text-yellow-200">
              Opportunities (Peluang)
            </h3>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>
                Tingginya volume minyak jelantah di Indonesia → bahan baku
                melimpah.
              </li>
              <li>
                Dukungan tren green lifestyle dan meningkatnya kesadaran
                masyarakat.
              </li>
              <li>
                Bisa dikembangkan sebagai program CSR perusahaan atau komunitas
                lingkungan.
              </li>
              <li>
                Potensi pasar eco-friendly products semakin besar, lokal maupun
                global.
              </li>
              <li>
                Mendukung ekonomi sirkular dan usaha mikro berbasis masyarakat.
              </li>
            </ul>
          </div>

          {/* Threats */}
          <div className="backdrop-blur-sm rounded-xl p-6 bg-white/10">
            <h3 className="text-2xl font-bold mb-4 text-orange-200">
              Threats (Ancaman)
            </h3>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>
                Kurangnya regulasi khusus tentang pengelolaan minyak jelantah
                rumah tangga.
              </li>
              <li>
                Risiko kesalahan teknis yang membuat sabun tidak aman dipakai.
              </li>
              <li>
                Persaingan dengan produk pembersih industri yang lebih murah dan
                mudah didapat.
              </li>
              <li>
                Kesadaran masyarakat masih rendah dalam memilah dan mengumpulkan
                minyak jelantah.
              </li>
              <li>
                Tantangan distribusi dan pemasaran produk hasil daur ulang.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SWOTSection;
