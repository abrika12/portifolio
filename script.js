const words = [
  "a Web Developer",
  "a Designer",
  "a Creative Learner"
];

const typingElement = document.getElementById("typing");
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeWords() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  letterIndex += deleting ? -1 : 1;
  typingElement.textContent = currentWord.substring(0, letterIndex);

  let delay = deleting ? 60 : 120;

  if (!deleting && letterIndex === currentWord.length) {
    deleting = true;
    delay = 1200;
  } else if (deleting && letterIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 400;
  }

  setTimeout(typeWords, delay);
}

typeWords();

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

const contactForm = document.getElementById("form");
const messageElement = document.getElementById("msg");

if (contactForm && messageElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    messageElement.textContent =
      "Thanks! The form needs an email service before it can send your message.";
  });
}