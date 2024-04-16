let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBTN = document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
  menus.classList.add("active");
})

closeBTN.addEventListener("click",function(){
  menus.classList.remove("active");
})


function Confirmation() {
  // Fetching input field values
  var name = document.querySelector('input[type="text"][placeholder="Name"]').value.trim();
  var contactNumber = document.querySelector('input[type="text"][placeholder="Contact Number"]').value.trim();
  var email = document.querySelector('input[type="email"][placeholder="Email Address"]').value.trim();
  var numberOfPersons = document.querySelector('input[type="text"][placeholder="Number of Persons"]').value.trim();
  var bookDate = document.querySelector('input[type="date"][placeholder="Book date"]').value.trim();
  var yourTime = document.querySelector('input[type="text"][placeholder="Your Time"]').value.trim();

  // Validation
  if (!name.match(/^[A-Za-z\s]+$/)) {
      alert("Invalid name. Please enter a valid name.");
      return;
  }
  if (!contactNumber.match(/^\d{10}$/)) {
      alert("Invalid contact number. Please enter a 10-digit number.");
      return;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
  }
  if (isNaN(numberOfPersons) || numberOfPersons <= 0) {
      alert("Invalid number of persons. Please enter a valid number.");
      return;
  }
  var selectedDate = new Date(bookDate);
  var today = new Date();
  if (selectedDate < today) {
      alert("Invalid date. Please select a future date.");
      return;
  }
  if (!yourTime.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/i)) {
      alert("Invalid time format. Please enter time in HH:MM AM/PM format.");
      return;
  }

  // Clearing input fields
  document.querySelector('input[type="text"][placeholder="Name"]').value = "";
  document.querySelector('input[type="text"][placeholder="Contact Number"]').value = "";
  document.querySelector('input[type="email"][placeholder="Email Address"]').value = "";
  document.querySelector('input[type="text"][placeholder="Number of Persons"]').value = "";
  document.querySelector('input[type="date"][placeholder="Book date"]').value = "";
  document.querySelector('input[type="text"][placeholder="Your Time"]').value = "";
  document.querySelector('textarea[placeholder="Message Request"]').value = "";

  // Alerting booking confirmation
  alert("Your booking has been confirmed!");
}


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
const staticCounterSection = document.querySelector('#static_counter');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounterAnimation();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

observer.observe(staticCounterSection);

function startCounterAnimation() {
    const counters = document.querySelectorAll('.num');
    counters.forEach(counter => {
        counter.innerText = "0";
        animateCounter(counter);
    });
}

function animateCounter(counterElement) {
    let currentNum = +counterElement.innerText;
    const dataCeil = counterElement.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
        counterElement.innerText = currentNum;
        setTimeout(() => animateCounter(counterElement), 70);
    } else {
        counterElement.innerHTML = dataCeil;
    }
}
    
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
  