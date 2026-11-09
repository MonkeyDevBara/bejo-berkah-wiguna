# PT. Bejo Berkah Wiguna — Website

Situs statis (HTML + CSS + ±1 KB JS), tanpa dependensi runtime. Mobile-first, mengikuti sistem desain *Heavy Industrial Editorial*.

## Menjalankan lokal

```sh
python3 -m http.server 5173
# buka http://127.0.0.1:5173/
```

## Struktur

```
index.html              beranda: Beranda, Bidang Usaha, Tentang, Legalitas, Kontak
bidang-usaha/*.html     7 halaman detail bidang usaha (DIHASILKAN, jangan diedit langsung)
scripts/build-pages.mjs generator halaman detail + isi/konten tiap divisi
assets/style.css        seluruh gaya (token warna/tipografi di :root)
assets/main.js          menu mobile + penanda menu aktif
assets/logo-160.webp    logo di header/footer
assets/icon-*.png, favicon-32.png, apple-touch-icon.png, ../favicon.ico   favicon (dari logo)
assets/fonts/           Barlow Condensed 600/700 + IBM Plex Sans (variable), woff2 latin, self-host
assets/img/             foto WebP 480/800/1200 px
manifest.webmanifest    ikon & warna tema untuk "tambah ke layar utama"
```

## Mengubah halaman detail

Teks, urutan, dan gambar tiap divisi ada di array `divisions` pada `scripts/build-pages.mjs`.
Header, footer, dan sprite ikon diambil dari `index.html`, jadi ubah di sana lalu jalankan:

```sh
node scripts/build-pages.mjs
```

## Catatan

- Logo: `/Users/mac/Downloads/bejo berkah wiguna.png` → `cwebp` (header) dan `sips` (favicon). Untuk mengganti logo, ulangi konversi tersebut ke nama file yang sama.
- Foto workshop, konstruksi, dan engineering dari materi desain. Foto Bejo Mining, Export-Import, Property, Cigarette, dan Palu & Gada berasal dari [Pexels](https://www.pexels.com) (lisensi Pexels: bebas dipakai komersial, atribusi tidak wajib). Ganti dengan foto perusahaan sendiri bila ada.
- Foto asli dikonversi: `sips -Z <lebar>` lalu `cwebp -q 72`.
- Nomor WhatsApp/telepon/email ada di `index.html` dan `scripts/build-pages.mjs` (cari `6287859999879`).
- URL kanonik dan Open Graph memakai `https://bejoberkahwiguna.web.id/`; sesuaikan bila domain berbeda.
