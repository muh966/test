// جعل الأقسام تظهر عند التمرير
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    
    function revealSections() {
        sections.forEach(section => {
            let sectionPos = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (sectionPos < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

// زر العودة للأعلى
let backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
