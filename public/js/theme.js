const body = document.body;
const buttons = document.querySelectorAll(".mode-btns button");

const saved = localStorage.getItem("mode") || "light";
setMode(saved);

function setMode(mode){
  body.className = mode;
  localStorage.setItem("mode", mode);
  buttons.forEach(b=>{
    b.classList.toggle("active", b.dataset.mode === mode);
  });
}

buttons.forEach(btn=>{
  btn.onclick = ()=> setMode(btn.dataset.mode);
});
