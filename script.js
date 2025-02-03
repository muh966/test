document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    
    function revealSections() {
        sections.forEach(section => {
            let sectionPos = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (sectionPos < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.5s ease-in-out";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

// زر العودة للأعلى
let backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
