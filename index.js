// Write your code here!
let mainTag = document.body.querySelector('#main')
mainTag.remove();

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "YOUR-NAME is the champion"
let body = document.body

body.appendChild(newHeader)