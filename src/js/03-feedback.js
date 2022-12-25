const form = document.querySelector(".feedback-form");

const saveDataToStorage = (event) => {
    const { elements: { email, message } } = event.currentTarget;
    localStorage.setItem("elements", elements);

    console.log("Значение elements = ", localStorage.getItem("elements"));}

form.addEventListener("input", saveDataToStorage);


console.log(1);


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