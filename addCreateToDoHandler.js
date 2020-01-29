export const addCreateToDoHandler = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', handleCreateToDo);
}

const handleCreateToDo = () => {
    const toDoInput = document.querySelector('input');
    if (!checkForExistingToDo(toDoInput.value)) {

        const toDoContainer = document.createElement('div');
        toDoContainer.className = 'toDoContainer';
    
        const toDo = document.createElement('div');
        toDo.className = 'toDo';
        toDo.innerHTML = toDoInput.value;
        toDo.addEventListener('click', changeDivToInput);
    
        const button = document.createElement('button');
        button.innerHTML = '❌';
    
        button.addEventListener('click', ({target}) => target.closest('.toDoContainer').remove())
    
        toDoContainer.appendChild(toDo);
        toDoContainer.appendChild(button);
    
        document.querySelector('.toDosWrapper').appendChild(toDoContainer);
        toDoInput.value = '';
    }

}


const changeDivToInput = (e) => {
    console.log(e.target.innerHTML);
    const input = document.createElement('input');
    input.type = 'text';
    input.value = e.target.innerHTML;
    input.addEventListener('blur', () => changeInputToDiv(e.target.innerHTML, input))
    e.target.replaceWith(input);
}

const changeInputToDiv = (previousValue, input) => {
    const toDo = document.createElement('div');
    toDo.className = 'toDo';
    toDo.innerHTML = !checkForExistingToDo(input.value) ? input.value : previousValue;
    toDo.addEventListener('click', changeDivToInput);
    input.replaceWith(toDo);
    
}

const checkForExistingToDo = (toDoValue) => {
    const currentToDos = document.querySelectorAll('.toDo');
    return [].some.call(currentToDos, toDo => toDo.innerHTML === toDoValue);
}