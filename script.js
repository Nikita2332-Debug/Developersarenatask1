// ==========================
// Day 1: JS Setup Test
// ==========================
console.log("Portfolio JavaScript Connected");

// ==========================
// Utility Functions (Reusable)
// ==========================
function showMessage(text, color) {
  let messageBox = document.getElementById("form-message");

  if (!messageBox) {
    messageBox = document.createElement("p");
    messageBox.id = "form-message";
    document.querySelector("form").appendChild(messageBox);
  }

  messageBox.textContent = text;
  messageBox.style.color = color;
}

// ==========================
// Day 2: DOM Manipulation
// ==========================
const aboutText = document.querySelector("#about p");

if (aboutText){
  aboutText.addEventListener("click", () => {
  aboutText.textContent =
    "I am actively learning HTML, CSS, and JavaScript to become a web developer 🚀";
});
}


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});

// ==========================
// Day 4: Form Validation
// ==========================
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (name === "") {
    showMessage("Name is required", "red");
    return;
  }

  if (!email.includes("@")) {
    showMessage("Please enter a valid email address", "red");
    return;
  }

  if (message.length < 10) {
    showMessage("Message must be at least 10 characters", "red");
    return;
  }

  showMessage("Message sent successfully ✅", "green");
  form.reset();
});

// ==========================
// Day 5: Interactive Feature – Dark Mode
// ==========================
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
darkModeBtn.style.marginTop = "20px";

document.body.prepend(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
});

// ==========================
// Day 6: Load Dark Mode Preference
// ==========================
window.addEventListener("load", () => {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "true") {
    document.body.classList.add("dark-mode");
  }
});
// ==========================
// Image Gallery
// ==========================
const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll("#thumbnails img");

thumbnails.forEach((img) => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
  });
});
// ==========================
// Scroll Animation
// ==========================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial styles
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease";
});
