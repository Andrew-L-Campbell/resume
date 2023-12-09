const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.getElementById('slider-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Replace these image URLs with your own
    const imageUrls = [
        './img/ProjectPart0.png',
        './img/ProjectPart0.1.png',
        './img/ProjectPart1.png',
        './img/ProjectPart2.png',
        './img/ProjectPart3.png',
        './img/ProjectPart4.png',
        './img/ProjectPart5.png',
        './img/ProjectPart6.png'
    ];

    imageUrls.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        sliderWrapper.appendChild(img);
    });

    let currentIndex = 0;

    function showImage(index) {
        const transformValue = -index * 100 + '%';
        sliderWrapper.style.transform = 'translateX(' + transformValue + ')';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        showImage(currentIndex);
    }

    // Add event listeners for navigation (next and previous)
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Add event listeners for keyboard navigation (left and right arrow keys)
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            showNextImage();
        } else if (event.key === 'ArrowLeft') {
            showPrevImage();
        }
    });
});
