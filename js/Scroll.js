const main = document.querySelector("#main");
const video = document.querySelector("#vid");
const vidBtn = document.querySelector("#vidBtn");
const scrollIcon = document.querySelector("#scrollIcon");

window.addEventListener("scroll", function(){
    const rect = main.getBoundingClientRect();
    const scrollRange = main.offsetHeight - window.innerHeight;
    let p = Math.max(0, Math.min(1, -rect.top / scrollRange));

    if (scrollIcon) {
        scrollIcon.style.opacity = p > 0.10 ? 0 : 1;
    }

    if (video.duration) {
        video.currentTime = video.duration * Math.min(p / 0.8, 0.99);
    }

    if (vidBtn) {
        vidBtn.style.opacity = p > 0.7 ? 1 : 0;
    }
});