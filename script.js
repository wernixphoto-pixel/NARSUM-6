const lowerThird = document.querySelector(".lower-third");

const SHOW_DURATION = 30000;      // tampil 30 detik
const FIRST_DELAY = 2000;         // tunda awal 2 detik
const MIN_DELAY = 120000;          // jeda minimum 120 detik
const MAX_DELAY = 120000;          // jeda maksimum 120 detik
const MAX_SHOW = 3;               // tampil 3 kali

let showCount = 0;

function randomDelay() {
    return Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
}

function showLowerThird() {

    if (showCount >= MAX_SHOW) return;

    // Reset animasi
    lowerThird.classList.remove("show");
    void lowerThird.offsetWidth;

    // Jalankan animasi
    lowerThird.classList.add("show");
    showCount++;

    // Setelah 30 detik
    setTimeout(() => {

        // Hapus class agar siap diputar lagi
        lowerThird.classList.remove("show");

        // Jika belum 3 kali, jadwalkan kemunculan berikutnya
        if (showCount < MAX_SHOW) {
            setTimeout(showLowerThird, randomDelay());
        }

    }, SHOW_DURATION);
}

// Tampil pertama setelah 2 detik
setTimeout(showLowerThird, FIRST_DELAY);
