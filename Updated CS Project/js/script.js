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
    title: "Panner makhani" ,
    category: "Dinner",
    price: 249,
    img: "./imgs/food_lover_1.jpeg"
  },

  {
    id: 2,
    title: "Dal Tadka" ,
    category: "Dinner",
    price: 199,
    img: "./imgs/food_lover_2.jpg"
  },

  {
    id: 3,
    title: "Masala Chicken" ,
    category: "Dinner",
    price: 25,
    img: "./imgs/food_lover_3.jpg"
  },

  {
    id: 4,
    title: "Mexican Pizza" ,
    category: "Lunch",
    price: 349,
    img: "./imgs/food_lover_4.jpg"
  },

  {
    id: 5,
    title: "Veg Manchurian" ,
    category: "Starters",
    price: 99,
    img: "./imgs/food_lover_5.jpg"
  },

  {
    id: 6,
    title: "Hot and Sour Tomato Soup" ,
    category: "Lunch",
    price: 119,
    img: "./imgs/food_lover_6.jpg"
  },

  {
    id: 7,
    title: "Veg Cheese burger" ,
    category: "Starters",
    price: 199,
    img: "./imgs/food_lover_7.jpg"
  },
  
  {
    id: 8,
    title: "Strawberry Falooda" ,
    category: "Drinks",
    price: 149,
    img: "./imgs/food_lover_8.jpg"
  },

  {
    id: 9,
    title: "Ice Tea" ,
    category: "Drinks",
    price: 99,
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
    <p class="price">Only ${item.price} Rupees</p>
    <p>${item.title}</p>
</div>`;
  })
  displayMenusItem = displayMenusItem.join("");
  SectionCenter.innerHTML = displayMenusItem;
}

// static counter number start
const countersE1= document.querySelectorAll('.num');
countersE1.forEach((countersE1)=>{
  countersE1.innerText = "0";
  increamentCounter();

 function increamentCounter(){
  let currentNum = +countersE1.innerText;
  const dataCeil = countersE1.getAttribute("data-ceil");
  const increament = dataCeil / 15;
  currentNum = Math.ceil(currentNum+increament);

  if(currentNum<dataCeil){
    countersE1.innerText = currentNum;
    setTimeout(increamentCounter, 70);
  }
  else{
    countersE1.innerHTML = dataCeil
  }
 
}  

});

    
// static counter number close

// sticky menus start
const nav = document.querySelector("header");

window.addEventListener("scroll",function(){
  if(this.document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
})
// sticky menus close

//parallax effect
const Parallax = document.querySelector('#showcase');
window.addEventListener("scroll" , function(){
  let offset = window.pageYOffset;
  Parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
  