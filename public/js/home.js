/* ===== HOME.JS OPTIMIZED - MJ-SHOPS ===== */

/* ===== DATA PRODUK TERBARU ===== */
// Saya update data ini agar sinkron dengan daftar produk di produk.html
const homeProducts = [
  {
    title: "Jeans Paket 3inOne",
    price: "Rp 100.000",
    image: "public/photo/jeans-paket-3inOne.jpg",
    link: "produk/jeans-paket-3inOne.html"
  },
  {
    title: "Kemeja Flanel Pria Lengan Panjang",
    price: "Rp 50.000",
    image: "public/photo/kemeja-flanel-pria-lengan-panjang.jpg",
    link: "produk/kemeja-flanel-pria-lengan-panjang.html"
  },
  {
    title: "Jeans Viral Wanita 3inOne",
    price: "Rp 100.000",
    image: "public/photo/jeans-viral-wanita.jpg",
    link: "produk/jeans-viral-wanita.html"
  },
  {
    title: "Sepatu Putih Wanita",
    price: "Rp 150.000",
    image: "public/photo/sepatu-putih-wanita.jpeg",
    link: "produk/sepatu-putih-wanita.html"
  }
];

/* ===== DATA ARTIKEL TERBARU ===== */
const homeArticles = [
  {
    title: "Cara Membeli Gamis Sesuai Ukuran Tubuh",
    date: "15 Januari 2026",
    image: "public/photo/gamis-wanita-cantik.jpg",
    link: "artikel/Cara-Membeli-Gamis-Sesuai-Ukuran-Tubuh.html"
  },
  {
    title: "Cara Memilih Celana Jeans yang Pas untuk Pria",
    date: "12 Januari 2026",
    image: "public/photo/jeans-pria.png",
    link: "artikel/Cara-Memilih-Celana-Jeans-yang-Pas-untuk-Pria.html"
  },
  {
    title: "Tips Memilih Sneakers Wanita untuk Tampilan Casual",
    date: "08 Januari 2026",
    image: "public/photo/Sepatu-Sneakers-Wanita.jpg",
    link: "artikel/Tips-Memilih-Sneakers-Wanita-untuk-Tampilan-Casual.html"
  },
  {
    title: "Cara Memilih Gamis Muslimah Polos yang Nyaman",
    date: "08 Januari 2026",
    image: "public/photo/gamis-polos-muslimah.jpg",
    link: "artikel/Cara-Memilih-Gamis-Muslimah-Polos-yang-Nyaman-Dipakai.html"
  }
];

/* ===== RENDER PRODUK DI HOME ===== */
const productsContainer = document.getElementById("home-products");
if (productsContainer) {
  homeProducts.forEach(p => {
    const a = document.createElement("a");
    a.href = p.link;
    a.className = "product-item";
    a.innerHTML = `
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <h3>${p.title}</h3>
      <div class="price">${p.price}</div>
    `;
    productsContainer.appendChild(a);
  });
}

/* ===== RENDER ARTIKEL DI HOME ===== */
const articlesContainer = document.getElementById("home-articles");
if (articlesContainer) {
  homeArticles.forEach(a => {
    const link = document.createElement("a");
    link.href = a.link;
    link.className = "article-item";
    link.innerHTML = `
      <img src="${a.image}" alt="${a.title}" loading="lazy">
      <h3>${a.title}</h3>
      <div class="meta">✍ Admin • ${a.date}</div>
    `;
    articlesContainer.appendChild(link);
  });
}
