const backgroundImages = ["background1.jpg", "background2.jpg", "background3.jpg"];
const logoImages = ["logo2.png"];
const backgroundSlideshowDuration = 4000; // Change background image every 4 seconds
const logoSlideshowDuration = 2000; // Change logo image every 2 seconds

const backgroundImage = document.getElementById("background-image");
const logoImage = document.querySelector(".logo img");
let currentBackgroundIndex = 0;
let currentLogoIndex = 0;

function changeBackgroundImage() {
    currentBackgroundIndex++;
    if (currentBackgroundIndex === backgroundImages.length) {
        currentBackgroundIndex = 0;
    }

    backgroundImage.style.backgroundImage = `url(${backgroundImages[currentBackgroundIndex]})`;

    setTimeout(changeBackgroundImage, backgroundSlideshowDuration);
}

function changeLogoImage() {
    currentLogoIndex++;
    if (currentLogoIndex === logoImages.length) {
        currentLogoIndex = 0;
    }

    logoImage.src = logoImages[currentLogoIndex];

    setTimeout(changeLogoImage, logoSlideshowDuration);
}

changeBackgroundImage();

changeLogoImage();


// Section Scroll Buttons
document.getElementById('scroll-button').addEventListener('click', function () {
    const newSection = document.getElementById('new-section');
    window.scrollTo({
        top: newSection.offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-button2').addEventListener('click', function () {
    const newSection2 = document.getElementById('new-section2');
    window.scrollTo({
        top: newSection2.offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-button3').addEventListener('click', function () {
    const newSection3 = document.getElementById('new-section3');
    window.scrollTo({
        top: newSection3.offsetTop,
        behavior: 'smooth'
    });
});


// Back to Top
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Jump Sections on Scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const totalSections = sections.length;
    let currentSectionIndex = 0;
    let scrolling = false;

    window.addEventListener('wheel', function (e) {
        if (scrolling) return;

        if (e.deltaY > 0) {
            // Scrolling down
            if (currentSectionIndex < totalSections - 1) {
                currentSectionIndex++;
            }
        } else if (e.deltaY < 0) {
            // Scrolling up
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
            }
        }

        scrollToSection(currentSectionIndex);
        scrolling = true;

        setTimeout(function () {
            scrolling = false;
        }, 700); // Adjust this value to control the scroll speed
    });

    function scrollToSection(index) {
        const section = sections[index];
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
});

// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


// Section 2
const leftDivImage = document.querySelector('.left-div img');
const modelViewer = document.querySelector('model-viewer'); 
const titleRectangle = document.querySelector('.title-rectangle h1');

// Change the content based on button 1 click
document.getElementById('small-button1').addEventListener('click', () => {
    leftDivImage.src = 'new2img1.jpg';
    modelViewer.src = 'C1.glb';
    titleRectangle.innerText = 'Orc Assassin';
});

// Change the content based on button 2 click
document.getElementById('small-button2').addEventListener('click', () => {
    leftDivImage.src = 'new2img2.jpg';
    modelViewer.src = 'C2.glb';
    titleRectangle.innerText = 'Holy Order Knight';
});

// Change the content based on button 3 click
document.getElementById('small-button3').addEventListener('click', () => {
    leftDivImage.src = 'new2img3.jpg';
    modelViewer.src = 'C3.glb';
    titleRectangle.innerText = 'Barbarian Chief';
});



