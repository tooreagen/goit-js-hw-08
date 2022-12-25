const form = document.querySelector(".feedback-form");

const saveDataToStorage = (event) => {
    const { elements: { email, message } } = event.currentTarget;
    localStorage.setItem("feedback-form-state", event.currentTarget.elements);
    console.log(email, message);
    // console.log("Значение elements с stringify = ", JSON.stringify(localStorage.getItem("feedback-form-state")));
    // console.log("Значение elements = ", localStorage.getItem("feedback-form-state"));
}

form.addEventListener("input", saveDataToStorage);


console.log(7);


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