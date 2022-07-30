let slider = document.querySelector('.slider')
let innerSlider = document.querySelector('.slider-inner')

let pressed = false, startX, x

/* Setting the slider to be grabbed. */
slider.onmousedown = e =>{
  pressed = true
  startX = e.offsetX = innerSlider.offsetLeft
  slider.style.cursor = 'grabbing'
}

slider.onmouseup = () => slider.style.cursor = 'grab'

slider.onmouseenter = () => slider.style.cursor = 'grab'

/* Setting the pressed variable to false when the mouse is released. */
window.onmouseup = () => pressed = false

/* This is the code that moves the slider. */
slider.onmousemove = e =>{
  if(!pressed) return //Si no es presionado
  e.preventDefault();
  x = e.offsetX;
  innerSlider.style.left = `-${x-startX}px`;

  checkBoundary()
}

const checkBoundary = () =>{
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();
  if(parseInt(innerSlider.style.left) > 0){
    innerSlider.style.left = '0px'
  }
  else if(inner.right < outer.right){
    innerSlider.style.left = `-${inner.width - outer.width}px`
  }
}
