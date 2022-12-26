const e=document.querySelector(".feedback-form");e.addEventListener("input",(e=>{const{elements:{email:t,message:o}}=e.currentTarget;localStorage.setItem("feedback-form-state",e.currentTarget.elements),console.log(t.value,o.value),console.dir(e.currentTarget),console.log("Object= ",obj)})),console.log(11);
//# sourceMappingURL=03-feedback.ff601848.js.map
