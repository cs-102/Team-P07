let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBTN = document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
  menus.classList.add("active");
})

closeBTN.addEventListener("click",function(){
  menus.classList.remove("active");
})

//--------------Swiper JS Code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    968:{
      slidesPerView: 3,
    },
  }
}) ;

//Dynamic Images

const SectionCenter = document.querySelector('.menus_items_container');
const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const Category = e.currentTarget.dataset.id;
    const menucategory = menu.filter(function(menuItem){
      if (menuItem.category==Category){
        return menuItem;
      }
    });
    if (Category=="all"){
      displayMenusItem(menu);
    }
    else{
      displayMenusItem(menucategory);
    }
  })
  
});

const menu=[
  {
    id: 1,
    title: "Chicken and Cashews" ,
    category: "Dinner",
    price: 25,
    img: "./imgs/food_lover_1.jpeg"
  },

  {
    id: 2,
    title: "Chicken and Cashews" ,
    category: "Dinner",
    price: 25,
    img: "./imgs/food_lover_2.jpg"
  },

  {
    id: 3,
    title: "Chicken and Cashews" ,
    category: "Dinner",
    price: 25,
    img: "./imgs/food_lover_3.jpg"
  },

  {
    id: 4,
    title: "Chicken and Cashews" ,
    category: "Lunch",
    price: 25,
    img: "./imgs/food_lover_4.jpg"
  },

  {
    id: 5,
    title: "Chicken and Cashews" ,
    category: "Starters",
    price: 25,
    img: "./imgs/food_lover_5.jpg"
  },

  {
    id: 6,
    title: "Chicken and Cashews" ,
    category: "Lunch",
    price: 25,
    img: "./imgs/food_lover_6.jpg"
  },

  {
    id: 7,
    title: "Chicken and Cashews" ,
    category: "Starters",
    price: 25,
    img: "./imgs/food_lover_7.jpg"
  },
  
  {
    id: 8,
    title: "Chicken and Cashews" ,
    category: "Drinks",
    price: 25,
    img: "./imgs/food_lover_8.jpg"
  },

  {
    id: 9,
    title: "Chicken and Cashews" ,
    category: "Drinks",
    price: 25,
    img: "./imgs/food_lover_9.jpg"
  },

]

window.addEventListener("DOMContentLoaded",function(){
  displayMenusItem(menu);
});

function displayMenusItem(menuItem){
  let displayMenusItem = menuItem.map(function(item){
    return `<div class="img_cards">
    <img src=${item.img} alt="">
    <p class="price">Only ${item.price} Dollars</p>
    <p>${item.title}</p>
</div>`;
  })
  displayMenusItem = displayMenusItem.join("");
  SectionCenter.innerHTML = displayMenusItem;
}