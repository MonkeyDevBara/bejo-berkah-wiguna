// Membuat halaman detail bidang usaha: bidang-usaha/<slug>.html
// Header, footer, dan sprite ikon diambil dari index.html (satu sumber).
// Jalankan: node scripts/build-pages.mjs

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const index = readFileSync(join(root, "index.html"), "utf8");
const SITE = "https://bejoberkahwiguna.web.id";
const WA = "https://wa.me/6287859999879";

const divisions = [
  {
    slug: "bejo-construction", num: "01", code: "DIV-CONST", name: "Bejo Construction",
    category: "Konstruksi baja &amp; sipil",
    lead: "Konstruksi baja dan sipil, rancang bangun struktur berat, renovasi infrastruktur pabrik, dan pembangunan residensial komersial dengan perhitungan engineering terukur.",
    intro: "Bejo Construction menangani pekerjaan konstruksi mulai dari perencanaan hingga pelaksanaan, dengan fokus pada struktur baja dan pekerjaan sipil untuk kebutuhan industri maupun komersial.",
    img: "construction", imgH: 670, caption: "Heavy structural erection",
    alt: "Rangka baja struktural sedang dirakit di lokasi proyek dengan crane dan pekerja las",
    scopeTitle: "Ruang lingkup layanan",
    scope: [
      ["Konstruksi struktur baja", "Fabrikasi dan pemasangan rangka baja seperti WF dan H-Beam untuk pabrik, gudang, dan bangunan komersial."],
      ["Pekerjaan sipil &amp; pondasi", "Pekerjaan tanah, pondasi, dan beton sesuai kebutuhan beban bangunan."],
      ["Rancang bangun", "Perencanaan dan pelaksanaan dalam satu paket (design &amp; build) dengan perhitungan engineering terukur."],
      ["Renovasi infrastruktur pabrik", "Perbaikan, penguatan, dan perluasan fasilitas pabrik yang sudah berjalan."],
      ["Residensial &amp; komersial", "Pembangunan hunian dan bangunan komersial sesuai spesifikasi dan anggaran yang disepakati."],
      ["Pengawasan pelaksanaan", "Pemantauan jadwal, mutu pekerjaan, dan keselamatan kerja selama proyek berjalan."],
    ],
  },
  {
    slug: "bejo-property", num: "02", code: "DIV-PROP", name: "Bejo Property",
    category: "Properti &amp; pergudangan",
    lead: "Jual, beli &amp; sewa properti domestik dan internasional untuk aset industri, pergudangan terpadu, lahan komersial, dan hunian strategis berlegalitas aman.",
    intro: "Bejo Property melayani transaksi properti untuk kebutuhan usaha maupun hunian, dengan perhatian pada kejelasan legalitas aset sebelum transaksi dilakukan.",
    img: "property", imgH: 800, caption: "Industrial estate &amp; warehouse",
    alt: "Bangunan industri dengan struktur beton, atap logam, dan tangga akses berwarna kuning",
    scopeTitle: "Ruang lingkup layanan",
    scope: [
      ["Jual beli properti", "Pendampingan transaksi pembelian dan penjualan properti di dalam maupun luar negeri."],
      ["Sewa menyewa", "Penyewaan bangunan dan lahan untuk kebutuhan usaha jangka pendek maupun panjang."],
      ["Aset industri", "Bangunan dan kawasan yang sesuai untuk kegiatan produksi dan fabrikasi."],
      ["Pergudangan terpadu", "Gudang untuk penyimpanan dan distribusi barang."],
      ["Lahan komersial", "Lahan untuk pengembangan usaha, perkantoran, atau fasilitas pendukung."],
      ["Pengecekan legalitas", "Bantuan memeriksa kelengkapan dokumen seperti sertifikat dan perizinan sebelum transaksi."],
    ],
  },
  {
    slug: "bejo-technic-engineering", num: "03", code: "DIV-TECH", name: "Bejo Technic Engineering",
    category: "Mesin industri &amp; fabrikasi",
    lead: "Rancang bangun rekayasa teknik, maintenance preventif, fabrikasi suku cadang presisi tinggi, dan pengadaan item mesin pabrikasi terpadu.",
    intro: "Bejo Technic Engineering mendukung kebutuhan teknis pabrik, dari perawatan mesin yang sedang berjalan hingga pembuatan komponen sesuai gambar atau sampel.",
    img: "engineering", imgH: 670, caption: "Presisi &amp; fabrikasi",
    alt: "Teknisi merakit silinder hidrolik dan roda gigi presisi di meja kerja baja",
    scopeTitle: "Ruang lingkup layanan",
    scope: [
      ["Rancang bangun rekayasa teknik", "Perancangan dan pembuatan peralatan atau sistem mekanik sesuai kebutuhan operasional."],
      ["Maintenance preventif", "Perawatan terjadwal untuk menjaga mesin tetap andal dan mengurangi risiko kerusakan mendadak."],
      ["Fabrikasi suku cadang presisi", "Pembuatan komponen dengan toleransi presisi tinggi."],
      ["Reverse engineering", "Pembuatan ulang komponen dari sampel atau gambar teknis yang tersedia."],
      ["Pengadaan mesin pabrikasi", "Penyediaan item dan unit mesin untuk kebutuhan produksi."],
      ["Perbaikan komponen", "Pemeriksaan dan perbaikan komponen mekanikal seperti silinder hidrolik dan roda gigi."],
    ],
  },
  {
    slug: "bejo-mining", num: "04", code: "DIV-MINE", name: "Bejo Mining",
    category: "Energi &amp; batubara",
    lead: "Jual beli dan pasokan batubara berspesifikasi GAR terstandar untuk kebutuhan energi pembangkit dan tungku pembakaran industri.",
    intro: "Bejo Mining melayani jual beli batubara untuk pelaku industri yang membutuhkan sumber energi dengan spesifikasi kalori yang jelas.",
    img: "mining", imgH: 900, caption: "Energi &amp; kalori teruji",
    alt: "Truk angkut dan wheel loader di area tambang batubara terbuka",
    scopeTitle: "Ruang lingkup layanan",
    scope: [
      ["Jual beli batubara", "Perdagangan batubara sesuai kebutuhan volume dan jadwal pembeli."],
      ["Spesifikasi GAR", "Batubara dengan nilai kalori GAR (Gross As Received) yang disebutkan dan disepakati di awal."],
      ["Pembangkit energi", "Pasokan untuk kebutuhan bahan bakar pembangkit."],
      ["Tungku pembakaran industri", "Pasokan untuk proses pembakaran pada industri."],
      ["Informasi spesifikasi", "Penjelasan karakteristik dan kalori batubara sebelum kesepakatan."],
      ["Koordinasi pengiriman", "Pengaturan pengiriman sesuai lokasi dan jadwal yang disepakati."],
    ],
  },
  {
    slug: "bejo-export-import", num: "05", code: "DIV-EXIM", name: "Bejo Export-Import",
    category: "Perdagangan internasional",
    lead: "Perdagangan internasional komoditas pilihan: rokok, gaharu murni, minyak goreng kemasan, kopi Java, jagung pipil, dan kedelai berkualitas ekspor.",
    intro: "Bejo Export-Import menghubungkan komoditas Indonesia dengan pembeli di berbagai negara, termasuk koordinasi pengiriman dan kelengkapan dokumen perdagangan.",
    img: "exim", imgH: 800, caption: "Standar ekspor global",
    alt: "Peti kemas bertumpuk dan crane di terminal pelabuhan",
    scopeTitle: "Komoditas utama",
    scope: [
      ["Rokok", "Produk tembakau olahan untuk pasar dalam dan luar negeri."],
      ["Gaharu murni", "Komoditas hasil hutan yang banyak dicari untuk aroma dan wewangian."],
      ["Minyak goreng kemasan", "Minyak goreng dalam kemasan untuk kebutuhan konsumsi dan distribusi."],
      ["Kopi Java", "Kopi dari Pulau Jawa untuk pasar ekspor."],
      ["Jagung pipil", "Jagung pipil untuk kebutuhan pangan dan pakan."],
      ["Kedelai", "Kedelai untuk industri pangan dan olahan."],
    ],
  },
  {
    slug: "bejo-cigarette", num: "06", code: "DIV-CIGR", name: "Bejo Cigarette",
    category: "Mesin rokok sigaret",
    lead: "Spesialis jual beli, pengadaan baru dan rekondisi, serta peremajaan mesin pembuat (maker) dan mesin pengemas (packer) rokok industri sigaret.",
    intro: "Bejo Cigarette melayani pabrik rokok yang membutuhkan mesin produksi, baik unit baru maupun unit rekondisi, serta peremajaan mesin yang sudah beroperasi.",
    img: "tobacco", imgH: 798, caption: "Maker &amp; packer specialist",
    alt: "Pekerja memilah daun tembakau di lini produksi",
    scopeTitle: "Ruang lingkup layanan",
    scope: [
      ["Mesin maker", "Jual beli mesin pembuat batang rokok."],
      ["Mesin packer", "Jual beli mesin pengemas rokok."],
      ["Pengadaan unit baru", "Pencarian dan pengadaan mesin baru sesuai kapasitas produksi."],
      ["Unit rekondisi", "Penyediaan mesin bekas yang telah diperbaiki untuk dipakai kembali."],
      ["Peremajaan mesin", "Pembaruan komponen agar mesin lama kembali layak beroperasi."],
      ["Konsultasi kebutuhan", "Diskusi jenis mesin dan spesifikasi yang sesuai dengan lini produksi."],
    ],
  },
  {
    slug: "bejo-palu-gada", num: "07", code: "DIV-SUPP", name: "Bejo Palu &amp; Gada",
    category: "General technical supply",
    lead: "Penyediaan komprehensif item kebutuhan operasional, perlengkapan mekanikal, consumable parts, dan material teknis industri hulu-hilir.",
    intro: "Bejo Palu &amp; Gada menjadi satu pintu pengadaan untuk beragam kebutuhan teknis, sehingga pembeli tidak perlu menghubungi banyak pemasok.",
    img: "tools", imgH: 800, caption: "General technical supply",
    alt: "Kunci pas, palu, dan perkakas tangan di atas kotak peralatan",
    scopeTitle: "Ruang lingkup layanan",
    scope: [
      ["Kebutuhan operasional", "Barang pendukung kegiatan harian pabrik dan proyek."],
      ["Perlengkapan mekanikal", "Perkakas dan perlengkapan untuk pekerjaan mekanik."],
      ["Consumable parts", "Komponen habis pakai yang perlu diganti secara berkala."],
      ["Material teknis", "Material untuk fabrikasi, perawatan, dan konstruksi."],
      ["Pengadaan sesuai daftar", "Pemenuhan kebutuhan berdasarkan daftar barang dan spesifikasi dari pembeli."],
      ["Industri hulu-hilir", "Melayani kebutuhan dari tahap produksi awal hingga distribusi."],
    ],
  },
];

const steps = [
  ["01", "Konsultasi", "Sampaikan kebutuhan, jumlah, dan spesifikasi melalui WhatsApp atau telepon."],
  ["02", "Penawaran", "Kami menyiapkan penawaran dan rincian spesifikasi yang sesuai."],
  ["03", "Pelaksanaan", "Pengadaan atau pengerjaan berjalan sesuai kesepakatan dan jadwal yang disetujui."],
  ["04", "Serah terima", "Hasil diperiksa bersama, lalu diserahkan. Tim tetap dapat dihubungi untuk kebutuhan lanjutan."],
];

// ---------- potongan dari index.html ----------
const between = (start, endMarker) => {
  const i = index.indexOf(start);
  if (i < 0) throw new Error(`Penanda tidak ditemukan: ${start}`);
  const j = index.indexOf(endMarker, i);
  if (j < 0) throw new Error(`Penanda akhir tidak ditemukan: ${endMarker}`);
  return index.slice(i, j + endMarker.length);
};
const toSub = (html) =>
  html
    .replace(/href="#(?!i-)/g, 'href="../index.html#')
    .replaceAll('src="assets/', 'src="../assets/')
    .replaceAll('href="bidang-usaha/', 'href="');

const sprite = between("<!-- Sprite ikon -->", "</svg>");
const header = toSub(between('<div class="topbar">', "</header>"))
  .replace(' aria-current="true"', "")
  .replace('<a href="../index.html#bidang-usaha">', '<a href="../index.html#bidang-usaha" aria-current="true">');
const footer = toSub(between('<footer class="site-footer">', "</footer>"));
const waFloat = between('<a class="wa-float"', "</a>");

const strip = (s) => s.replace(/&amp;/g, "&");
const esc = (s) => s.replace(/&(?!amp;)/g, "&amp;").replace(/"/g, "&quot;");
const waLink = (name) => `${WA}?text=${encodeURIComponent(`Halo PT. Bejo Berkah Wiguna, saya ingin konsultasi mengenai ${strip(name)}`)}`;

const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;

function page(d, i) {
  const others = divisions.filter((o) => o !== d);
  const url = `${SITE}/bidang-usaha/${d.slug}.html`;
  const title = `${strip(d.name)} — PT. Bejo Berkah Wiguna`;
  const desc = strip(d.lead);
  const wa = waLink(d.name);
  const img = (w) => `../assets/img/${d.img}-${w}.webp`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="theme-color" content="#0b2545">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="../favicon.ico" sizes="48x48">
  <link rel="icon" href="../assets/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="icon" href="../assets/icon-192.png" type="image/png" sizes="192x192">
  <link rel="apple-touch-icon" href="../assets/apple-touch-icon.png">
  <link rel="manifest" href="../manifest.webmanifest">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="id_ID">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE}/assets/img/${d.img}-1200.webp">
  <link rel="preload" href="../assets/fonts/BarlowCondensed-700.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="../assets/fonts/IBMPlexSans.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="../assets/style.css">
  <script>document.documentElement.classList.add("js")</script>
  <script defer src="../assets/main.js"></script>
</head>
<body>
  ${sprite}

  <a class="skip" href="#konten">Lewati ke konten</a>

  ${header}

  <nav class="crumbs" aria-label="Breadcrumb">
    <div class="wrap">
      <ol>
        <li><a href="../index.html">Beranda</a></li>
        <li><a href="../index.html#bidang-usaha">Bidang Usaha</a></li>
        <li aria-current="page">${d.name}</li>
      </ol>
    </div>
  </nav>

  <main id="konten">
    <section class="hero page-hero">
      <div class="wrap hero-grid">
        <div>
          <span class="numeral" aria-hidden="true">${d.num}</span>
          <p class="kicker label">${d.category} · ${d.code}</p>
          <h1 class="h-xl">${d.name}</h1>
          <p class="lead">${d.lead}</p>
          <div class="hero-actions">
            <a class="btn btn-gold" href="${wa}" rel="noopener" target="_blank">${icon("i-whatsapp")}Konsultasi via WhatsApp</a>
            <a class="btn btn-outline" href="../index.html#bidang-usaha">Semua bidang usaha</a>
          </div>
        </div>
        <figure class="frame" style="margin:0">
          <div class="ph">
            <img src="${img(800)}"
                 srcset="${img(480)} 480w, ${img(800)} 800w, ${img(1200)} 1200w"
                 sizes="(min-width:1024px) 40vw, calc(100vw - 2rem)"
                 width="1200" height="${d.imgH}" fetchpriority="high" decoding="async"
                 alt="${esc(d.alt)}">
          </div>
          <figcaption class="label-sm"><span>${d.caption}</span><b>${d.code}</b></figcaption>
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <span class="label eyebrow">${d.scopeTitle}</span>
            <h2 class="h-xl">${d.name}</h2>
          </div>
          <p class="lead">${d.intro}</p>
        </div>
        <ul class="scope-grid">
${d.scope
  .map(
    ([t, p], n) => `          <li class="scope-item"><span class="numeral" aria-hidden="true">${String(n + 1).padStart(2, "0")}</span><h3 class="h-md">${t}</h3><p>${p}</p></li>`,
  )
  .join("\n")}
        </ul>
      </div>
    </section>

    <section class="section legal">
      <div class="wrap">
        <span class="label eyebrow">Alur kerja sama</span>
        <h2 class="h-xl">Dari konsultasi hingga serah terima</h2>
        <p class="lead">Proses sederhana dan terbuka, dengan komunikasi langsung bersama tim kami.</p>
        <div class="legal-grid cols-4">
${steps
  .map(
    ([n, t, p]) => `          <article class="doc"><span class="numeral" aria-hidden="true">${n}</span><h3 class="h-md">${t}</h3><p>${p}</p></article>`,
  )
  .join("\n")}
        </div>
      </div>
    </section>

    <section class="section about">
      <div class="wrap">
        <div class="section-head">
          <div>
            <span class="label eyebrow">Jelajahi grup</span>
            <h2 class="h-xl">Bidang usaha lainnya</h2>
          </div>
        </div>
        <div class="other-list">
${others
  .map(
    (o) => `          <a class="other" href="${o.slug}.html"><span class="numeral" aria-hidden="true">${o.num}</span><b>${o.name}</b><span class="label-sm">${o.category}</span></a>`,
  )
  .join("\n")}
        </div>
      </div>
    </section>

    <section class="section contact" id="kontak">
      <div class="wrap">
        <div class="cta">
          <div>
            <span class="label eyebrow">Layanan konsultasi pengadaan</span>
            <h2 class="h-lg">Tertarik dengan ${d.name}?</h2>
            <p class="lead">Ceritakan kebutuhan Anda, dan tim kami akan membantu menyiapkan solusi yang sesuai.</p>
          </div>
          <div class="cta-side">
            <a class="btn btn-gold btn-block" href="${wa}" rel="noopener" target="_blank">${icon("i-whatsapp")}Chat WhatsApp sekarang</a>
            <div class="phone"><span class="label">Saluran langsung</span><a href="tel:+6287859999879">0878 5999 9879</a></div>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${footer}

  ${waFloat}
</body>
</html>
`;
}

mkdirSync(join(root, "bidang-usaha"), { recursive: true });
divisions.forEach((d, i) => writeFileSync(join(root, "bidang-usaha", `${d.slug}.html`), page(d, i)));
console.log(`Dibuat ${divisions.length} halaman di bidang-usaha/`);
