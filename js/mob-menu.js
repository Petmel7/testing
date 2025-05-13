document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burgerMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    burgerMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        burgerMenu.classList.toggle("open");
    });

    const clockElement = document.getElementById("clock");
    const updateClock = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        clockElement.textContent = `${hours}:${minutes}`;
    };

    setInterval(updateClock, 1000);
    updateClock();
});