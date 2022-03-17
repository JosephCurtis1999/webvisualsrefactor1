const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});

// Display mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Active menu when scrolling 
// const highlightMenu = () => {
//     const elem = document.querySelector('.highlight')
//     const featuresMenu = document.querySelector('#features-page')
//     const pricingMenu = document.querySelector('#pricing-page')
//     const testimonialsMenu = document.querySelector('#testimonials-page')

//     let scrollPos = window.scrollY

//     //  adds highlight class to menu items

//     if(window.innerWidth > 960 && scrollPos < 2100 && scrollPos > 800) {
//         featuresMenu.classList.add('highlight')
//         pricingMenu.classList.remove('highlight')
//         return
//     } else if (window.innerWidth > 960 && scrollPos < 3000 && scrollPos > 2110) {
//         pricingMenu.classList.add('highlight')
//         featuresMenu.classList.remove('highlight')
//         testimonialsMenu.classList.remove('highlight')
//     } else if (window.innerWidth > 960 && scrollPos < 4000 && scrollPos > 3110) {
//         testimonialsMenu.classList.add('highlight')
//         pricingMenu.classList.remove('highlight')
//         return
//     }

//     if(elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
//         elem.classList.remove('highlight')
//     }
// };

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('is-active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// contact form js

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {

    }
    parent.classList.remove("focus");
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})