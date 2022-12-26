const e=document.querySelector(".feedback-form");dataFromStorage=localStorage.getItem(LOCALSTORAGE_KEY)||"",console.log(dataFromStorage),e.addEventListener("input",(e=>{const{elements:{email:t,message:a}}=e.currentTarget,o={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(o))})),console.log(15);
//# sourceMappingURL=03-feedback.c071878e.js.map
