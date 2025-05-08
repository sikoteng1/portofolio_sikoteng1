document.addEventListener('DOMContentLoaded', function () {
    const menuToggler = document.getElementById('menuToggler');
    const mainNav = document.getElementById('mainNav');
    const navLinks = mainNav.querySelectorAll('a.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // --- Navigasi Menu Toggle ---
    if (menuToggler && mainNav) {
        menuToggler.addEventListener('click', () => {
            const isHidden = mainNav.classList.contains('hidden');
            if (isHidden) {
                mainNav.classList.remove('hidden');
                mainNav.classList.add('flex', 'flex-col');
            } else {
                mainNav.classList.add('hidden');
                mainNav.classList.remove('flex', 'flex-col');
            }
        });
    }

    // --- Update Active Link di Navigasi ---
    function updateActiveLink() {
        let currentSectionId = 'home';
        const headerOffset = 70;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - headerOffset) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
        
        // Jika di paling atas dan tidak ada section aktif, aktifkan 'home'
        let firstSectionIsActive = false;
        sections.forEach(section => {
            if (section.offsetTop <= pageYOffset + headerOffset && pageYOffset < section.offsetTop + section.offsetHeight - headerOffset) {
                firstSectionIsActive = true;
            }
        });

        if (!firstSectionIsActive && pageYOffset < (sections[0] ? sections[0].offsetTop - headerOffset : 50)) {
             navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === '#' || linkHref === '#home') { // Asumsi link home adalah # atau #home
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth < 1024 && mainNav.classList.contains('flex')) {
                mainNav.classList.add('hidden');
                mainNav.classList.remove('flex', 'flex-col');
            }
            // Hapus semua active class dan tambahkan ke yang diklik
            // Biarkan updateActiveLink saat scroll yang menangani ini jika hash berubah
            // Atau, jika ingin langsung aktif:
            // navLinks.forEach(nav => nav.classList.remove('active'));
            // this.classList.add('active');
        });
    });

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Panggil saat load pertama

    // --- Efek Ketik Per Huruf ---
    const typingTextTarget = document.getElementById('typing-text-target');
    const wordsToType = ["Web Dev", "Developer", "Web Designer", "Cat Lover", "Bike Lover"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Kecepatan ketik (ms)
    const erasingSpeed = 100; // Kecepatan hapus (ms)
    const delayBetweenWords = 3000; // Jeda antar kata (ms)

    function type() {
        const currentWord = wordsToType[wordIndex];
        if (isDeleting) {
            // Proses menghapus
            typingTextTarget.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % wordsToType.length; // Ganti ke kata berikutnya
                setTimeout(type, typingSpeed); // Jeda sebelum mulai ketik kata baru
            } else {
                setTimeout(type, erasingSpeed);
            }
        } else {
            // Proses mengetik
            typingTextTarget.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenWords); // Jeda sebelum mulai menghapus
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    if (typingTextTarget) {
        setTimeout(type, delayBetweenWords / 2); // Mulai animasi setelah jeda sedikit
    }
});