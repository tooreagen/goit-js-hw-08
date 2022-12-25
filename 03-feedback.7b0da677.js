document.querySelector(".feedback-form").addEventListener("input",(e=>{const{elements:{email:t,message:r}}=e.currentTarget;localStorage.setItem("feedback-form-state",e.currentTarget.elements),console.log(t.value,r.value),console.dir(e.currentTarget)})),console.log(9);
//# sourceMappingURL=03-feedback.7b0da677.js.map
