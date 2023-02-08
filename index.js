//variable 
let btnOn = document.querySelector('.buttonOn')
let image = document.querySelector('.imageBulb')
let btnOff = document.querySelector('.buttonOff')
// add event handlers t change the image
btnOn.addEventListener('click', function(){
    image.src = './images/bulb_on.png'
    })
// add event handlers t change the image
btnOff.addEventListener('click', function(){
    image.src = './images/bulb_off.png'
    })