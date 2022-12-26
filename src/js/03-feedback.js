const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";

const saveDataToStorage = (event) => {
    const { elements: { email, message } } = event.currentTarget;
    const dataFromUser = {
        email: email.value,
        message: message.value,
    }

    localStorage.setItem(KEY_STORAGE, dataFromUser);
    console.log("Object= ", dataFromUser);
    // console.log("Значение elements с stringify = ", JSON.stringify(localStorage.getItem(KEY_STORAGE)));
    console.log("Значение объекта с хранилища = ", localStorage.getItem(KEY_STORAGE));
}

form.addEventListener("input", saveDataToStorage);
console.log(13);


// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "goit-example-message";

// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }













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