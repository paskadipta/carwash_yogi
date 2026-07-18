// Fungsi untuk membuat dan menampilkan Navbar
function renderNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    
    // Template literal HTML untuk Navbar
    const navbarHTML = `
        <nav class="navbar glass-panel">
            <div class="logo">
                <a href="#beranda">
                    <img src="../asset/Logo Axion Ver 2 Black (Transparan) - Copy.png" alt="Logo Axion Cars Wash" class="nav-logo">
                </a>
            </div>
            
            <!-- Hamburger Icon -->
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <!-- Nav Links -->
            <ul class="nav-links" id="nav-links">
                <li><a href="../html/home.html">Beranda</a></li>
                <li><a href="../html/Mitra.html">Paket Kemitraan</a></li>
                <li><a href="../html/AXION.html">Mengapa AXION</a></li>
                <!-- Tombol Kontak dipindah ke dalam menu saat mode mobile -->
                <li class="mobile-only"><a href="#kontak" class="btn-primary">Kontak</a></li>
            </ul>
            
            <!-- Tombol Desktop -->
            <a href="#kontak" class="btn-primary desktop-btn">Kontak</a>
        </nav>
    `;
    
    // Memasukkan template HTML ke dalam wadah
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;

        // Logika interaksi Hamburger Menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        
        if(hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }
    }
}

// Fungsi untuk membuat dan menampilkan Footer
function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    
    // Template literal HTML untuk Footer
    const footerHTML = `
        <footer class="footer-section">
            <div class="footer-content">
                <!-- Kolom 1: Brand & Sosial Media -->
                <div class="footer-col brand-col">
                    <img src="../asset/Logo Axion Ver 2 Black (Transparan) - Copy.png" alt="Logo Axion" class="footer-logo">
                    <p>Peluang usaha Car Wash modern dengan standar layanan profesional dan sistem operasional efisien.</p>
                    <div class="social-links">
                        <!-- Gunakan ikon kamu di dalam tag a ini -->
                        <a href="#" class="social-box">IG</a>
                        <a href="#" class="social-box">WA</a>
                        <a href="#" class="social-box">WEB</a>
                    </div>
                </div>

                <!-- Kolom 2: Menu -->
                <div class="footer-col">
                    <h4>MENU</h4>
                    <ul class="footer-links">
                        <li><a href="#beranda">Beranda</a></li>
                        <li><a href="#paket-kemitraan">Paket Kemitraan</a></li>
                        <li><a href="#mengapa-axion">Lihat Peluang Mengapa AXION</a></li>
                        <li><a href="#kontak">Hubungi Kami</a></li>
                    </ul>
                </div>

                <!-- Kolom 3: Kontak -->
                <div class="footer-col">
                    <h4>KONTAK</h4>
                    <div class="contact-info">
                        <p class="contact-label">WA/CALL</p>
                        <p class="contact-value">0857 7240 9608</p>
                        
                        <p class="contact-label">INSTAGRAM</p>
                        <p class="contact-value">@axion_id</p>
                        
                        <p class="contact-label">WEB</p>
                        <p class="contact-value">axion.id</p>
                    </div>
                </div>

                <!-- Kolom 4: Alamat -->
                <div class="footer-col">
                    <h4>ALAMAT KANTOR</h4>
                    <p class="address-text">
                        Jl. Kalibata Utara II No.48<br>
                        Kec. Pancoran, Jakarta Selatan<br><br>
                        DKI Jakarta 12740
                    </p>
                </div>
            </div>

            <!-- Bagian Bawah: Copyright -->
            <div class="footer-bottom">
                <p>&copy; 2026 Axion.id — Axion Car Wash. All rights reserved.</p>
                <p>Peluang Usaha Terpercaya</p>
            </div>
        </footer>
    `;
    
    // Memasukkan template HTML ke dalam wadah div footer-container
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Menjalankan fungsi setelah struktur DOM (HTML) selesai dimuat browser
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();

    // renderFooter(); // Akan kita buat di tahap selanjutnya
});