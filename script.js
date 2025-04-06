document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for subscribing to Lawreay IT Builder!");
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

function startEditing() {
    alert("Redirecting to the Editor...");
    window.location.href = "/editor"; // Adjust based on actual editor page
}
