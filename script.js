let path = "";
let targetY = 0;

const howToPlayButton = document.getElementById("how-to-play-button");
const rect = howToPlayButton.getBoundingClientRect();
const startY = rect.y;

if (window.location.pathname.includes("index.html")) {

    localStorage.setItem("homeButtonY", startY);

    const title = document.getElementById("title-page");

    const titleRect = title.getBoundingClientRect();
    targetY = titleRect.y;

    path = "src/howToPlay.html";
}

if (window.location.pathname.includes("howToPlay.html")) {

    const savedY = Number(localStorage.getItem("homeButtonY"));

    targetY = savedY;

    path = "../index.html";

    howToPlayButton.style.border = "none";
}

const deltaY = targetY - startY;

howToPlayButton.addEventListener("click", () => {

    if (window.location.pathname.includes("index.html")) {
        const el = document.querySelectorAll(".el");
        el.forEach(element => {
            element.style.transition = `opacity ease 0.8s`;
            element.style.opacity = 0;
        });
        howToPlayButton.style.opacity = 1;

        howToPlayButton.style.border = "none";
    }

    if (window.location.pathname.includes("howToPlay.html")) {
        const el = document.querySelectorAll(".el");
        el.forEach(element => {
            element.style.transition = `opacity ease 0.8s`;
            element.style.opacity = 0;
        });
        howToPlayButton.style.opacity = 1;
    }

    howToPlayButton.style.transition = "transform 0.8s ease-in";
    howToPlayButton.style.transform = `translateY(${deltaY}px)`;

    setTimeout(() => {
        window.location.href = path;
    }, 800);
});
