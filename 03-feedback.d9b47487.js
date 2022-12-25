document.querySelector(".feedback-form").addEventListener("input",(function(e){localStorage.setItem("feedback-form-state",e.currentTarget.elements),console.log("Значение elements = ",JSON.stringify(localStorage.getItem("feedback-form-state")))})),console.log(3);
//# sourceMappingURL=03-feedback.d9b47487.js.map
