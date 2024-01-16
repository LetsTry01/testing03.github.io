// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav_links");

//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav_links");

//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//         if (navLinks.classList.contains("active")) {
//             menuToggle.innerHTML = '<i class="fa fa-times"></i>'; // Change to X icon
//         } else {
//             menuToggle.innerHTML = '<i class="fa fa-bars"></i>'; // Change back to hamburger icon
//         }
//     });
// });
// active class & hamburger
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav_links");
    const links = document.querySelectorAll(".nav_links li a");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = '<i class="fa fa-times"></i>'; // Change to X icon
        } else {
            menuToggle.innerHTML = '<i class="fa fa-bars"></i>'; // Change back to hamburger icon
        }
    });

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            navLinks.classList.remove("active"); // Close the menu after a link is clicked
        });
    });
});

// Progress Bar

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("myBar");
    const progressContainer = document.querySelector(".progress-container");
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos === 0) {
            progressContainer.style.display = "none";
        } else {
            progressContainer.style.display = "block";
        }

        prevScrollpos = currentScrollPos;
        updateProgressBar();
    };

    function updateProgressBar() {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / maxScroll) * 100;
        progressBar.style.width = scrolled + "%";

        if (scrolled <= 25) {
            progressBar.className = "progress-bar progress-25";
        } else if (scrolled <= 50) {
            progressBar.className = "progress-bar progress-50";
        } else if (scrolled <= 75) {
            progressBar.className = "progress-bar progress-75";
        } else {
            progressBar.className = "progress-bar";
        }
    }
});

// Up Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});



//------------------------------------------------ portfolio ----------------------------------------------------------------//

// image open profile
function addProfileEventListeners(profileIndex) {
  const profileImage = document.querySelector(`.profile-image.profile-${profileIndex}`);
  const previewOverlay = document.querySelector(`.preview-overlay.preview-overlay-${profileIndex}`);
  const closeIcon = document.querySelector(`.close-icon.close-icon-${profileIndex}`);
  
  profileImage.addEventListener('click', function() {
      previewOverlay.classList.add('open');
  });

  closeIcon.addEventListener('click', function() {
      previewOverlay.classList.remove('open');
  });
}

// Add more profiles as needed
for (let i = 2; i <= 10; i++) {  // Change the number according to the number of profiles
  addProfileEventListeners(i);
}



// Explore button from gene cool

document.addEventListener("DOMContentLoaded", function() {
    var exploreLink = document.querySelector('a[href="#explore"]');

    exploreLink.addEventListener("click", function(event) {
      event.preventDefault();
      var contentSection = document.querySelector('.content');
      contentSection.scrollIntoView({ behavior: 'smooth' });
    });
  });


  // Promotions ads

function closeAd() {
  var adContainer = document.querySelector('.glass-ad-container');
  adContainer.style.display = 'none';
  
  // Enable scrolling on the webpage
  document.body.style.overflow = 'auto';
}

// JavaScript
var adContainer = document.querySelector('.glass-ad-container');
var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
  adContainer.classList.add('hidden');
  document.body.classList.remove('scroll-lock');
});

adContainer.addEventListener('click', function(event) {
  if (event.target === this) {
    adContainer.classList.add('hidden');
    document.body.classList.remove('scroll-lock');
  }
});

window.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('scroll-lock');
});
function closeAd() {
    var adContainer = document.querySelector('.glass-overlay');
    adContainer.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling on the webpage
  }
  
  // JavaScript
  var closeButton = document.querySelector('.close-button');
  
  closeButton.addEventListener('click', function() {
    closeAd();
  });
  




  



