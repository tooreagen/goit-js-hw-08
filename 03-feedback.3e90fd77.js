!function(){var e=document.querySelector(".feedback-form"),a="feedback-form-state";dataFromStorage=localStorage.getItem(a)||"",console.log(dataFromStorage),e.addEventListener("input",(function(e){var t=e.currentTarget.elements,o=t.email,r=t.message,l={email:o.value,message:r.value};localStorage.setItem(a,JSON.stringify(l))})),console.log(15)}();
//# sourceMappingURL=03-feedback.3e90fd77.js.map
