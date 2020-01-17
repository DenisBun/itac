import { isUserRegistered } from "./utils/isUserRegistered.js";

export const addFormSubmitEvent = () => {
  const form = document.forms[0];
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const [emailInput, passwordInput, checkboxInput] = form.elements;

    // если пользователь уже зарегистрирован
    if (isUserRegistered()) {
      const registeredEmail = localStorage.getItem("email");
      const registeredPassword = localStorage.getItem("password");
      if (
        registeredEmail === emailInput.value &&
        registeredPassword === passwordInput.value
      ) {
        console.log("ВЫ ВОШЛИ УСПЕШНО");
      } else {
        console.log("ЛОГИН ИЛИ ПАРОЛЬ ВВЕДЕНЫ НЕВЕРНО");
      }

      // если пользователь еще не зарегистрирован, то регистрируем
    } else {
      localStorage.setItem("email", emailInput.value);
      localStorage.setItem("password", passwordInput.value);
      if (checkboxInput.checked) {
        localStorage.setItem("isValidationRequired", false);
      }
      console.log("ПОЗДРАВЛЯЕМ! ВЫ УСПЕШНО ЗАРЕГИСТРИРОВАНЫ В СИСТЕМЕ!");
    }
  });
};
