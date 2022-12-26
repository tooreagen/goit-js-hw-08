const e=document.querySelector(".feedback-form");e.addEventListener("input",(e=>{const{elements:{email:t,message:o}}=e.currentTarget,l={email:t.value,message:o.value};localStorage.setItem("feedback-form-state",e.currentTarget.elements),console.log(t.value,o.value),console.dir(e.currentTarget),console.log("Object= ",l)})),console.log(12);
//# sourceMappingURL=03-feedback.fc594f93.js.map
