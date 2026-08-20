const hamborgar = document.querySelector(".hamborgar");
const navMenu = document.querySelector("header .nav");

hamborgar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    navMenu.classList.remove("active");
  });
});
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealElements.forEach((el) => observer.observe(el));
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#mess").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in required fields");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please write email in correct way");
    return;
  }

  alert("Your message was send successfully , we will call you soon");
  contactForm.reset();
});
