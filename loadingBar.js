const loadingbarEl = document.querySelector(".content");
const firstButtonEl = document.querySelector(".first");
const secondButtonEl = document.querySelector(".second");
const thirdButtonEl = document.querySelector(".third");
const fourthButtonEl = document.querySelector(".fourth");
const fifthButtonEl = document.querySelector(".fifth");


let width = 0;
function mainfunc(event) {

  let n = Number(event.target.innerHTML.slice(0,-1));

  if(width>n) {
    width = 0;
  }
  
  let myfunc = setInterval(function() {
    if(width<n) {
      width++;
      loadingbarEl.style.width = width + "%";
    }
    else {
      clearInterval(myfunc);
    }

  }, 10);

}

firstButtonEl.addEventListener("click", mainfunc, event);
secondButtonEl.addEventListener("click", mainfunc, event);
thirdButtonEl.addEventListener("click", mainfunc, event);
fourthButtonEl.addEventListener("click", mainfunc, event);
fifthButtonEl.addEventListener("click", mainfunc, event);