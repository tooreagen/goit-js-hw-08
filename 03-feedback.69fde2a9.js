const e=document.querySelector(".feedback-form");e.addEventListener("input",(e=>{const{elements:{email:t,message:o}}=e.currentTarget,a={email:t.value,message:o.value};localStorage.setItem("feedback-form-state",a),console.log("Object= ",a),console.log("Значение объекта с хранилища = ",localStorage.getItem("feedback-form-state"))})),console.log(13);
//# sourceMappingURL=03-feedback.69fde2a9.js.map
