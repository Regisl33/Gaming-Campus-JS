const body = document.querySelector("body");
let previousScrollY = 0;
let email = " "
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
  if(scrollValue > 0.99){
    popup.style.right = "0";
  };
});
//Pop-up destruction
closeBtn.addEventListener("click", ()=>{
  popup.style.right = "-450px"
  setTimeout(() => {
    popup.remove();
  }, 1000);
});
//E-mail Form
submit.addEventListener("click", (e)=>{
  e.preventDefault();
  email = e.target.previousElementSibling.value;
});
