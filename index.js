


const header = document.querySelector("header");
// console.log(nav);
window.addEventListener("scroll", () => {
   console.log(window.scrollY);
   
   if (window.scrollY > 120){
      header.style.top = 0;
   } else{
      header.style.top = "-0px"
   }
});


let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");



toggle.addEventListener("click", function ()  {
    body.classList.toggle("open");
});