const header = document.querySelector("header");
const hamburger= document.querySelector(".header__hamburger");
const overlay = document.querySelector(".overlay");
const header_menu = document.querySelector(".header__menu")

hamburger.addEventListener("click",function(){
   console.log("hello world");
      //close menu
   if(header.classList.contains("open")){
      header.classList.remove("open");
      overlay.classList.remove("fade-in");
      overlay.classList.add("fade-out");
      header_menu.classList.remove("fade-in");
      header_menu.classList.add("fade-out");
   } //open menu
   else{
      header.classList.add("open");
      overlay.classList.add("fade-in");
      overlay.classList.remove("fade-out");
      header_menu.classList.add("fade-in");
      header_menu.classList.remove("fade-out");
   }
})