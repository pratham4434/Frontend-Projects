// Swiper js


// Nav open close
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn');
      
if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click", () =>{
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    })
}
if(navMenu && navOpenBtn){
    navCloseBtn.addEventListener("click", () =>{
        navMenu.classList.remove("open");
        body.style.overflowY = "hidden";

    })
}
// Change header bg color


// Scroll up button
  
  
  
// Nav link indicator
 
  
// Scroll Reveal Animation
  