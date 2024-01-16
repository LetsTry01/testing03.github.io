// ---------------- Loading Page ------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const loadingOverlay = document.querySelector(".loading-overlay");
    const content = document.querySelector(".content");
  
    // Simulate loading delay (you can remove this in a real scenario)
    setTimeout(function () {
      loadingOverlay.style.display = "none";
      content.style.display = "block";
    }, 1500); // 2 seconds
  });

// ------------------------------------Video Gallery-------------------------------------------------
// script.js

const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
    button.addEventListener('click', function () {
        const iframe = this.parentNode.nextElementSibling;
        iframe.src += '?autoplay=1';
        this.parentNode.style.display = 'none';
    });
});
// ------------------ popup for send ------------------------------
// Add this JavaScript to your script.js

// const openPopupButton = document.getElementById("openPopupButton");
// const popupForm = document.getElementById("popupForm");
// const closePopup = document.getElementById("closePopup");
// const cvForm = document.getElementById("cvForm");
// const nameInput = document.getElementById("name");
// const subjectInput = document.getElementById("subject");
// const attachmentInput = document.getElementById("attachment");
// const sendButton = document.getElementById("sendButton");

// openPopupButton.addEventListener("click", () => {
//     popupForm.style.display = "flex";
// });


// closePopup.addEventListener("click", () => {
//     popupForm.style.display = "none";
// });


// cvForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = nameInput.value;
//     const subject = subjectInput.value;
//     const attachment = attachmentInput.files[0];

//     const message = `Name: ${name}%0ASubject: ${subject}`;
//     const url = `https://api.whatsapp.com/send?phone=+923152111514&text=${message}`;

//     if (attachment) {
//         const formData = new FormData();
//         formData.append("attachment", attachment);

//         fetch(url, {
//             method: "POST",
//             body: formData,
//         });
//     } else {
//         window.open(url);
//     }

    
//     popupForm.style.display = "none";
// });


// ------------------------------- Service ---------------------------------------------------------------------
// description
function toggleDescription(button) {
  var fullDescription = button.parentNode.querySelector(".full-description");
  if (fullDescription.style.display === "none" || fullDescription.style.display === "") {
      fullDescription.style.display = "block";
      button.innerHTML = "Read Less";
  } else {
      fullDescription.style.display = "none";
      button.innerHTML = "Read More";
  }
}
// Testimonials








//---------------------Contact Page JavaScript -----------------------------------//
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  
  // TODO: Perform form validation
  
  // TODO: Send form data to server using AJAX or fetch
  
  // Show the popup
  showPopup();
});


function showPopup() {
  const popupOverlay = document.querySelector('.popup-overlay');
  popupOverlay.style.display = 'flex';
}


document.querySelector('.popup-close').addEventListener('click', function() {
  const popupOverlay = document.querySelector('.popup-overlay');
  popupOverlay.style.display = 'none';
});


