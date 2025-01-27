const texts = ["A Web Developer.", "A Programmer.", "A Front-end Developer."]; // Array of texts
const typingElement = document.getElementById("typing");

let textIndex = 0; // To track the current text in the array
let charIndex = 0; // To track the current character in the current text
let isDeleting = false; // To determine if we are typing or deleting

function typeEffect() {
  const currentText = texts[textIndex];
  
  if (!isDeleting) {
    // Typing forward
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true; // Start deleting after typing is complete
      setTimeout(typeEffect, 1000); // Pause before deleting
      return;
    }
  } else {
    // Deleting backward
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false; // Switch to typing next text
      textIndex = (textIndex + 1) % texts.length; // Move to the next text in the array
    }
  }

  const typingSpeed = isDeleting ? 80 : 100; // Speed for typing and deleting
  setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();
