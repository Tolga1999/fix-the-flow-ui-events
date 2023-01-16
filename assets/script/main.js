// frontend button
let frontendAnchor = document.querySelector('a:nth-of-type(1)');
frontendAnchor.addEventListener('click', frontendAnchorClick);

function frontendAnchorClick(){
  frontendAnchor.classList.toggle('frontend-animation');
}

// design button
let designAnchor = document.querySelector('a:nth-of-type(2)');
designAnchor.addEventListener('dblclick', designAnchorClick);

function designAnchorClick(){
  designAnchor.classList.add('design-animation');
}

// & button
let andAnchor = document.querySelector('a:nth-of-type(3)');
andAnchor.addEventListener('focusout', andAnchorClick);

function andAnchorClick(){
  andAnchor.classList.add('and-animation');
}

// development button
let developmentAnchor = document.querySelector('a:nth-of-type(4)');
developmentAnchor.addEventListener('keydown', developmentAnchorClick);

function developmentAnchorClick(){
  developmentAnchor.classList.toggle('development-animation');
}

// Sprint 5 button
let sprint5Anchor = document.querySelector('a:nth-of-type(5)');
sprint5Anchor.addEventListener('keyup', sprint5AnchorClick);

function sprint5AnchorClick(){
  sprint5Anchor.classList.add('sprint5-animation');
}

// Fix button
let fixAnchor = document.querySelector('a:nth-of-type(6)');
fixAnchor.addEventListener('mouseleave', fixAnchorClick);

function fixAnchorClick(){
  fixAnchor.classList.add('fix-animation');
}

// The button
let theAnchor = document.querySelector('a:nth-of-type(7)');
theAnchor.addEventListener('mouseup', theAnchorClick);

function theAnchorClick(){
  theAnchor.classList.add('the-animation');
}

// Flow button
let flowAnchor = document.querySelector('a:nth-of-type(8)');
flowAnchor.addEventListener('focus', flowAnchorClick);

function flowAnchorClick(){
  flowAnchor.classList.add('flow-animation');
}

// User button
let userAnchor = document.querySelector('a:nth-of-type(9)');
userAnchor.addEventListener('keypress', userAnchorClick);

function userAnchorClick(){
  userAnchor.classList.add('user-animation');
}

// User button
let interfaceAnchor = document.querySelector('a:nth-of-type(10)');
interfaceAnchor.addEventListener('click', interfaceAnchorClick);

function interfaceAnchorClick(){
  interfaceAnchor.classList.add('interface-animation');
}

// // een animationend om het double click probleem op te lossen VAN JUSTUS (functie wordt weer aangeroepen nadat de animatie eindigt)
// sprint5Anchor.addEventListener('animationend', sprint5AnchorClick);