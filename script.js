// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {

  menuButton.addEventListener("click", function () {

    const isOpen = menu.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  // Close menu after clicking a link
  const menuLinks = menu.querySelectorAll("a");

  menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      menu.classList.remove("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// ========================================
// PROFILE IMAGE SLIDER
// ========================================

const profileImage = document.getElementById("profileImage");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

const profileImages = [
  "Img/Img1.jpg",
  "Img/Img2.jpg"
];

let currentImage = 0;


// ========================================
// SHOW IMAGE
// ========================================

function showImage(index) {

  currentImage = index;

  profileImage.src = profileImages[currentImage];

}


// ========================================
// PREVIOUS IMAGE
// ========================================

if (prevImage) {

  prevImage.addEventListener("click", function () {

    currentImage--;

    if (currentImage < 0) {
      currentImage = profileImages.length - 1;
    }

    showImage(currentImage);

  });

}


// ========================================
// NEXT IMAGE
// ========================================

if (nextImage) {

  nextImage.addEventListener("click", function () {

    currentImage++;

    if (currentImage >= profileImages.length) {
      currentImage = 0;
    }

    showImage(currentImage);

  });

}


// ========================================
// FOOTER YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}