const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";

const saveDataToStorage = (event) => {
    const { elements: { email, message } } = event.currentTarget;
    const dataFromUser = {
        email: email.value,
        message: message.value,
    }

    localStorage.setItem(KEY_STORAGE, event.currentTarget.elements);
    console.log(email.value, message.value);
    console.dir(event.currentTarget);
    console.log("Object= ", dataFromUser);
    // console.log("Значение elements с stringify = ", JSON.stringify(localStorage.getItem("feedback-form-state")));
    // console.log("Значение elements = ", localStorage.getItem("feedback-form-state"));
}

form.addEventListener("input", saveDataToStorage);
console.log(12);


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