const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.onclick = function() {
    let inputValue = input.value;
    input.value = '';
    const li = document.createElement('li');
    const span = document.createElement('span');
    const liButton = document.createElement('button');
    li.appendChild(span);
    li.appendChild(liButton);
    span.textContent = inputValue;
    liButton.textContent = 'Delete';
    ul.appendChild(li);
    liButton.onclick = function() {
        ul.removeChild(li);
    }
    input.focus();
}