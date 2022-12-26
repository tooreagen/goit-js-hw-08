!function(){var e,t=document.querySelector(".feedback-form"),a="feedback-form-state";e=localStorage.getItem(a)||"",console.log(e),t.addEventListener("input",(function(e){var t=e.currentTarget.elements,o=t.email,l=t.message,n={email:o.value,message:l.value};localStorage.setItem(a,JSON.stringify(n))})),console.log(15)}();
//# sourceMappingURL=03-feedback.01dfa74f.js.map
