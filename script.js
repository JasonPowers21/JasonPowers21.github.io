// Track when the page was opened
const pageName = document.body.getAttribute("data-page");
const pageStartTime = Date.now();

console.log(`Page loaded: ${pageName}`);

// Track different clicks
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(`Navigation clicked on ${pageName}: ${link.textContent}`);
  });
});

// Track all button clicks
const buttons = document.querySelectorAll(".track-btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Button clicked on ${pageName}: ${button.textContent}`);
  });
});

// Track time spent on page
window.addEventListener("beforeunload", () => {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
  console.log(`Time spent on ${pageName}: ${timeSpent} seconds`);
});

// Home page
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log(`Form submitted on ${pageName}: Newsletter Form`);
    console.log(`User entered Name: ${name}, Email: ${email}`);

    document.getElementById("newsletterMessage").textContent =
      `Thanks, ${name}! You’ve been added to our newsletter list.`;

    newsletterForm.reset();
  });
}

// About page
const voteForm = document.getElementById("voteForm");
if (voteForm) {
  voteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const favoriteItem = document.getElementById("favoriteItem").value;

    console.log(`Form submitted on ${pageName}: Vote Form`);
    console.log(`Favorite item selected: ${favoriteItem}`);

    document.getElementById("voteMessage").textContent =
      `Thanks for voting! You picked ${favoriteItem}.`;

    voteForm.reset();
  });
}

// Contact page
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const visitorName = document.getElementById("visitorName").value;
    const visitorMessage = document.getElementById("visitorMessage").value;

    console.log(`Form submitted on ${pageName}: Contact Form`);
    console.log(`Message from ${visitorName}: ${visitorMessage}`);

    document.getElementById("contactMessage").textContent =
      `Thanks, ${visitorName}. Your message has been received.`;

    contactForm.reset();
  });
}

// Button on contact page
const hoursButton = document.getElementById("hoursButton");
if (hoursButton) {
  hoursButton.addEventListener("click", () => {
    document.getElementById("hoursInfo").innerHTML = `
      <strong>Cafe Hours:</strong><br>
      Monday - Friday: 7:00 AM to 6:00 PM<br>
      Saturday: 8:00 AM to 4:00 PM<br>
      Sunday: Closed
    `;

    console.log(`Cafe hours viewed on ${pageName}`);
  });
}