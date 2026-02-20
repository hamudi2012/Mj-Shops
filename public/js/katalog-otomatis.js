// Gunakan link RAW dari file daftar-foto.json kamu di GitHub
const linkAPI = "https://raw.githubusercontent.com/username/repo/main/daftar-foto.json";

async function renderKatalogDariJSON() {
    const container = document.getElementById('home-products');
    if (!container) return; // Jika elemen tidak ada, stop script agar tidak error

    try {
        const response = await fetch(linkAPI);
        const data = await response.json();
        
        const folderFoto = data.baseUrl;
        const semuaFoto = data.photos;

        // Kosongkan dulu kalau ada isi dummy, lalu isi dengan data asli
        container.innerHTML = ""; 

        semuaFoto.forEach(file => {
            // Kita filter: Jangan tampilkan logo atau file artikel di baris produk
            if (file.includes('logo') || file.includes('Mix-Jeans')) return;

            // Percantik nama file buat judul
            const namaProduk = file.split('.')[0].replace(/-/g, ' ').toUpperCase();

            const htmlCard = `
                <a href="https://wa.me/6285691451094?text=Halo Mj-Shops, saya mau tanya produk: ${namaProduk}" class="item-card">
                    <img src="${folderFoto}${file}" alt="${namaProduk}">
                    <div class="card-info">
                        <h4>${namaProduk}</h4>
                        <span class="price-new">CEK HARGA</span>
                    </div>
                </a>
            `;
            container.innerHTML += htmlCard;
        });
    } catch (err) {
        console.error("Gagal muat API foto:", err);
    }
}

// Jalankan
document.addEventListener('DOMContentLoaded', renderKatalogDariJSON);
          
