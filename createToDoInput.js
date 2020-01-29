const ROOT = document.getElementById('root');

export const createToDoInput = () => {
    // 1 - create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    // 2 -create input
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Create new todo...'

    // 3 - create button
    const button = document.createElement('button');
    button.innerHTML = '🐱‍🏍';

    // 4 - insert input and button to wrapper
    wrapper.appendChild(input);
    wrapper.appendChild(button);

    // 5 - insert wrapper to #root
    ROOT.appendChild(wrapper);
}