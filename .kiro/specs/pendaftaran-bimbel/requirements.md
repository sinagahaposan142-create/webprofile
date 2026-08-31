# Requirements Document

## Introduction

Dokumen ini menurunkan kebutuhan (requirements) untuk fitur **Pendaftaran Bimbel Widya Nusantara Academy** (bagian dari Rubela Indonesia / Rubela UTBK Indonesia) dari dokumen desain yang sudah disetujui (`design.md`). Fitur dibangun **langsung di dalam** proyek webprofile yang sudah ada (Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4) dan menggantikan pencatatan manual berbasis Google Sheets dengan sistem terintegrasi: **formulir pendaftaran**, **halaman pembayaran dua metode** (Transfer Bank Neo dan QRIS), **unggah bukti pembayaran**, dan **Dashboard Admin** untuk verifikasi manual serta pengelolaan data pendaftar.

Ketentuan program yang dikonfirmasi: biaya **Rp160.000 untuk 5 bulan**, **kuota 100 murid**, dan **periode pendaftaran 6 April 2026 – 27 September 2026 (WIB)**. Seluruh *timestamp* memakai **waktu server nyata** (disimpan UTC, ditampilkan WIB). Halaman publik dan admin **wajib memakai design system RUBELA** serta komponen UI/layout yang sudah tersedia (`Navbar`, `Footer`, `Container`, `Section`, `Heading`, `Card`, `Button`, `Badge`, `CTA`) agar konsisten dengan webprofile, dan **responsif** untuk smartphone, tablet, dan laptop.

Acceptance criteria ditulis mengikuti pola EARS dengan frasa Bahasa Indonesia (mis. `KETIKA ... MAKA sistem HARUS ...`, `JIKA ... MAKA sistem HARUS ...`, `SELAMA ... sistem HARUS ...`, `DI MANA ... sistem HARUS ...`).

## Glossary

- **Sistem**: Aplikasi pendaftaran bimbel Widya Nusantara Academy yang terintegrasi di dalam proyek webprofile (front-end Next.js + Route Handlers `src/app/api/...`).
- **Peserta**: Calon murid yang mengisi formulir pendaftaran dan mengunggah bukti pembayaran.
- **Admin**: Pengguna terautentikasi yang mengelola data pendaftar dan gambar QRIS melalui Dashboard Admin.
- **Pendaftar**: Record data satu peserta beserta status, metode pembayaran, dan bukti pembayaran.
- **Status Pendaftaran**: Salah satu dari `MENUNGGU_PEMBAYARAN`, `MENUNGGU_VERIFIKASI`, `TERVERIFIKASI`, `DITOLAK`.
- **Status Pendidikan**: Salah satu dari `SMA/sederajat Kelas 12`, `Gap Year 2025-2026`, `Semi Gap Year 2025-2026`.
- **Metode Pembayaran**: Salah satu dari `TRANSFER_BANK_NEO` atau `QRIS`.
- **Waktu Server Nyata**: Waktu aktual server (disimpan UTC, ditampilkan zona Asia/Jakarta/WIB), bukan waktu yang dikirim klien atau nilai hardcoded.
- **Kode Unik**: Tiga digit terakhir nominal transfer Bank Neo (`550`) untuk mempermudah verifikasi manual, menghasilkan nominal `Rp160.550`.
- **QRIS Aktif**: Gambar QRIS yang paling terakhir diunggah admin dan disajikan ke peserta melalui endpoint publik.
- **Design System RUBELA**: Kumpulan komponen UI dan gaya visual webprofile yang sudah ada.

## Requirements

### Requirement 1: Formulir Pendaftaran dan Validasi

**User Story:** Sebagai calon murid, saya ingin mengisi formulir pendaftaran bimbel dengan data diri saya, sehingga saya dapat mendaftar ke program Widya Nusantara Academy.

#### Acceptance Criteria

1. KETIKA Peserta membuka halaman pendaftaran, MAKA Sistem HARUS menampilkan formulir berisi field Nama Lengkap, Asal Sekolah, Tanggal Lahir, Status Pendidikan, Nomor WhatsApp, Username Instagram, dan Gmail Aktif menggunakan komponen design system RUBELA, dengan setiap field wajib ditandai secara visual sebagai wajib diisi.
2. JIKA Peserta mengirim formulir dengan satu atau lebih field wajib (Nama Lengkap, Asal Sekolah, Tanggal Lahir, Status Pendidikan, Nomor WhatsApp, Username Instagram, Gmail Aktif) kosong atau hanya berisi spasi setelah dipangkas, MAKA Sistem HARUS menolak pendaftaran, menampilkan pesan galat per-field yang menyatakan field tersebut wajib diisi, dan tidak menyimpan data apa pun.
3. JIKA nilai Nama Lengkap kurang dari 2 karakter atau lebih dari 100 karakter, ATAU nilai Asal Sekolah kurang dari 2 karakter atau lebih dari 150 karakter, MAKA Sistem HARUS menolak pendaftaran dan menampilkan pesan galat per-field yang menyebutkan batas panjang yang diperbolehkan.
4. JIKA nilai Gmail Aktif tidak berformat email valid (mengandung tepat satu `@`, bagian lokal dan domain tidak kosong, domain memuat minimal satu titik) atau melebihi 254 karakter, MAKA Sistem HARUS menolak pendaftaran dan menampilkan pesan galat format email.
5. JIKA Nomor WhatsApp tidak berupa rangkaian 8–15 digit dengan opsional awalan `+` atau `0`, MAKA Sistem HARUS menolak pendaftaran dan menampilkan pesan galat format nomor.
6. JIKA Username Instagram melebihi 30 karakter atau memuat karakter selain huruf, angka, titik, dan garis bawah (awalan `@` opsional dan diabaikan dalam validasi), MAKA Sistem HARUS menolak pendaftaran dan menampilkan pesan galat format username.
7. JIKA nilai Status Pendidikan bukan salah satu dari `SMA/sederajat Kelas 12`, `Gap Year 2025-2026`, atau `Semi Gap Year 2025-2026`, MAKA Sistem HARUS menolak pendaftaran dan menampilkan pesan galat pilihan tidak valid.
8. JIKA Tanggal Lahir bukan tanggal kalender valid, berada pada atau setelah tanggal hari ini, atau menghasilkan usia lebih dari 100 tahun, MAKA Sistem HARUS menolak pendaftaran dan menampilkan pesan galat.
9. KETIKA seluruh field lolos validasi server, MAKA Sistem HARUS menyimpan Pendaftar baru dengan status `MENUNGGU_PEMBAYARAN` dan mengarahkan Peserta ke halaman pembayaran dalam waktu maksimal 3 detik.
10. JIKA penyimpanan data Pendaftar gagal karena galat server, MAKA Sistem HARUS menolak pendaftaran, tidak menyimpan data sebagian, mempertahankan seluruh nilai yang telah diisi Peserta pada formulir, dan menampilkan pesan galat yang menyatakan pendaftaran gagal serta meminta Peserta mencoba lagi.
11. KETIKA Peserta mengisi, mengubah, atau meninggalkan (blur) sebuah field pada formulir, MAKA Sistem HARUS melakukan validasi sisi klien dan menampilkan atau menghapus pesan galat terkait dalam waktu maksimal 500 ms, dengan pesan galat tetap tampil utuh tanpa terpotong pada lebar viewport 320 px ke atas.

### Requirement 2: Penegakan Periode Pendaftaran

**User Story:** Sebagai penyelenggara program, saya ingin pendaftaran hanya diterima dalam periode resmi, sehingga proses seleksi dan operasional program berjalan sesuai jadwal.

#### Acceptance Criteria

1. THE Sistem HARUS menentukan kelayakan periode pendaftaran berdasarkan Waktu Server Nyata dalam zona waktu WIB (UTC+7), dan HARUS mengabaikan setiap nilai waktu, offset zona waktu, atau stempel waktu yang dikirim oleh klien.
2. THE Sistem HARUS mendefinisikan Periode Pendaftaran sebagai rentang inklusif mulai 6 April 2026 pukul 00:00:00,000 WIB sampai 27 September 2026 pukul 23:59:59,999 WIB.
3. KETIKA sebuah pendaftaran dikirim DAN Waktu Server Nyata berada pada atau setelah 6 April 2026 pukul 00:00:00,000 WIB DAN pada atau sebelum 27 September 2026 pukul 23:59:59,999 WIB, MAKA Sistem HARUS mengizinkan pemrosesan pendaftaran.
4. JIKA sebuah pendaftaran dikirim DAN Waktu Server Nyata lebih awal dari 6 April 2026 pukul 00:00:00,000 WIB, MAKA Sistem HARUS menolak pendaftaran, tidak menyimpan data pendaftaran, dan menampilkan pesan yang menyatakan bahwa pendaftaran belum dibuka beserta tanggal resmi pembukaan.
5. JIKA sebuah pendaftaran dikirim DAN Waktu Server Nyata lebih lambat dari 27 September 2026 pukul 23:59:59,999 WIB, MAKA Sistem HARUS menolak pendaftaran, tidak menyimpan data pendaftaran, dan menampilkan pesan yang menyatakan bahwa pendaftaran sudah ditutup beserta tanggal resmi penutupan.
6. KETIKA Waktu Server Nyata tepat berada pada batas awal 6 April 2026 pukul 00:00:00,000 WIB atau tepat pada batas akhir 27 September 2026 pukul 23:59:59,999 WIB, MAKA Sistem HARUS memperlakukan pendaftaran sebagai berada di dalam periode dan mengizinkan pemrosesan.
7. SELAMA Waktu Server Nyata berada di luar Periode Pendaftaran, THE Sistem HARUS menonaktifkan kontrol pengiriman formulir sehingga pengiriman tidak dapat dilakukan dan menampilkan informasi periode resmi (tanggal mulai dan tanggal berakhir dalam WIB).
8. JIKA Waktu Server Nyata tidak dapat ditentukan atau sumber waktu server gagal diakses, MAKA Sistem HARUS menolak pemrosesan pendaftaran, tidak menyimpan data pendaftaran, dan menampilkan pesan bahwa pendaftaran tidak dapat diproses untuk sementara.

### Requirement 3: Penegakan Kuota Maksimum

**User Story:** Sebagai penyelenggara program, saya ingin jumlah murid dibatasi maksimum 100 orang, sehingga kualitas bimbingan tetap terjaga sesuai kapasitas.

#### Acceptance Criteria

1. THE Sistem HARUS menegakkan kuota maksimum tepat 100 Pendaftar yang dihitung terhadap kuota, di mana yang dihitung hanya Pendaftar dengan status `MENUNGGU_PEMBAYARAN`, `MENUNGGU_VERIFIKASI`, atau `TERVERIFIKASI`, sedangkan status `DITOLAK` TIDAK dihitung terhadap kuota.
2. KETIKA jumlah Pendaftar yang dihitung terhadap kuota kurang dari 100 dan pendaftaran lolos seluruh aturan validasi, MAKA Sistem HARUS menerima pendaftaran tersebut dan menambah hitungan kuota sebesar 1 secara atomik.
3. JIKA jumlah Pendaftar yang dihitung terhadap kuota sudah mencapai 100, MAKA Sistem HARUS menolak pendaftaran baru tanpa mengubah hitungan kuota, mempertahankan data pendaftaran yang telah diisi (tidak menyimpannya), dan menampilkan pesan yang menyatakan kuota telah penuh.
4. KETIKA Peserta membuka halaman pendaftaran, MAKA Sistem HARUS menampilkan sisa kuota yang tersedia sebagai bilangan bulat dalam rentang 0 sampai 100, dihitung sebagai 100 dikurangi jumlah Pendaftar yang dihitung terhadap kuota.
5. KETIKA beberapa pendaftaran diproses secara bersamaan (konkuren), MAKA Sistem HARUS memproses pengecekan dan penambahan hitungan kuota sebagai satu operasi atomik (mutual exclusion), sehingga jumlah Pendaftar yang dihitung terhadap kuota tidak pernah melebihi 100 meskipun terdapat hingga 100 permintaan bersamaan.
6. JIKA dua pendaftaran atau lebih bersaing untuk slot terakhir (kuota tersisa 1) secara bersamaan, MAKA Sistem HARUS menerima tepat satu pendaftaran dan menolak pendaftaran lainnya dengan pesan kuota telah penuh, tanpa terjadi penerimaan ganda pada slot yang sama.

### Requirement 4: Halaman Pembayaran Dua Metode

**User Story:** Sebagai Peserta, saya ingin melihat instruksi pembayaran melalui Transfer Bank Neo atau QRIS, sehingga saya dapat membayar biaya program dengan metode yang saya pilih.

#### Acceptance Criteria

1. KETIKA Peserta membuka halaman pembayaran, MAKA Sistem HARUS menampilkan metode Transfer Bank Neo berupa nomor rekening `5859459250325726` atas nama `Haposan Sinaga` beserta nominal transfer `Rp160.550` dalam waktu paling lambat 3 detik sejak permintaan halaman diterima.
2. THE Sistem HARUS menghitung nominal transfer Bank Neo sebagai harga dasar `Rp160.000` yang tiga digit terakhirnya diganti Kode Unik `550`, sehingga menghasilkan tepat `Rp160.550`.
3. KETIKA menampilkan metode Transfer Bank Neo, MAKA Sistem HARUS menampilkan penjelasan bahwa Kode Unik pada nominal transfer digunakan untuk verifikasi manual.
4. KETIKA Peserta membuka halaman pembayaran, MAKA Sistem HARUS menampilkan metode Transfer Bank Neo sebagai metode default yang terpilih.
5. KETIKA Peserta memilih metode QRIS dan gambar QRIS Aktif tersedia, MAKA Sistem HARUS menampilkan gambar QRIS yang diambil dari endpoint publik `GET /api/payment/qris`, bukan gambar hardcoded, dalam waktu paling lambat 5 detik sejak metode QRIS dipilih.
6. SELAMA gambar QRIS sedang diambil dari endpoint `GET /api/payment/qris`, THE Sistem HARUS menampilkan indikator proses pemuatan (loading) pada area tampilan QRIS.
7. KETIKA Peserta berada di halaman pembayaran, MAKA Sistem HARUS mengizinkan Peserta memilih tepat satu Metode Pembayaran (`TRANSFER_BANK_NEO` atau `QRIS`) pada satu waktu.
8. JIKA belum ada gambar QRIS Aktif yang diunggah admin, MAKA Sistem HARUS menyembunyikan opsi QRIS ATAU menampilkan pesan bahwa QRIS sementara tidak tersedia, sementara opsi Transfer Bank Neo tetap tersedia dan tetap dapat dipilih.
9. JIKA permintaan gambar QRIS ke endpoint `GET /api/payment/qris` gagal atau melampaui batas waktu 5 detik, MAKA Sistem HARUS menampilkan pesan kesalahan yang menyatakan QRIS gagal dimuat beserta opsi untuk mencoba lagi, tanpa mengubah metode yang telah dipilih Peserta dan tanpa menghilangkan opsi Transfer Bank Neo.
10. JIKA berkas yang dikembalikan endpoint `GET /api/payment/qris` bukan gambar yang valid, MAKA Sistem HARUS memperlakukannya sebagai QRIS tidak tersedia dan menerapkan perilaku pada kriteria 8.

### Requirement 5: Unggah Bukti Pembayaran

**User Story:** Sebagai Peserta, saya ingin mengunggah bukti pembayaran, sehingga pendaftaran saya dapat diverifikasi oleh admin.

#### Acceptance Criteria

1. KETIKA Peserta memilih berkas bukti pembayaran bertipe MIME `image/jpeg` atau `image/png` dengan ukuran lebih dari 0 byte dan tidak melebihi 5 MB (5.242.880 byte), MAKA Sistem HARUS menerima berkas tersebut untuk diproses.
2. JIKA tipe MIME berkas yang dipilih bukan `image/jpeg` atau `image/png`, MAKA Sistem HARUS menolak unggahan, menampilkan pesan galat yang mengindikasikan tipe berkas tidak didukung, dan mempertahankan status Pendaftar tanpa perubahan.
3. JIKA ukuran berkas melebihi 5 MB (5.242.880 byte), MAKA Sistem HARUS menolak unggahan, menampilkan pesan galat yang mengindikasikan ukuran berkas melebihi batas, dan mempertahankan status Pendaftar tanpa perubahan.
4. JIKA berkas yang dipilih berukuran 0 byte atau tidak dapat dibaca sebagai gambar JPG/PNG yang sah, MAKA Sistem HARUS menolak unggahan, menampilkan pesan galat yang mengindikasikan berkas kosong atau rusak, dan mempertahankan status Pendaftar tanpa perubahan.
5. KETIKA Peserta memilih berkas gambar yang valid, MAKA Sistem HARUS menampilkan pratinjau berkas sebelum diunggah dalam waktu paling lama 2 detik sejak berkas dipilih.
6. KETIKA Peserta mengunggah bukti pembayaran yang valid beserta Metode Pembayaran yang dipilih, MAKA Sistem HARUS menyimpan berkas bukti, menyimpan Metode Pembayaran beserta referensi bukti, lalu mengubah status Pendaftar menjadi `MENUNGGU_VERIFIKASI` dalam waktu paling lama 5 detik.
7. KETIKA Peserta mengunggah ulang bukti untuk `registrationId` yang sama, MAKA Sistem HARUS menggantikan bukti sebelumnya dengan bukti terbaru secara idempoten, tanpa membuat Pendaftar ganda, dan mempertahankan `registrationId` yang sama.
8. JIKA `registrationId` yang dirujuk saat unggah bukti tidak ditemukan, MAKA Sistem HARUS menolak unggahan, mengembalikan galat `404 Not Found`, dan tidak menyimpan berkas apa pun.
9. SELAMA proses unggah bukti untuk sebuah `registrationId` sedang berlangsung, THE Sistem HARUS mencegah pemrosesan unggahan serentak lain untuk `registrationId` yang sama sehingga hanya satu bukti terakhir yang tersimpan.
10. THE Sistem HARUS memastikan status setiap Pendaftar selalu bernilai salah satu Status Pendaftaran yang sah.

### Requirement 6: Dashboard Admin

**User Story:** Sebagai Admin, saya ingin mengelola data pendaftar melalui dashboard terpusat, sehingga saya dapat memverifikasi pembayaran dan menggantikan pencatatan Google Sheets.

#### Acceptance Criteria

1. KETIKA Admin mengirim kredensial (email dan kata sandi) yang benar, MAKA Sistem HARUS memverifikasi kredensial terhadap kata sandi ter-hash dan menerbitkan sesi aman dengan masa aktif 60 menit sejak penerbitan dalam waktu respons paling lama 3 detik.
2. JIKA kredensial login Admin tidak valid, MAKA Sistem HARUS menolak login dan menampilkan pesan galat generik yang tidak menyebutkan apakah email atau kata sandi yang salah, tanpa menerbitkan sesi.
3. JIKA Admin melakukan 5 kali percobaan login gagal berturut-turut dalam rentang 15 menit, MAKA Sistem HARUS mengunci upaya login untuk akun tersebut selama 15 menit dan menampilkan pesan galat yang mengindikasikan penguncian sementara.
4. KETIKA Admin membuka daftar pendaftar, MAKA Sistem HARUS menyediakan pencarian (minimal 1 karakter, maksimal 100 karakter), filter berdasarkan status, Status Pendidikan, dan Metode Pembayaran, pengurutan berdasarkan kolom yang ditampilkan (naik/turun, default berdasarkan tanggal pendaftaran menurun), serta paginasi dengan ukuran halaman default 25 baris dan maksimal 100 baris per halaman.
5. KETIKA Admin membuka daftar pendaftar dan tidak ada data yang cocok dengan kriteria pencarian atau filter, MAKA Sistem HARUS menampilkan daftar kosong beserta indikasi bahwa tidak ada pendaftar yang cocok, tanpa menampilkan galat.
6. JIKA Admin meminta nomor halaman di luar rentang yang tersedia (kurang dari 1 atau melebihi jumlah halaman total), MAKA Sistem HARUS mengembalikan halaman valid terdekat (halaman pertama untuk nilai kurang dari 1, halaman terakhir untuk nilai melebihi total) tanpa menampilkan galat.
7. KETIKA Admin membuka detail seorang Pendaftar, MAKA Sistem HARUS menampilkan seluruh data Pendaftar beserta bukti pembayaran melalui signed URL yang berlaku maksimal 15 menit sejak diterbitkan.
8. KETIKA Admin memverifikasi atau menolak seorang Pendaftar, MAKA Sistem HARUS mengubah status menjadi `TERVERIFIKASI` atau `DITOLAK` hanya mengikuti transisi status yang sah dari status `MENUNGGU_VERIFIKASI`.
9. JIKA Admin meminta transisi status yang tidak sah (misalnya dari `TERVERIFIKASI` ke status lain yang tidak diizinkan), MAKA Sistem HARUS menolak perubahan, mempertahankan status semula, dan menampilkan pesan galat yang mengindikasikan transisi tidak diizinkan.
10. KETIKA status Pendaftar diubah oleh Admin, MAKA Sistem HARUS menetapkan `diperbaruiPada` dari Waktu Server Nyata.
11. KETIKA Admin mengekspor data ke CSV dengan filter tertentu, MAKA Sistem HARUS menghasilkan berkas CSV yang isi dan urutan barisnya konsisten dengan data yang ditampilkan pada dashboard untuk filter dan pengurutan yang identik.
12. JIKA Admin mengekspor CSV sedangkan hasil filter tidak memuat data, MAKA Sistem HARUS menghasilkan berkas CSV berisi baris header saja tanpa baris data.
13. JIKA sesi Admin telah melewati masa aktif 60 menit atau tidak valid saat Admin melakukan aksi pada dashboard, MAKA Sistem HARUS menolak aksi tersebut, mengakhiri sesi, dan mengarahkan Admin ke halaman login.
14. THE Sistem HARUS menjadikan basis data dashboard sebagai sumber data tunggal pengganti Google Sheets.

### Requirement 7: Pengelolaan Gambar QRIS oleh Admin

**User Story:** Sebagai Admin, saya ingin mengunggah dan mengganti gambar QRIS, sehingga Peserta selalu melihat kode QRIS pembayaran yang terkini.

#### Acceptance Criteria

1. KETIKA Admin terautentikasi mengunggah atau mengganti gambar QRIS melalui endpoint terproteksi dengan berkas bertipe MIME `image/jpeg` atau `image/png` dan berukuran maksimal 5 MB (5.242.880 byte), MAKA Sistem HARUS menyimpan gambar tersebut, menjadikannya QRIS Aktif, dan menyelesaikan penyimpanan dalam waktu paling lama 5 detik.
2. THE Sistem HARUS memperlakukan gambar QRIS Aktif sebagai satu gambar QRIS yang paling terakhir berhasil diunggah Admin.
3. KETIKA Admin berhasil mengganti gambar QRIS, MAKA Sistem HARUS menyajikan gambar QRIS terbaru pada setiap permintaan publik `GET /api/payment/qris` berikutnya dalam waktu paling lama 5 detik setelah penyimpanan selesai.
4. JIKA berkas yang diunggah memiliki tipe MIME selain `image/jpeg` atau `image/png` ATAU berukuran lebih dari 5 MB (5.242.880 byte) ATAU tidak dapat dibaca sebagai berkas gambar yang valid, MAKA Sistem HARUS menolak unggahan tersebut, mempertahankan gambar QRIS Aktif sebelumnya tanpa perubahan, dan mengembalikan pesan galat yang mengindikasikan alasan penolakan.
5. KETIKA gambar QRIS Aktif berhasil diperbarui, MAKA Sistem HARUS menetapkan waktu pembaruan QRIS dari Waktu Server Nyata dengan presisi hingga detik.
6. JIKA permintaan unggah atau ganti gambar QRIS diterima tanpa autentikasi Admin yang valid, MAKA Sistem HARUS menolak permintaan tersebut, tidak mengubah gambar QRIS Aktif, dan mengembalikan pesan galat yang mengindikasikan kegagalan autentikasi.
7. JIKA permintaan publik `GET /api/payment/qris` diterima sementara belum ada gambar QRIS Aktif yang tersimpan, MAKA Sistem HARUS mengembalikan respons yang mengindikasikan bahwa gambar QRIS belum tersedia, bukan gambar kosong atau rusak.
8. JIKA proses penyimpanan gambar QRIS gagal karena kesalahan penyimpanan, MAKA Sistem HARUS membatalkan pembaruan, mempertahankan gambar QRIS Aktif sebelumnya beserta waktu pembaruannya tanpa perubahan, dan mengembalikan pesan galat yang mengindikasikan kegagalan penyimpanan.

### Requirement 8: Timestamp Waktu Nyata

**User Story:** Sebagai Admin, saya ingin setiap catatan waktu memakai waktu nyata server, sehingga urutan dan riwayat pendaftaran akurat dan dapat dipercaya.

#### Acceptance Criteria

1. KETIKA sebuah Pendaftar dibuat, MAKA Sistem HARUS mengisi `dibuatPada` dan `diperbaruiPada` dengan Waktu Server Nyata dalam UTC dengan presisi milidetik (resolusi 1 ms), dan nilai tersebut HARUS bersumber langsung dari jam server saat operasi berjalan, bukan nilai konstan/hardcoded atau nilai yang dikirim oleh klien.
2. KETIKA sebuah Pendaftar diperbarui, MAKA Sistem HARUS memperbarui `diperbaruiPada` dengan Waktu Server Nyata dalam UTC (presisi milidetik) dan HARUS mempertahankan nilai `dibuatPada` yang sudah ada tanpa perubahan.
3. KETIKA menampilkan `dibuatPada` atau `diperbaruiPada` kepada pengguna, MAKA Sistem HARUS mengambil nilai yang tersimpan dalam UTC dan mengubahnya ke zona waktu WIB (Asia/Jakarta, UTC+07:00) sebelum ditampilkan.
4. THE Sistem HARUS menyimpan semua nilai `dibuatPada` dan `diperbaruiPada` dalam UTC pada penyimpanan data, terlepas dari zona waktu yang digunakan saat penyajian.
5. THE Sistem HARUS memastikan bahwa untuk setiap Pendaftar nilai `diperbaruiPada` selalu lebih besar dari atau sama dengan (`>=`) nilai `dibuatPada`.
6. KETIKA sebuah Pendaftar diperbarui, MAKA Sistem HARUS memastikan nilai `diperbaruiPada` yang baru lebih besar dari atau sama dengan (`>=`) nilai `diperbaruiPada` sebelumnya, sehingga timestamp tidak pernah bergerak mundur (monotonik).
7. JIKA Waktu Server Nyata baru yang diperoleh lebih awal dari `diperbaruiPada` sebelumnya (misalnya akibat koreksi jam server atau clock skew), MAKA Sistem HARUS menolak penggunaan nilai mundur tersebut dan mempertahankan invarian monotonik dengan tidak menyimpan timestamp yang lebih awal dari nilai sebelumnya.
8. JIKA sumber Waktu Server Nyata tidak tersedia atau gagal saat operasi pembuatan/pembaruan, MAKA Sistem HARUS membatalkan operasi tersebut, tidak menyimpan perubahan pada data (rollback), dan menampilkan pesan galat yang menunjukkan kegagalan pengambilan waktu server.

### Requirement 9: Integrasi Design System RUBELA dan Responsivitas

**User Story:** Sebagai Peserta, saya ingin halaman pendaftaran dan pembayaran tampak konsisten dengan situs Widya Nusantara Academy dan nyaman digunakan di perangkat apa pun, sehingga pengalaman saya mulus dan terpercaya.

#### Acceptance Criteria

1. THE Sistem HARUS membangun setiap halaman baru (pendaftaran, pembayaran, admin) menggunakan komponen design system RUBELA yang sudah ada — layout (Navbar, Footer, MobileMenu) dan ui (Container, Section, Heading, Card, Button, Badge, Breadcrumb, CTA) — tanpa membuat komponen duplikat yang memiliki fungsi setara dengan komponen yang telah tersedia.
2. THE Sistem HARUS menempatkan Navbar pada bagian paling atas dan Footer pada bagian paling bawah setiap halaman baru, serta membungkus seluruh konten utama di dalam komponen Container dan Section yang sudah ada.
3. KETIKA halaman baru ditampilkan pada viewport smartphone (lebar <640px), MAKA Sistem HARUS menyusun tata letak sesuai breakpoint di bawah sm dan menjamin tidak ada scroll horizontal (lebar konten tidak melebihi lebar viewport).
4. KETIKA halaman baru ditampilkan pada viewport tablet (lebar 640px sampai <1024px), MAKA Sistem HARUS menyusun tata letak sesuai breakpoint sm/md dan menjamin tidak ada scroll horizontal (lebar konten tidak melebihi lebar viewport).
5. KETIKA halaman baru ditampilkan pada viewport laptop (lebar ≥1024px), MAKA Sistem HARUS menyusun tata letak sesuai breakpoint lg dan menjamin tidak ada scroll horizontal (lebar konten tidak melebihi lebar viewport).
6. KETIKA lebar viewport berada di bawah breakpoint md (768px), MAKA Sistem HARUS menampilkan navigasi menggunakan komponen MobileMenu yang sudah ada, dan pada lebar viewport ≥768px MAKA Sistem HARUS menampilkan navigasi Navbar penuh.
7. KETIKA halaman baru ditampilkan pada viewport smartphone (lebar <640px), MAKA Sistem HARUS memastikan setiap elemen interaktif (tombol, tautan, kontrol input) memiliki area sentuh minimal 44x44 piksel.
8. THE Sistem HARUS menjaga konsistensi visual halaman baru dengan hanya menggunakan token gaya RUBELA yang sudah ada (palet warna, tipografi, dan spacing) tanpa memperkenalkan nilai kustom baru di luar token yang telah didefinisikan.

### Requirement 10: Keamanan dan Penanganan Galat

**User Story:** Sebagai penyelenggara program, saya ingin data peserta dan endpoint admin terlindungi serta galat ditangani dengan aman, sehingga sistem tepercaya dan tahan penyalahgunaan.

#### Acceptance Criteria

1. JIKA sebuah permintaan ke endpoint `/api/admin/*` (termasuk unggah QRIS) tidak menyertakan sesi atau token yang valid, MAKA Sistem HARUS menolak permintaan dengan `401 Unauthorized`, mengembalikan pesan galat generik tanpa membocorkan detail internal (jejak tumpukan, struktur basis data, nama tabel/berkas, atau data peserta), dan tidak melakukan operasi tulis apa pun.
2. THE Sistem HARUS memvalidasi seluruh input di sisi server secara otoritatif dan tidak hanya mengandalkan validasi klien.
3. JIKA validasi sisi server gagal untuk satu atau lebih field, MAKA Sistem HARUS menolak permintaan dengan `400 Bad Request`, mengembalikan pesan galat yang menunjukkan field mana yang tidak valid, dan tidak menyimpan perubahan apa pun.
4. KETIKA menyimpan berkas unggahan (bukti pembayaran maupun gambar QRIS), MAKA Sistem HARUS membatasi tipe MIME hanya pada JPG/PNG, membatasi ukuran berkas maksimum 5.242.880 byte (5 MB), menghasilkan nama objek acak yang tidak dapat ditebak, dan menyajikan bukti melalui signed URL yang kedaluwarsa dalam 300 detik.
5. JIKA berkas unggahan memiliki tipe MIME selain JPG/PNG, berukuran lebih dari 5.242.880 byte, atau berukuran 0 byte/rusak, MAKA Sistem HARUS menolak unggahan dengan pesan galat yang menjelaskan penyebab penolakan dan tidak menyimpan berkas maupun metadata terkait.
6. JIKA basis data atau object storage tidak tersedia saat operasi tulis, MAKA Sistem HARUS mengembalikan `503 Service Unavailable`, menjamin operasi bersifat atomik (tidak ada perubahan sebagian yang tersimpan), dan mempertahankan keadaan data seperti sebelum operasi.
7. THE Sistem HARUS menerapkan rate limiting per alamat IP pada endpoint publik, yaitu maksimum 5 permintaan per 60 detik untuk `/api/auth/login` dan maksimum 10 permintaan per 60 detik untuk `/api/registrations`.
8. JIKA jumlah permintaan dari sebuah alamat IP melampaui ambang rate limiting pada endpoint publik, MAKA Sistem HARUS menolak permintaan berikutnya dengan `429 Too Many Requests` disertai indikasi waktu tunggu sebelum permintaan dapat diulang.
