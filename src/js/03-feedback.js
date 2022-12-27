import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";
let dataFromUser = {};

updateDataUser();

form.addEventListener("input", throttle(saveDataToStorage, 500));
form.addEventListener("submit", submitForm);

function saveDataToStorage(event) {
    dataFromUser[event.target.name] = event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(dataFromUser));
}

function updateDataUser() {
    let dataFromStorage = localStorage.getItem(KEY_STORAGE);

    if (dataFromStorage) {
        dataFromStorage = JSON.parse(dataFromStorage);
        Object.entries(dataFromStorage).forEach(([name, value]) => {
            form.elements[name].value = value;
            dataFromUser[name] = value;
        });
    }
}

function submitForm(event) {
    event.preventDefault();
    console.log(dataFromUser);
    localStorage.removeItem(KEY_STORAGE);
    dataFromUser = {};
    event.currentTarget.reset();
}