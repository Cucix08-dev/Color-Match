document.addEventListener("DOMContentLoaded", () => {
    let path = "";
    let targetY = 0;

    const howToPlayButton = document.getElementById("how-to-play-button");
    if (!howToPlayButton) return;

    const rect = howToPlayButton.getBoundingClientRect();
    const startY = rect.y;

    const pathParts = window.location.pathname.split("/");
    const last = pathParts.pop() || pathParts.pop(); // gestisce eventuale "/" finale
    const pathName = last || "";

    const isHome = pathName === "" || pathName === "index.html";
    const isHowToPlay = pathName === "howToPlay.html";

    if (isHome) {
        localStorage.setItem("homeButtonY", String(startY));

        const title = document.getElementById("title-page");
        if (title) {
            const titleRect = title.getBoundingClientRect();
            targetY = titleRect.y;
        } else {
            targetY = startY;
        }

        path = "/Color-Match/src/howToPlay.html";
    }

    if (isHowToPlay) {
        const savedY = Number(localStorage.getItem("homeButtonY"));
        targetY = Number.isFinite(savedY) ? savedY : startY;

        path = "/Color-Match/../index.html";
        howToPlayButton.style.border = "none";
    }

    const deltaY = targetY - startY;

    howToPlayButton.addEventListener("click", () => {
        const elements = document.querySelectorAll(".el");
        elements.forEach(element => {
            element.style.transition = "opacity 0.8s ease";
            element.style.opacity = 0;
        });

        howToPlayButton.style.opacity = 1;
        howToPlayButton.style.border = "none";

        if (Number.isFinite(deltaY)) {
            howToPlayButton.style.transition = "transform 0.8s ease-in";
            howToPlayButton.style.transform = `translateY(${deltaY}px)`;
        }

        setTimeout(() => {
            window.location.href = path;
        }, 800);
    });
});
