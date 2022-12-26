const e=document.querySelector(".feedback-form");e.addEventListener("input",(e=>{const t=({elements:{email:email,message:message}}=e.currentTarget);localStorage.setItem("feedback-form-state",e.currentTarget.elements),console.log(email.value,message.value),console.dir(e.currentTarget),console.log("Object= ",t)})),console.log(10);
//# sourceMappingURL=03-feedback.cfafe475.js.map
