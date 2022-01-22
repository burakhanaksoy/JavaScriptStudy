import submitBtn from './app.js';

const someFunction = () => {
  console.log("im another function");
};

const SPECIAL_CHARS = `!@#$%^&*()_+=-/?><,.'";:';\``;

const specialCharacterValidator = function(value, field) {
  let valid = true;
  for (let char of SPECIAL_CHARS) {
    if (value.includes(char) || value === '') {
      valid = false;
      break;
    }
  }

  processClassList(field, valid);
};

const ageValidator = function(value, field) {
  let valid = true;
  const val = parseInt(value);
  if (typeof val !== "number" || val.toString() === "NaN" || value.length !== val.toString().length) {
    valid = false;
  }
  processClassList(field, valid);
};

const processClassList = function(field, valid){
  if (!valid) {
    field.classList.add("invalid-field");
    // submitBtn.classList.add('submit-btn-inactive');
    // submitBtn["submitBtn"].classList.add('submit-btn-inactive');
    return;
  }
  if (valid) {
    field.classList.remove("invalid-field");
    // submitBtn.classList.add('submit-btn-inactive');
    // submitBtn["submitBtn"].classList.remove('submit-btn-inactive');
    
    return;
  }
}
export { someFunction, specialCharacterValidator, ageValidator };
