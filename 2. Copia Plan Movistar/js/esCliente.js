const seleccionar = str => document.querySelector(str)

const planPrice = 2.199
let userPrice = document.querySelector('#js__no-user')
userPrice.innerHTML = planPrice

// Dropdown card plan TV
let dropdown = document.querySelectorAll('.dropdown')
  dropdown.forEach(e => e.onclick = () => e.classList.toggle('active'))

const planes = [
  {id: 0, megas: 100, precioMegas: 2.199, precioViejo: 4.199},
  {id: 1, megas: 300, precioMegas: 2.899, precioViejo: 4.899},
  {id: 2, megas: 500, precioMegas: 3.699, precioViejo: 5.699},
  {id: 3, megas: 'Giga', precioMegas: 5.199, precioViejo: 7.199}
]

let planMegas = document.querySelectorAll('.js__plan-gigas')
let megasPrecio = document.querySelectorAll('.js__plan-precio')
let megasPrecioViejo = document.querySelectorAll('.js__plan-precio-viejo')

const printData = (array, option) =>{
  let len = array.length
  if(option == 1) {
    for(let x=0;x<len;x++) array[x].innerHTML = planes[x].megas
  }
  else if(option == 2) {
    for(let x=0;x<len;x++) array[x].innerHTML = planes[x].precioMegas
  }
  else if(option == 3) {
    for(let x=0;x<len;x++) array[x].innerHTML = planes[x].precioViejo
  }
}

printData(planMegas, 1)
printData(megasPrecio, 2)
printData(megasPrecioViejo, 3)