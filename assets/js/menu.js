document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button.hamburger");
    const menu = document.querySelector(".banner > nav");

    if (!button || !menu) return;

    button.addEventListener("click", () => {
        console.log("button clicked", menu);
        const isOpen = menu.classList.toggle("is-open");
        button.setAttribute("aria-expanded", isOpen);
    });
});
