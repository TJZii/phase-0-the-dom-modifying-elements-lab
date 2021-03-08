// Write your code here!
const element = document.createElement('div');

document.body.appendChild(element);

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

element.style.backgroundColor = '#24677B';

element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2;


main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id = 'victory';

newHeader.innerHTML = 'Tristan is the champion!';

