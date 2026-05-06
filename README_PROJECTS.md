# 🚀 Dynamic Projects dengan Google Spreadsheet

## 📌 Quick Start

### 1️⃣ Setup Google API Key (5 menit)
1. Buka https://console.cloud.google.com/
2. Aktifkan **Google Sheets API**
3. Buat **API Key**
4. Copy API Key

### 2️⃣ Setup Spreadsheet (2 menit)
1. Buka spreadsheet kamu: https://docs.google.com/spreadsheets/d/1e7FC4R_R0ZNjE6Yf38nydB9eK6nuZ9whaxkrNuuyTus/edit
2. Set sharing ke **"Anyone with the link can view"**
3. Import file `projects_template.csv` atau buat manual dengan struktur:

```
title | description | category | date | link | icon | color | type
```

### 3️⃣ Update Code (1 menit)
Buka `index.html`, cari baris ~970, ganti:

```javascript
const API_KEY = 'AIzaSyDummyKeyPleaseReplaceWithYourOwnKey'; // GANTI INI!
```

Dengan API Key kamu.

### 4️⃣ Test Connection
Buka `test_sheets_connection.html` di browser untuk test koneksi.

---

## 📊 Struktur Data Spreadsheet

| Kolom | Contoh | Keterangan |
|-------|--------|------------|
| **title** | "Hajj & Umroh CHWR" | Judul project |
| **description** | "Landing page travel haji..." | Deskripsi singkat |
| **category** | "Landing Page" | Kategori/tag |
| **date** | "Jun 2025" | Tanggal project |
| **link** | "https://example.com" | URL project |
| **color** | "gold" | Warna: purple/gold/blue/green/red |
| **type** | "highlight" | highlight = besar, other = kecil |

---

## 🎨 Color Options

- `purple` - Ungu (default)
- `gold` - Emas/Kuning
- `blue` - Biru
- `green` - Hijau
- `red` - Merah

---

## 📝 Contoh Data

### Highlight Project (Ditampilkan besar di atas):
```
Hajj & Umroh CHWR | Halaman landing page utama travel haji dan umroh | Landing Page | Jun 2025 | https://www.cahayahatiwisatareligi.com/ | gold | highlight
```

### Other Project (Ditampilkan kecil di modal):
```
Booking Service | Website layanan booking servis motor | Website | Dec 2024 | https://servismotor.sikoteng.my.id/ | purple | other
```

---

## ✅ Cara Menambah Project Baru

1. Buka spreadsheet
2. Tambah baris baru
3. Isi semua kolom
4. Refresh website
5. Done! 🎉

**Tidak perlu edit HTML lagi!**

---

## 🔧 Files

- `index.html` - Website utama (sudah terintegrasi)
- `GOOGLE_SHEETS_SETUP.md` - Panduan lengkap setup
- `projects_template.csv` - Template data untuk import
- `test_sheets_connection.html` - Tool untuk test koneksi
- `README_PROJECTS.md` - Quick reference (file ini)

---

## ⚠️ Troubleshooting

### Projects tidak muncul?
1. Cek API Key di `index.html`
2. Cek spreadsheet sudah public
3. Buka F12 Console, lihat error
4. Test dengan `test_sheets_connection.html`

### Error "API Key not valid"?
- Pastikan Google Sheets API sudah enabled
- Coba buat API Key baru
- Cek tidak ada spasi di API Key

---

## 📞 Support

Baca dokumentasi lengkap: `GOOGLE_SHEETS_SETUP.md`

---

**Made with ❤️ by Raden Alief**
