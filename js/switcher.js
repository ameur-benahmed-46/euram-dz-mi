// nav

let menu = document.querySelector(".toglle i");
menu.onclick = () =>{
  document.querySelector(" header ul").classList.toggle("act")
}

let nav = document.querySelectorAll(" header ul li")
nav.forEach((i)=>{
  i.onclick = () =>{
    nav.forEach((j)=>{ 
      j.classList.remove("act")
    })
    i.classList.add("act")
  }
})
//btn Scrool
let btnScrool = document.querySelector("#rtr")
window.onscroll = ()=>{
  if(scrollY >= 420){
    btnScrool.style.display = "block"
  }
  else{
    btnScrool.style.display = "none"
  }
}
btnScrool.onclick= () =>{
  scroll({top:0,left:0 , behavior:"smooth"})
}


// switcher color 
let switcher = document.querySelector(".style-switcher-toggler")
switcher.onclick = () => {
  document.querySelector(".style-switcher").classList.toggle("open")
}
var r = document.querySelector(':root');
if(localStorage.getItem("color")){
  r.style.setProperty("--main-color",localStorage.getItem("color"));
}
function setActive(indexColor){
  let arrayColor = ["#ec1839" , "#fa5b0f" , "#10cab7" , "#0084ff" ,"#607d8b"]
  r.style.setProperty("--main-color",arrayColor[indexColor]);
  localStorage.setItem("color" , arrayColor[indexColor]);
}
// Mode 
let Mood  = document.querySelector(".day-night")
  let icon = Mood.querySelector("i")
  if(localStorage.getItem("mood")){
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun")
    document.body.classList.add("dark")
    document.querySelectorAll("img[alt='back']").forEach(element => {
      element.classList.add("dark")
    });
  }
Mood.onclick = () =>{
  if(document.body.classList.contains("dark")){
    icon.classList.remove("fa-sun")
    icon.classList.add("fa-moon");
    document.body.classList.remove("dark")
    document.querySelectorAll("img[alt='back']").forEach(element => {
      element.classList.remove("dark")
    });
    localStorage.removeItem("mood")
  }else{
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun")
    document.body.classList.add("dark")   
    
    document.querySelectorAll("img[alt='back']").forEach(element => {
      element.classList.add("dark")
    });

    localStorage.setItem("mood" , "dark");
  }
}


