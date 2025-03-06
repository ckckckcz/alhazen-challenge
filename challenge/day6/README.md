# Alhazen Day 6

Soal : 
1. Mengapa tautan ke GitHub tidak berfungsi?
2. Kenapa tautan ke bagian Our Services dan Contact tidak bekerja?

---

## 1. Tautan ke GitHub tidak berfungsi

**Kesalahan:**
```html
<a href="www.github.com" target="_blank">GitHub</a>
```
- URL `www.github.com` tidak memiliki skema protokol (`http://` atau `https://`), sehingga tautan tidak dapat diakses dengan benar.

**Perbaikan:**
```html
<a href="https://www.github.com" target="_blank">GitHub</a>
```
- Menambahkan `https://` sebelum `www.github.com` agar tautan berfungsi dengan baik.

---

## 2. Tautan "Our Services" dan "Contact" tidak berfungsi

**Kesalahan:**
```html
<a href="">Our Services</a>
<a href="">Contact</a>
```
- Atribut `href` kosong (`""`), sehingga tautan tidak merujuk ke bagian yang benar dalam halaman.

**Perbaikan:**
```html
<a href="#services">Our Services</a>
<a href="#contact">Contact</a>
```
- Menggunakan anchor (`#services` dan `#contact`) yang merujuk ke elemen dengan `id` yang sesuai dalam halaman.

**Menambahkan id pada elemen tujuan:**
```html
<h2 id="services">Our Services</h2>
<h2 id="contact">Contact Us</h2>
```
- Elemen `id` ditambahkan untuk memungkinkan scrolling ke bagian yang dituju.

---

## 3. Typo pada "Our Sevices"

**Kesalahan:**
```html
<h2>Our Sevices</h2>
```
- Salah ejaan pada "Sevices" seharusnya "Services".

**Perbaikan:**
```html
<h2>Our Services</h2>
```

---

## Kesimpulan
Dengan perbaikan ini, semua tautan sudah berfungsi dengan benar, termasuk:
- Tautan ke **GitHub** yang dapat diklik.
- Tautan **"Our Services"** dan **"Contact"** yang sekarang bisa mengarah ke bagian yang benar dalam halaman.
- Typo pada **"Our Sevices"** sudah diperbaiki menjadi **"Our Services"**.