// frontend button
let frontendAnchor = document.querySelector('a:nth-of-type(1)');

frontendAnchor.addEventListener('click', frontendAnchorClick);
frontendAnchor.addEventListener('animationend', frontendAnchorClick);

function frontendAnchorClick(){
  frontendAnchor.classList.toggle('frontend-animation');
}

// design button
let designAnchor = document.querySelector('a:nth-of-type(2)');

designAnchor.addEventListener('click', designAnchorClick);
designAnchor.addEventListener('animationend', designAnchorClick);

function designAnchorClick(){
  designAnchor.classList.toggle('design-animation');
}

// & button
let andAnchor = document.querySelector('a:nth-of-type(3)');

andAnchor.addEventListener('click', andAnchorClick);
andAnchor.addEventListener('animationend', andAnchorClick);

function andAnchorClick(){
  andAnchor.classList.toggle('and-animation');
}

// development button
let developmentAnchor = document.querySelector('a:nth-of-type(4)');

developmentAnchor.addEventListener('click', developmentAnchorClick);
// developmentAnchor.addEventListener('animationend', developmentAnchorClick);

function developmentAnchorClick(){
  developmentAnchor.classList.toggle('development-animation');
}
