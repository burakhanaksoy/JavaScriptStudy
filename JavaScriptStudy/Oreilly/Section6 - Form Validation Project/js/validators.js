const SPECIAL_CHARS = `!@#$%^&*()_+=-/?><,.'";:';\``;

const specialCharacterValidator = function(value, field) {
  let valid = true;
  for (let char of SPECIAL_CHARS) {
    if (value.includes(char) || value === "") {
      valid = false;
      break;
    }
  }

  processClassList(field, valid);
};

const ageValidator = function(value, field) {
  let valid = true;
  const val = parseInt(value);
  if (
    typeof val !== "number" ||
    val.toString() === "NaN" ||
    value.length !== val.toString().length
  ) {
    valid = false;
  }
  processClassList(field, valid);
};

const processClassList = function(field, valid) {
  if (!valid) {
    field.classList.add("invalid-field");
    return;
  }
  if (valid) {
    field.classList.remove("invalid-field");
    return;
  }
};
export { specialCharacterValidator, ageValidator };
