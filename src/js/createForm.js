import { createInputElement } from "./utils/createInput.js";
import { isUserRegistered } from "./utils/isUserRegistered.js";

const ROOT_ELEMENT = document.getElementById("root");

export const createForm = () => {
  const form = document.createElement("form");
  form.className = "form-signin";

  const h1 = document.createElement("h1");
  h1.className = "h3 mb-3 font-weight-normal";
  h1.innerHTML = isUserRegistered() ? "Please sign in" : "Please register";

  const emailInput = createInputElement({
    type: "email",
    id: "inputEmail",
    className: "form-control",
    placeholder: "Email address"
  });

  const passwordInput = createInputElement({
    type: "password",
    id: "inputPassword",
    className: "form-control",
    placeholder: "Email password"
  });

  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.className = "checkbox mb-3";
  checkboxWrapper.innerHTML = "Remember me";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = "remember-me";

  const submitBtn = document.createElement("button");
  submitBtn.className = "btn btn-lg btn-primary btn-block";
  submitBtn.type = "submit";
  submitBtn.innerHTML = "Sign in";

  form.appendChild(h1);
  form.appendChild(emailInput);
  form.appendChild(passwordInput);
  if (!isUserRegistered()) {
    checkboxWrapper.appendChild(checkbox);
    form.appendChild(checkboxWrapper);
  }
  form.appendChild(submitBtn);

  ROOT_ELEMENT.appendChild(form);
};
