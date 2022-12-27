console.log(100);
import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";

// const saveDataToStorage = (event) => {
//     const { elements: { email, message } } = event.currentTarget;
//     const dataFromUser = {
//         email: email.value,
//         message: message.value,
//     }
//     console.log(JSON.stringify(dataFromUser));
//     localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
// }

function saveDataToStorage(event) {
    const { elements: { email, message } } = event.currentTarget;
    const dataFromUser = {
        email: email.value,
        message: message.value,
    }
    console.log(JSON.stringify(dataFromUser));
    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
}

function updateDataUser() {
    const dataFromStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));

    if (dataFromStorage) {
        form.email.value = dataFromStorage.email;
        form.message.value = dataFromStorage.message;
        console.log(dataFromStorage);
    } else {
        form.email.value = "";
        form.message.value = "";
    }
}

function submitForm(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
    localStorage.removeItem(KEY_STORAGE);
    event.currentTarget.reset();
}

updateDataUser();

form.addEventListener("input", throttle(saveDataToStorage, 500));

// form.addEventListener("scroll", throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

form.addEventListener("submit", submitForm);