const addFocusOutEventListenerToAll = function(fields) {
  for (let fieldObj of fields) {
    fieldObj.field.addEventListener("focusout", () => {
      fieldObj.validator(fieldObj.field.value, fieldObj.field);
    });
  }
};
export { addFocusOutEventListenerToAll };
