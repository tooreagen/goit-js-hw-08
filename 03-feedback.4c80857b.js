document.querySelector(".feedback-form").addEventListener("input",(e=>{const{elements:{email:a,message:t}}=e.currentTarget;localStorage.setItem("email",a.value),localStorage.setItem("message",t.value),console.log("Значение поля email = ",localStorage.getItem("email")),console.log("Значение поля message = ",localStorage.getItem("message"))})());
//# sourceMappingURL=03-feedback.4c80857b.js.map
