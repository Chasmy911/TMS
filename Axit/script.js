const burgerBtn = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".header_nav__list");
const burgerItem = document.querySelectorAll(".header_nav__item")

burgerBtn.addEventListener("click", () => {

    burgerMenu.classList.toggle('header_nav__list--active');
    burgerBtn.classList.toggle('active');
})


for (let i = 0; i < burgerItem.length; i++) {
    burgerItem[i].addEventListener("click", () => {
        burgerMenu.classList.remove('header_nav__list--active');
        burgerBtn.classList.remove('active');

    })

}


new Swiper('.reviews_slider', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        740: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 1,

        },
        320: {
            slidesPerView: 1,

        },

    },


});