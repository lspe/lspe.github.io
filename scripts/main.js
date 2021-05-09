/* Условия - проверяет истинно или ложно выражение, а затем выполняет код в зависимости от результата. 

var iceCream = prompt('Your favorite ice cream?')
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream');
} else {
    alert('Awwww? but chocolate is my favorite...')
}
 */

// Умножение простых чисел

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// Смена изображения по клику

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/img1.jpg') {
        myImage.setAttribute('src', 'img/img2.jpg')
    } else {
        myImage.setAttribute('src', 'img/img1.jpg')
    }
}

// Персональное приветсвие

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name')
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to THE GAME, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome to THE GAME, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}