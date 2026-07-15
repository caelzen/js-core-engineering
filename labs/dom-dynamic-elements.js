const body = document.querySelector('body');
let p1 = document.createElement('p');
let h3 = document.createElement('h3');
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');


p1.textContent = 'Hey I’m red!';
p1.style.color = 'red';

h3.textContent = 'I’m a blue h3!';
h3.style.color = 'blue';

div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

h1.textContent = "I'm in a div";
p2.textContent = 'ME TOO!';

body.append(p1, h3, div);
div.append(h1, p2);