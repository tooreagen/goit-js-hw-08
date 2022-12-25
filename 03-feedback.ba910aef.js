document.querySelector(".feedback-form").addEventListener("input",(e=>{const{elements:{email:a,message:t}}=e.target;localStorage.setItem("email",a.value),localStorage.setItem("message",t.value),console.log("Значение поля email = ",localStorage.getItem("email")),console.log("Значение поля message = ",localStorage.getItem("message"))})());
//# sourceMappingURL=03-feedback.ba910aef.js.map
