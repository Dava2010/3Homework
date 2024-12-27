function startClock() {
    function updateClock() {
        const now = new Date();

        // Soat, daqiqa va soniyalarni oling
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // HTML elementlarga soatni yozing
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Har soniyada soatni yangilang
    setInterval(updateClock, 1000);

    // Dastlabki yangilanish
    updateClock();
}

startClock();