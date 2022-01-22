import {
  someFunction,
  specialCharacterValidator,
  ageValidator,
} from "./validators.js";
import { addFocusOutEventListenerToAll } from "./helper.js";

const formObject = {
  name: {
    placeholder: "Your name",
    value: "",
    id: "name",
  },
  surname: {
    placeholder: "Your last name",
    value: "",
    id: "surname",
  },
  age: {
    placeholder: "Your age",
    value: "",
    id: "age",
  },
};
const formDiv = document.getElementById("form");
const afterSubmitBox = document.querySelector(".after-submit");

const prepareForm = function() {
  let objectKeys = Object.keys(formObject);
  for (let key of objectKeys) {
    let formElement = formObject[key];
    const id = formElement.id;
    const value = formElement.value;
    const placeholder = formElement.placeholder;

    const formContent = `<div>
                    <label for=${id}>${id}:</label>
                    <input type="text" id="${id}" name="${id}" value="${value}" placeholder="${placeholder}"
                    >
                    </div></br>`;

    formDiv.innerHTML += formContent;
  }
  formDiv.innerHTML += `<button id="refresh" type="button">Refresh</button>`;
  formDiv.innerHTML += `<input id="submit" type="submit" value="Submit">`;
};

prepareForm();

const submitBtn = document.getElementById("submit");
const refreshBtn = document.getElementById("refresh");
const nameField = document.getElementById("name");
const surnameField = document.getElementById("surname");
const ageField = document.getElementById("age");

const fields = [
  { field: nameField, validator: specialCharacterValidator },
  { field: surnameField, validator: specialCharacterValidator },
  { field: ageField, validator: ageValidator },
];

addFocusOutEventListenerToAll(fields);

const submitForm = function() {
  afterSubmitBox.classList.remove("after-submit-active");
  for (let field of fields) {
    if (field.field.classList[0] === "invalid-field") {
      alert(`Invalid field "${field.field.name}"`);
      return;
    }
  }
  for (let field of fields) {
    let formField = field.field;
    formObject[formField.name].value = formField.value;
  }

  afterSubmitBox.innerHTML = "";
  afterSubmitBox.innerHTML = "<h3>Submitted Form Below</h3>";
  afterSubmitBox.innerHTML += `
                              <h4>Name: ${formObject.name.value}</h4>
                              <h4>Last Name: ${formObject.surname.value}</h4>
                              <h4>Age: ${formObject.age.value}</h4>
                              `;
  afterSubmitBox.classList.add("after-submit-active");
};

submitBtn.addEventListener("click", submitForm);
refreshBtn.addEventListener("click", () => {
  for (let field of fields) {
    let formField = field.field;
    formField.value = "";
  }
  afterSubmitBox.classList.remove("after-submit-active");
});
setInterval(() => {
  let valid = true;
  for (let field of fields) {
    if (field.field.classList[0] === "invalid-field") {
      valid = false;
    }
  }

  if (valid) {
    submitBtn.classList.remove("submit-btn-inactive");
    submitBtn.classList.add("submit-btn-active");
  } else {
    submitBtn.classList.add("submit-btn-inactive");
    submitBtn.classList.remove("submit-btn-active");
  }
}, 250);

export default { submitBtn };
