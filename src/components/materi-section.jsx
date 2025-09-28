// components/MateriSection.js
import React from "react";

const MateriSection = () => {
  const materiList = [
    {
      id: 1,
      title: "Empati dan Penelitian (Empathy and Research)",
      description:
        "Indonesia menghasilkan jutaan liter minyak jelantah setiap tahunnya. Sayangnya, sebagian besar dibuang sembarangan ke saluran air atau tanah. Hal ini menimbulkan pencemaran lingkungan, merusak ekosistem, dan membahayakan kesehatan. Dari hasil penelitian, banyak masyarakat belum menyadari potensi daur ulang minyak jelantah menjadi produk bermanfaat seperti sabun.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Ide (Ideation)",
      description:
        "Untuk mengurangi pencemaran, lahirlah ide mengolah minyak jelantah menjadi sabun ramah lingkungan. Inovasi ini mendukung tujuan SDG 12, yaitu konsumsi dan produksi yang bertanggung jawab, dengan cara memanfaatkan kembali limbah agar tidak menjadi beban lingkungan.",
      icon: "💡",
    },
    {
      id: 3,
      title: "Pembuatan Prototipe (Prototyping)",
      description:
        "Proses pembuatan sabun dari minyak jelantah meliputi:\n1. Penyaringan minyak jelantah agar bersih dari sisa makanan.\n2. Pencampuran minyak dengan larutan soda api (NaOH).\n3. Penambahan bahan alami seperti jeruk, sereh, atau lavender sebagai pewangi.\n4. Pencetakan adonan sabun dan didiamkan hingga mengeras.\nHasilnya, sabun ramah lingkungan siap digunakan.",
      icon: "🧪",
    },
    {
      id: 4,
      title: "Pengujian dan Peninjauan (Testing and Review)",
      description:
        "Sabun diuji dari aspek:\n1. Efektivitas membersihkan: mampu mencuci piring dan tangan dengan baik.\n2. Keamanan: sabun aman digunakan setelah proses netralisasi sempurna.\n3. Respon pengguna: banyak yang merasakan manfaat, terutama sebagai alternatif murah dan ramah lingkungan.",
      icon: "✅",
    },
    {
      id: 5,
      title: "Refleksi (Reflection)",
      description:
        "Proyek ini membuktikan bahwa limbah bisa diubah menjadi peluang. Minyak jelantah yang biasanya mencemari lingkungan dapat menjadi produk baru yang berguna, sekaligus mengurangi ketergantungan pada produk komersial berbahan kimia.\nDengan langkah kecil ini, masyarakat bisa berkontribusi nyata pada SDG 12: Responsible Consumption and Production untuk masa depan yang lebih hijau.",
      icon: "🌍",
    },
  ];

  return (
    <section
      id="materi"
      className="py-16"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#c08b2f" }}
          >
            SDG 12: Responsible Consumption and Production
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "#5d4037" }}>
            Setiap hari, manusia menggunakan sumber daya alam dalam jumlah besar
            untuk memenuhi kebutuhan hidup. Sayangnya, banyak yang terbuang dan
            berakhir menjadi limbah. SDG 12 hadir untuk mengingatkan kita bahwa
            cara kita memproduksi dan mengonsumsi menentukan masa depan bumi. Di
            Indonesia, salah satu contoh nyata adalah minyak jelantah. Minyak
            goreng bekas ini sering dibuang begitu saja ke saluran air atau
            dipakai ulang untuk memasak, padahal keduanya berbahaya. Padahal,
            minyak jelantah bisa diolah kembali menjadi produk bermanfaat
            seperti sabun ramah lingkungan.
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {materiList.map((materi) => (
            <div
              key={materi.id}
              className="rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 w-[30%]"
              style={{ backgroundColor: "white" }}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{materi.icon}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#2e7d32" }}
                >
                  {materi.title}
                </h3>
                {/* agar support line-break di description */}
                <p
                  className="mb-4 whitespace-pre-line"
                  style={{ color: "#5d4037" }}
                >
                  {materi.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MateriSection;
