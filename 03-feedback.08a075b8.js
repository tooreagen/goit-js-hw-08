!function(){var e=document.querySelector(".feedback-form");dataFromStorage=localStorage.getItem(LOCALSTORAGE_KEY)||"",console.log(dataFromStorage),e.addEventListener("input",(function(e){var a=e.currentTarget.elements,t=a.email,o=a.message,r={email:t.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))})),console.log(15)}();
//# sourceMappingURL=03-feedback.08a075b8.js.map