const seleccionar = str => document.querySelector(str)

const planPrice = 2.199
let userPrice = document.querySelector('#js__no-user')
userPrice.innerHTML = planPrice

// Dropdown card plan TV
let dropdown = document.querySelector('.dropdown')
dropdown.onclick = () =>{dropdown.classList.toggle('active')}


class PlanFibra{
  constructor(megas, precioMegas, precioMBViejo){
    this.megas = megas
    this.precioMegas = String(precioMegas)
    this.precioMBViejo = String(precioMBViejo)
  }
}

let mb_100 = new PlanFibra(100, 2.899, 4.899)

const planes_container = document.getElementById('#planes__div')


let h1 = document.createElement('h1').innerHTML = 'Tratando de agregar las card dinamicamente (╯°□°)╯︵ ┻━┻'

document.body.append(h1)