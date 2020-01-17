import { createForm } from "./createForm.js";
import { addFormSubmitEvent } from "./addFormEvents.js";

if (!localStorage.getItem("isValidationRequired")) {
  createForm();
  addFormSubmitEvent();
} else {
  console.log("СИСТЕМА ВАС ЗАПОМНИЛА, ВХОД УСПЕШЕН");
}
