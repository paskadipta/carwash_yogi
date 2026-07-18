// Daftarkan plugin ScrollTrigger dan TextPlugin agar bisa digunakan
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ==========================================
// 1. ANIMASI SAAT WEBSITE DIBUKA (HERO SECTION)
// ==========================================
const heroTimeline = gsap.timeline();

// Animasi Logo dari kiri
heroTimeline.from(".hero-image img", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
// Animasi Teks Judul (AXION CARWASH) muncul dari bawah berurutan
.from(".hero-text h1 .block-text", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // Memberikan jeda antar teks
    ease: "power3.out"
}, "-=0.5") // Mulai lebih cepat 0.5 detik sebelum animasi logo selesai
// Animasi Deskripsi
.from(".hero-desc", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.6")
// Animasi Tombol
.fromTo(".button-group .btn-glass", 
    { 
        y: 20, 
        opacity: 0 
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        clearProps: "opacity,transform" // Membersihkan style inline GSAP setelah animasi selesai agar hover CSS bekerja maksimal
    }, 
    "-=0.4");
    
    // ==========================================
    // 1. EFEK "DEEP" / ZOOM OUT CONTAINER 1 SAAT DI-SCROLL
    // ==========================================
    gsap.to(".hero-container", {
        scale: 0.8,       // Mengecilkan ukuran seolah-olah mundur ke belakang
        opacity: 0,       // Memudar secara perlahan
        y: -50,           // Sedikit terangkat ke atas agar efek tenggelamnya lebih natural
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",       // Animasi mulai saat ujung atas Hero menyentuh ujung atas layar
            end: "bottom top",      // Animasi selesai saat ujung bawah Hero menyentuh ujung atas layar
            scrub: 1,               // KUNCI UTAMA: Animasi mengikuti scroll
        }
    });
    
    // ==========================================
    // 1. ANIMASI SAAT DI-SCROLL (CONTAINER 2 - TENTANG KAMI)
    // ==========================================

// Ambil elemen deskripsi dan simpan isi HTML-nya
const descElement = document.querySelector(".about-desc");
const descHTML = descElement.innerHTML; 
// Kosongkan teks sementara agar siap diketik oleh animasi
descElement.innerHTML = ""; 

const aboutTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%", // Animasi terpicu saat Container 2 mencapai 70% dari tinggi layar
        toggleActions: "play none none none" 
    }
});

aboutTimeline
    // 1. Logo menyeret dari kanan ke kiri
    .from(".about-image-area img", {
        x: 100, 
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    // 2. Paragraf Judul muncul dari kiri ke kanan
    .from(".section-heading", {
        x: -100, 
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    // 3. Efek mengetik pada deskripsi
    .to(descElement, {
        text: {
            value: descHTML,
        },
        duration: 2.5, 
        ease: "none"
    }, "-=0.2")
    // 4. Tiga card (feature box) muncul dari bawah ke atas bergantian
    .from(".feature-box", {
        y: 60, 
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, 
        ease: "power3.out"
    }, "-=1.5");


// ==========================================
// 3. ANIMASI SAAT DI-SCROLL (CONTAINER 3 - VISI MISI)
// ==========================================

const visiMisiTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".visi-misi-section", 
        start: "top 75%", 
        toggleActions: "play none none none" 
    }
});

visiMisiTimeline
    // 1. Animasi Judul muncul dari bawah
    .fromTo(".section-title h2", 
        { y: 60, opacity: 0 }, // Titik awal (Paksa sembunyi)
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // Titik akhir
    )
    
    // 2. Animasi Deskripsi menyusul dari bawah
    .fromTo(".section-title p", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.5" 
    )
    
    // 3. Animasi Kartu Kiri (VISI) masuk dari Kiri ke Kanan
    .fromTo(".vm-card:nth-child(1)", 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
        "-=0.3"
    )
    
    // 4. Animasi Kartu Kanan (MISI) masuk dari Kanan ke Kiri
    .fromTo(".vm-card:nth-child(2)", 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
        "<" 
    );

// ==========================================
// 5. ANIMASI SAAT DI-SCROLL (CONTAINER 4 - PROMO CTA)
// ==========================================
gsap.fromTo(".promo-card", 
    { 
        y: 80, 
        opacity: 0, 
        scale: 0.95 // Mulai sedikit lebih kecil
    },
    { 
        y: 0, 
        opacity: 1, 
        scale: 1, // Kembali ke ukuran normal (efek zoom-in pelan)
        duration: 1.2, 
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".promo-section",
            start: "top 80%", // Mulai animasi saat section mencapai 80% dari atas layar
            toggleActions: "play none none none"
        }
    }
);