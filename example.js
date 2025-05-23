function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // ✅ FINAL CLEAN JAVASCRIPT FOR ACCORDIONS
  // Applies to all accordions, About and University sections
  
  // Run when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");
  
    accordions.forEach(button => {
      // Get the closest .details-container and then the .panel inside it
      const panel = button.closest(".details-container").querySelector(".panel");
  
      if (!panel) return; // Skip if no panel is found
  
      panel.style.display = "none"; // Hide initially
  
      button.addEventListener("click", () => {
        const isVisible = panel.style.display === "block";
        panel.style.display = isVisible ? "none" : "block";
        button.textContent = isVisible ? "Show More ▼" : "Show Less ▲";
      });
    });
  });