export const addToDosWrapper = () => {
    const toDosWrapper = document.createElement('div');
    toDosWrapper.className = 'toDosWrapper';
    document.getElementById('root').appendChild(toDosWrapper);
}