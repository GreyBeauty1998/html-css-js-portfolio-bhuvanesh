function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((button) => {
    const panel = button.nextElementSibling;

    button.addEventListener("click", () => {
      const isOpen = panel.style.display === "block";

      // ✅ Toggle visibility
      panel.style.display = isOpen ? "none" : "block";

      // ✅ Toggle the active class (used for optional CSS)
      button.classList.toggle("active");
      button.textContent = isOpen ? "Show More" : "Show Less";
    });
  });
});
