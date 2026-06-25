// ===== PRELOADER =====
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 500);
});
// ===== SHOW DATE & TIME =====
function showDateTime() {
    const now = new Date();
    alert("Current Date & Time: " + now.toLocaleString());
}

// ===== DARK MODE TOGGLE =====
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// ===== WELCOME MESSAGE =====
window.onload = function () {
    const hour = new Date().getHours();
    let greeting = "Good Evening";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";
    alert(greeting + "! Welcome to Jephthah Boateng's Student Profile 👋");
};

// ===== SMOOTH SCROLL ACTIVE NAV =====
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    sections.forEach((section, i) => {
        const top = section.offsetTop - 80;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove("active"));
            if (navLinks[i]) navLinks[i].classList.add("active");
        }
    });
});
// ===== LOGIN MODAL =====
function showLogin() {
    const modal = document.getElementById("loginModal");
    modal.style.display = "flex";
}

function closeLogin() {
    const modal = document.getElementById("loginModal");
    modal.style.display = "none";
}
// ===== SCROLL ANIMATIONS =====
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
// ===== TYPING EFFECT =====
const roles = [
    "Web Developer 💻",
    "Graphic Designer 🎨",
    "Java Programmer ☕",
    "BTech Student 🎓",
    "Tech Enthusiast 🚀"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();
// ===== BACK TO TOP =====
window.addEventListener("scroll", function() {
    const btn = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// ===== SCROLL PROGRESS BAR =====
window.addEventListener("scroll", function() {
    const total = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / total) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
});
// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-target');
            let count = 0;
            const increment = target / 50;
            const update = () => {
                count += increment;
                if (count < target) {
                    entry.target.textContent = Math.ceil(count);
                    setTimeout(update, 30);
                } else {
                    entry.target.textContent = target + "+";
                }
            };
            update();
        }
    });
});

counters.forEach(counter => countObserver.observe(counter));