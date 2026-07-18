// Daftarkan plugin ScrollTrigger agar bisa digunakan
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. ANIMASI SECTION PAKET KEMITRAAN
// ==========================================
const pricingTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".pricing-section",
        start: "top 75%", // Animasi mulai saat ujung atas section mencapai 75% dari tinggi layar
        toggleActions: "play none none none"
    }
});

pricingTimeline
    // Animasi Judul Utama masuk dari bawah
    .fromTo(".pricing-section .section-title h2", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // Animasi Paragraf menyusul
    .fromTo(".pricing-section .section-title p",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
    )
    // Animasi 3 Kartu Paket (Bronze, Silver, Gold)
    .from(".pricing-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Kartu akan muncul bergantian dari kiri ke kanan
        ease: "back.out(1.2)",
        // PENTING: Menghapus sisa style GSAP agar efek kilatan silver & hover CSS tetap jalan
        clearProps: "all" 
    }, "-=0.4")
    // Animasi Kotak Catatan (Notes) muncul dengan efek sedikit membesar
    .fromTo(".pricing-notes",
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", clearProps: "all" },
        "-=0.2"
    );


// ==========================================
// 2. ANIMASI SECTION TAHAPAN MENJADI MITRA (REVISI)
// ==========================================
const tahapanTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".tahapan-section",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

// 1. Animasi Judul Utama masuk lebih dulu
tahapanTimeline
    .fromTo(".tahapan-section .section-title h2", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".tahapan-section .section-title p",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
    );

// 2. Ambil semua elemen baris tahapan
const tahapItems = gsap.utils.toArray(".timeline-item");

// 3. Looping setiap baris untuk merakit efek "bergulir" satu per satu
tahapItems.forEach((item, index) => {
    // Ambil elemen spesifik di dalam baris ini saja
    const number = item.querySelector(".step-number");
    const icon = item.querySelector(".step-col-icon");
    const content = item.querySelector(".step-col-content");
    const line = item.querySelector(".step-line");

    // Persiapan: Sembunyikan garis dengan melipat ukurannya (scaleY: 0) dari titik paling atas
    if (line) {
        gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
    }

    // A. Nomor turun dari atas
    tahapanTimeline.fromTo(number,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }
    );

    // B. Ikon (Logo) dan Kalimat turun BERSAMAAN dari atas
    tahapanTimeline.fromTo([icon, content],
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "all" },
        "<" // Tanda "<" ini kunci agar ikon & teks jalan bareng dengan animasi nomor di atasnya
    );

    // C. Garis "menyeret" memanjang ke bawah (jika garisnya ada / bukan tahap terakhir)
    if (line) {
        tahapanTimeline.to(line,
            { scaleY: 1, duration: 0.4, ease: "none" }
        );
    }
});

// ==========================================
// 3. ANIMASI SECTION SIMULASI BEP (CONTAINER 3)
// ==========================================
const bepTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".bep-section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

bepTimeline
    // 1. Munculkan Background Card-nya dulu (Membesar sedikit dari bawah)
    .fromTo(".bep-card",
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", clearProps: "all" }
    )
    // 2. Munculkan isi kontennya secara berurutan
    .fromTo([".bep-icon", ".bep-card h2", ".bep-card p", ".btn-bep"],
        { y: 30, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.15, // Efek muncul satu per satu
            ease: "power2.out" 
        },
        "-=0.4" // Mulai lebih cepat sebelum animasi kotak card selesai
    );