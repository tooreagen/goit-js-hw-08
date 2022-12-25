document.querySelector(".feedback-form").addEventListener("input",(e=>{localStorage.setItem("feedback-form-state",e.currentTarget.elements),console.log("Значение elements с stringify = ",JSON.stringify(localStorage.getItem("feedback-form-state"))),console.log("Значение elements = ",localStorage.getItem("feedback-form-state"))})),console.log(4);
//# sourceMappingURL=03-feedback.4d51b3e5.js.map
