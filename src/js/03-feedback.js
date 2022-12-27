import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";

updateDataUser();

form.addEventListener("input", throttle(saveDataToStorage, 500));
form.addEventListener("submit", submitForm);

function saveDataToStorage() {
    const dataFromUser = {
        email: form.email.value,
        message: form.message.value,
    }
    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
}

function updateDataUser() {
    const dataFromStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));

    if (dataFromStorage) {
        form.email.value = dataFromStorage.email;
        form.message.value = dataFromStorage.message;
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