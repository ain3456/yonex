export function videoScroll(mainRef, videoRef, vidBtnRef, scrollIconRef) {
    const handleScroll = () => {
        const main = mainRef.current;
        const video = videoRef.current;
        const vidBtn = vidBtnRef.current;
        const scrollIcon = scrollIconRef.current;

        if (!main || !video) return;

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
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}