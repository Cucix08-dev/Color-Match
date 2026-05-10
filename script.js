let path = "";
let targetY = 0;

const howToPlayButton = document.getElementById("how-to-play-button");
const rect = howToPlayButton.getBoundingClientRect();
const startY = rect.y;

const pathName = window.location.pathname.split("/").pop();
const isHome = pathName === "" || pathName === "index.html";
const isHowToPlay = pathName === "howToPlay.html";

if (isHome) {
    localStorage.setItem("homeButtonY", startY);

    const title = document.getElementById("title-page");
    const titleRect = title.getBoundingClientRect();
    targetY = titleRect.y;

    path = "src/howToPlay.html";
}

if (isHowToPlay) {
    const savedY = Number(localStorage.getItem("homeButtonY"));
    targetY = savedY;

    path = "../index.html";
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

    howToPlayButton.style.transition = "transform 0.8s ease-in";
    howToPlayButton.style.transform = `translateY(${deltaY}px)`;

    setTimeout(() => {
        window.location.href = path;
    }, 800);
});
