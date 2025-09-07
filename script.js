// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Show a welcome alert on first visit
window.addEventListener("load", () => {
  if (!sessionStorage.getItem("visited")) {
    alert("👋 Welcome to my Software Testing Portfolio!");
    sessionStorage.setItem("visited", "true");
  }
});
