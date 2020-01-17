export const createInputElement = ({
  type = "text",
  id,
  className,
  placeholder = ""
}) => {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.id = id;
  inputElement.className = className;
  inputElement.placeholder = placeholder;
  inputElement.required = true;
  return inputElement;
};
