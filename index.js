const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function hideAllSections() {
    sections.forEach(function(section) {
        section.classList.add("hidden");
    });
}

function showSection(sectionId) {
    const selectedSection = document.querySelector(sectionId);

    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }
}

hideAllSections();
showSection("#Intro");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const sectionId = link.getAttribute("href");

        hideAllSections();
        showSection(sectionId);
    });
});