// ==========================================
// INISIALISASI GSAP & SCROLLTRIGGER
// ==========================================
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. FUNGSI ACCORDION (TOGGLE DROPDOWN)
// ==========================================

// Accordion untuk 6 Alasan (Section 1)
const accordions = document.querySelectorAll(".reason-item");
accordions.forEach((item) => {
    const header = item.querySelector(".reason-header");
    header.addEventListener("click", () => {
        item.classList.toggle("active");
        
        // Menutup item lain saat satu dibuka
        accordions.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });
    });
});

// Accordion untuk 12 Keunggulan (Section 3)
const keunggulanItems = document.querySelectorAll(".k-item");
keunggulanItems.forEach((item) => {
    const header = item.querySelector(".k-header");
    header.addEventListener("click", () => {
        item.classList.toggle("active");
        
        // Menutup item lain saat satu dibuka
        keunggulanItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });
    });
});


// ==========================================
// 2. ANIMASI SCROLL (GSAP SCROLLTRIGGER)
// ==========================================

// --- ANIMASI SECTION 1: MENGAPA MEMILIH ---
const whyTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".mengapa-section",
        start: "top 75%", // Animasi terpicu saat section menyentuh 75% dari atas layar
        toggleActions: "play none none none"
    }
});

whyTimeline
    // 1. Logo muncul dari kiri
    .from(".mh-logo", { x: -60, opacity: 0, duration: 0.8, ease: "power3.out" })
    
    // 2. Badge EST. 2026 muncul dari kanan (bersamaan dengan logo)
    .from(".est-badge", { x: 60, opacity: 0, duration: 0.8, ease: "power3.out" }, "<")

    // 3. "MENGAPA MEMILIH" (H2) menyeret dari atas ke bawah
    .from(".mh-title h2", { y: -40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
    
    // 4. "USAHA CAR WASH?" (H1) menyeret dari bawah ke atas, disusul setelah H2
    .from(".mh-title h1", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
    
    // 5. Kotak Highlight (Kanan) muncul dari bawah
    .from(".highlight-card", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.2")
    
    // 6. Accordion 1-6 (Kiri) muncul berurutan dari bawah
    .from(".reason-item", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15, // Efek bergelombang (muncul satu per satu)
        ease: "power2.out",
        clearProps: "all" // Membersihkan style GSAP agar klik accordion tetap lancar
    }, "-=0.5");

// --- ANIMASI SECTION 2: SISTEM KERJA SAMA ---
const skTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".sk-section",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

skTimeline
    // 1. Judul turun dari atas
    .fromTo(".sk-header h2",
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // 2. 4 Kartu Kerja Sama meluncur dari kiri satu per satu
    .from(".sk-card", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, 
        ease: "power2.out",
        clearProps: "all" 
    }, "-=0.4");


// --- ANIMASI SECTION 3: 12 KEUNGGULAN ---
const kTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".keunggulan-section",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

kTimeline
    // 1. Elemen Judul (H2, H1, P) muncul berurutan dari bawah
    .from(".k-main-header > *", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
    })
    
    // 2. Kolom Kiri (Item 1-6) masuk dari sisi Kiri
    .from(".k-col:nth-child(1) .k-item", {
        x: -40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
    }, "-=0.2")
    
    // 3. Kolom Kanan (Item 7-12) masuk dari sisi Kanan (Jalan BERSAMAAN dengan kolom kiri)
    .from(".k-col:nth-child(2) .k-item", {
        x: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
    }, "<"); // Simbol "<" memaksa baris ini jalan berbarengan dengan baris sebelumnya

// ==========================================
// 3. ANIMASI SCROLL MOTION (PARALLAX EFFECT)
// ==========================================

// Efek menyeret untuk kolom accordion kiri (Section Mengapa Memilih)
gsap.to(".left-column", {
    y: 200, // Jarak piksel elemen akan terseret ke bawah (sesuaikan dengan selera/batas card kanan)
    ease: "none", // Harus "none" agar pergerakannya sinkron dengan kecepatan scroll
    scrollTrigger: {
        trigger: ".mengapa-grid", // Patokan areanya adalah keseluruhan grid
        start: "top 60%", // Mulai bergerak saat bagian atas grid mencapai 60% layar
        end: "bottom 40%", // Berhenti bergerak saat bagian bawah grid mencapai 40% layar
        scrub: 0.5 // Angka 1 memberikan efek "smooth catch-up" / delay halus saat scroll bolak-balik
    }
});