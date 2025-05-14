document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../images/profiles/ShinjukuProfile.jpg",
        "../images/profiles/AkihabaraProfile.jpg",
        "../images/profiles/ShibuyaProfile.jpg",
        "../images/profiles/SakuraProfile.jpg",
        "../images/profiles/FujiProfile.jpg",
        "../images/profiles/DroneProfile.jpg",
        "../images/profiles/PagodaProfile.jpg",
        "../images/profiles/ImperialPalaceProfile.jpg",
    ];

    let currentIndex = 0;
    const bgElement = document.querySelector(".bg");
    
    // Preload images for smoother transitions
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    bgElement.style.backgroundImage = `url('${images[0]}')`;

    function changeBackground() {
        // Fade out effect
        bgElement.classList.add("fade-out");

        setTimeout(() => {
            // Change the background image
            currentIndex = (currentIndex + 1) % images.length;
            bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;

            // Add fade-in effect
            bgElement.classList.remove("fade-out");
            bgElement.classList.add("fade-in");
        }, 1500); // Matches the CSS fade-out transition time

        setTimeout(() => {
            // Remove fade-in class to reset
            bgElement.classList.remove("fade-in");
        }, 100); // A little longer than the fade-in time
    }

    // Change background every 5 seconds
    setInterval(changeBackground, 7000);
});