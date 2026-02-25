// =============== Navigation Toggle Script =============== 
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Optional: Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// =============== Contact Form Validation Script ===============
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                if (successMessage) {
                    successMessage.style.display = "block";
                }
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(() => {
            alert("Network error. Please try again.");
        });
    });
}