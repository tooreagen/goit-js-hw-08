const form = document.querySelector(".feedback-form");

const saveDataToStorage = (event) => {
    const { elements: { email, message } } = event.target;
    localStorage.setItem("email", email.value);
    localStorage.setItem("message", message.value);

    console.log("Значение поля email = ", localStorage.getItem("email"));
    console.log("Значение поля message = ", localStorage.getItem("message"));
}

form.addEventListener("input", saveDataToStorage());





// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// const regFormVerification = (event) => {
//     event.preventDefault();
//     const { elements: { email, password } } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//         alert("Заповніть всі поля!");
//         return;
//     }
//     const userData = {
//         email: email.value,
//         password: password.value,
//     }
//     console.log(userData);
//     event.currentTarget.reset();
//     }

// form.addEventListener("submit", regFormVerification);