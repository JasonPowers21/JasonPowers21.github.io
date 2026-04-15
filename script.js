// Get the page name
const pageName = document.body.getAttribute("data-page") || "Unknown Page";

// Save the time
const pageStartTime = Date.now();


function trackEvent(eventName, eventData) {
  if (typeof gtag === "function") {
    gtag("event", eventName, eventData);
  } else {
    console.log("Google Analytics is not connected yet.");
    console.log(eventName, eventData);
  }
}


// Track page view
trackEvent("page_view_custom", {
  page_name: pageName
});


// Track navigation clicks
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    trackEvent("navigation_click", {
      page_name: pageName,
      link_text: link.textContent.trim(),
      link_url: link.getAttribute("href")
    });
  });
});


// Track button clicks
const buttons = document.querySelectorAll(".track-btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    trackEvent("button_click", {
      page_name: pageName,
      button_text: button.textContent.trim(),
      button_id: button.id || "no_id"
    });
  });
});


// Track time spent on the page
window.addEventListener("beforeunload", function() {
  const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);

  trackEvent("time_on_page", {
    page_name: pageName,
    seconds_spent: timeSpent
  });
});


// HOME PAGE FORM 
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    trackEvent("newsletter_signup", {
      page_name: pageName,
      form_id: "newsletterForm"
    });

    document.getElementById("newsletterMessage").textContent =
      "Thanks, " + name + "! You’ve been added to our newsletter list.";

    newsletterForm.reset();
  });
}


// ABOUT PAGE FORM
const voteForm = document.getElementById("voteForm");

if (voteForm) {
  voteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const favoriteItem = document.getElementById("favoriteItem").value;

    trackEvent("favorite_item_vote", {
      page_name: pageName,
      form_id: "voteForm",
      favorite_item: favoriteItem
    });

    document.getElementById("voteMessage").textContent =
      "Thanks for voting! You picked " + favoriteItem + ".";

    voteForm.reset();
  });
}


// CONTACT PAGE FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const visitorName = document.getElementById("visitorName").value;

    trackEvent("contact_form_submit", {
      page_name: pageName,
      form_id: "contactForm"
    });

    document.getElementById("contactMessage").textContent =
      "Thanks, " + visitorName + ". Your message has been received.";

    contactForm.reset();
  });
}


// CONTACT PAGE BUTTON
const hoursButton = document.getElementById("hoursButton");

if (hoursButton) {
  hoursButton.addEventListener("click", function() {
    document.getElementById("hoursInfo").innerHTML =
      "<strong>Cafe Hours:</strong><br>" +
      "Monday - Friday: 7:00 AM to 6:00 PM<br>" +
      "Saturday: 8:00 AM to 4:00 PM<br>" +
      "Sunday: Closed";

    trackEvent("view_cafe_hours", {
      page_name: pageName,
      button_id: "hoursButton"
    });
  });
}
