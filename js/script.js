const b = document.querySelector(".menu");
const u = document.querySelector("nav ul");

if (b && u) {
    b.addEventListener("click", () => {
        u.classList.toggle("open");
        b.setAttribute(
            "aria-expanded",
            u.classList.contains("open")
        );
    });
}
