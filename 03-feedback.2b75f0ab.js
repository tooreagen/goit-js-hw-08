console.log(16);const e=document.querySelector(".feedback-form");!function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"))||"";e.email.value=t.email,e.message.value=t.message,console.log(t)}(),e.addEventListener("input",(e=>{const{elements:{email:t,message:a}}=e.currentTarget,s={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(s))})),e.addEventListener("submit",(function(t){t.preventDefault(),localStorage.clear(),e.reset()}));
//# sourceMappingURL=03-feedback.2b75f0ab.js.map