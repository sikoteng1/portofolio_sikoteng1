# 📊 Setup Google Spreadsheet untuk Projects

## 🎯 Cara Setup

### 1. Buat Google API Key

1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang sudah ada
3. Aktifkan **Google Sheets API**:
   - Pergi ke "APIs & Services" > "Library"
   - Cari "Google Sheets API"
   - Klik "Enable"
4. Buat API Key:
   - Pergi ke "APIs & Services" > "Credentials"
   - Klik "Create Credentials" > "API Key"
   - Copy API Key yang dihasilkan
5. (Opsional) Restrict API Key:
   - Klik API Key yang baru dibuat
   - Di "API restrictions", pilih "Restrict key"
   - Pilih "Google Sheets API"
   - Di "Website restrictions", tambahkan domain website kamu

### 2. Setup Spreadsheet

1. Buka spreadsheet kamu: https://docs.google.com/spreadsheets/d/1e7FC4R_R0ZNjE6Yf38nydB9eK6nuZ9whaxkrNuuyTus/edit
2. Pastikan **sharing settings** di-set ke **"Anyone with the link can view"**
3. Buat struktur kolom seperti di bawah ini

### 3. Update Code

Buka file `index.html` dan cari bagian ini (sekitar baris 970):

```javascript
const SPREADSHEET_ID = '1e7FC4R_R0ZNjE6Yf38nydB9eK6nuZ9whaxkrNuuyTus';
const SHEET_NAME = 'Sheet1'; // Ganti dengan nama sheet kamu
const API_KEY = 'AIzaSyDummyKeyPleaseReplaceWithYourOwnKey'; // GANTI INI!
```

Ganti `API_KEY` dengan API Key yang kamu dapat dari Google Cloud Console.

---

## 📋 Struktur Spreadsheet

Buat kolom-kolom berikut di **baris pertama** (header):

| title | description | category | date | link | icon | color | type |
|-------|-------------|----------|------|------|------|-------|------|

### Penjelasan Kolom:

- **title**: Judul project (contoh: "Hajj & Umroh CHWR")
- **description**: Deskripsi singkat project
- **category**: Kategori project (contoh: "Landing Page", "Website", "Bot Auto", "Automation")
- **date**: Tanggal project (contoh: "Jun 2025", "Dec 2024")
- **link**: URL link ke project (contoh: "https://www.cahayahatiwisatareligi.com/")
- **icon**: Icon FontAwesome (contoh: "fa-kaaba", "fa-rocket", "fa-code") - **Lihat ICON_LIST.md untuk daftar lengkap!**
- **color**: Warna tema (pilihan: `purple`, `gold`, `blue`, `green`, `red`)
- **type**: Tipe project (pilihan: `highlight` atau `other`)
  - `highlight` = Ditampilkan di bagian atas (2 kolom besar)
  - `other` = Ditampilkan di modal "Other Projects" (4 kolom kecil)

---

## 📝 Contoh Data

### Baris 1 (Header):
```
title | description | category | date | link | icon | color | type
```

### Baris 2 (Highlight Project):
```
Hajj & Umroh CHWR | Halaman landing page utama travel haji dan umroh untuk Cahaya Hati Wisata Religi. | Landing Page | Jun 2025 | https://www.cahayahatiwisatareligi.com/ | fa-kaaba | gold | highlight
```

### Baris 3 (Highlight Project):
```
Notion DB to Sheet | Sistem otomatisasi tracking konten HIT Travel dari Notion ke ekosistem Google Sheet dengan Apps Script. | Automation | Apr 2026 | https://script.google.com/... | fa-table | purple | highlight
```

### Baris 4 (Other Project):
```
Booking Service | Website layanan booking servis motor tugas IDN. | Website | Dec 2024 | https://servismotor.sikoteng.my.id/ | fa-motorcycle | purple | other
```

### Baris 5 (Other Project):
```
Telegram Bot (n8n) | Otomatisasi bot Telegram cerdas terintegrasi n8n. | Bot Auto | Jul 2025 | https://t.me/sikoteng1_bot | fa-telegram-plane | blue | other
```

---

## 🎨 Daftar Icon FontAwesome

**Lihat file `ICON_LIST.md` untuk daftar lengkap 200+ icon!**

### Icon Populer:

**Web & Tech:**
```
fa-code          fa-laptop-code    fa-rocket        fa-database
fa-server        fa-cloud          fa-globe         fa-terminal
```

**Social Media:**
```
fa-whatsapp      fa-telegram-plane fa-instagram     fa-facebook
fa-twitter       fa-linkedin       fa-youtube       fa-tiktok
```

**Business:**
```
fa-shopping-cart fa-briefcase      fa-chart-line    fa-money-bill
fa-store         fa-credit-card    fa-handshake     fa-receipt
```

**Transport:**
```
fa-car           fa-motorcycle     fa-plane         fa-rocket
fa-ship          fa-bicycle        fa-truck         fa-bus
```

**Places:**
```
fa-home          fa-building       fa-kaaba         fa-mosque
fa-hospital      fa-school         fa-hotel         fa-store-alt
```

**Media:**
```
fa-camera        fa-video          fa-music         fa-image
fa-film          fa-microphone     fa-headphones    fa-play
```

**Lihat lebih lengkap:** Buka file **`ICON_LIST.md`** atau kunjungi https://fontawesome.com/icons

---

## 🎨 Pilihan Warna

- **purple** - Ungu (default)
- **gold** - Emas/Kuning
- **blue** - Biru
- **green** - Hijau
- **red** - Merah

---

## ✅ Testing

Setelah setup:

1. Buka website kamu
2. Buka **Developer Console** (F12)
3. Cek apakah ada error
4. Projects seharusnya muncul otomatis dari spreadsheet

---

## 🔄 Update Projects

Untuk menambah/edit/hapus project:

1. Edit spreadsheet kamu
2. Refresh website
3. Projects akan update otomatis!

**Tidak perlu edit HTML lagi!** 🎉

---

## ⚠️ Troubleshooting

### Projects tidak muncul?

1. **Cek API Key**: Pastikan API Key sudah benar
2. **Cek Spreadsheet ID**: Pastikan ID spreadsheet benar
3. **Cek Sheet Name**: Pastikan nama sheet benar (default: "Sheet1")
4. **Cek Sharing**: Pastikan spreadsheet bisa diakses publik
5. **Cek Console**: Buka F12 dan lihat error di Console

### Error "API Key not valid"?

- Pastikan Google Sheets API sudah diaktifkan
- Pastikan API Key tidak ada spasi atau karakter tambahan
- Coba buat API Key baru

### Projects lama masih muncul?

- Website menggunakan **fallback** ke HTML static jika fetch gagal
- Pastikan tidak ada error di Console
- Hard refresh browser (Ctrl + Shift + R)

---

## 📞 Butuh Bantuan?

Jika ada masalah, hubungi developer atau cek dokumentasi Google Sheets API:
https://developers.google.com/sheets/api/guides/concepts

---

**Happy Coding! 🚀**
