//Consts
const body = document.querySelector("body");
const spans = document.querySelectorAll(".spans")
//Variables
let previousScrollY = 0;
let playonce = true;
let email = " ";
//Cursor
window.addEventListener("mousemove", (e)=>{
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
});
//Navbar
window.addEventListener("scroll", ()=>{
  window.scrollY > previousScrollY ? navbar.style.top = "-58px" : navbar.style.top = "0";
  previousScrollY = window.scrollY;
});
//Pop-up entrance
window.addEventListener("scroll", ()=>{
  let scrollValue = ((window.scrollY + window.innerHeight) / body.offsetHeight);
  if(scrollValue > 0.99 && playonce){
    popup.style.right = "0";
    playonce = false;
  };
});
//Pop-up destruction
closeBtn.addEventListener("click", ()=>{
  popup.style.right = "-450px";
});
//E-mail Form
submit.addEventListener("click", (e)=>{
  e.preventDefault();
  email = e.target.previousElementSibling.value;
  popup.style.right = "-450px";
});
//Sidebar
btnMenu.addEventListener("click", ()=>{
  spans.forEach((span) =>{
    span.classList.toggle("active");
  });
  if(document.querySelector(".active")){
    content.style.opacity = "0.85";
  }else{
    content.style.opacity = "1";
  };
});