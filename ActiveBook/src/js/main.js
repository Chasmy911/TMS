const bannerText = document.querySelector(".banner");
const burgerBtn = document.querySelector(".burger__btn");
const banner = document.querySelector(".banner");
const burgerMenu = document.querySelector(".header-box__list");
const burgerItem = document.querySelectorAll(".header-box__items");




burgerBtn.addEventListener("click", () => {
    banner.classList.toggle('banner__active');
    burgerMenu.classList.toggle('burger__active');
    burgerBtn.classList.toggle('active');



})


for(let i=0; i<burgerItem.length; i++) {
    burgerItem[i].addEventListener("click", () => {
        burgerMenu.classList.remove('burger__active');
        banner.classList.remove('banner__active');
        burgerBtn.classList.remove('active');
        
    })
    
    }


