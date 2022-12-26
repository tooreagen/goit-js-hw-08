const e=document.querySelector(".feedback-form");!function(){const e=localStorage.getItem("feedback-form-state")||"";console.log(e)}(),e.addEventListener("input",(e=>{const{elements:{email:t,message:o}}=e.currentTarget,a={email:t.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))})),console.log(15);
//# sourceMappingURL=03-feedback.cbe5e4ed.js.map
