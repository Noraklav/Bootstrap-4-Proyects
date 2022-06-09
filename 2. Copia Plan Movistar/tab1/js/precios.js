const seleccionar = str => document.querySelector(str)

const dataPlans = [
  {name: 'noEsMovistar', price: 2.199},
  {name: 'esMovistar', price: 1.799},
]

let userPrice = seleccionar('#js__is-user')
userPrice.innerHTML = dataPlans[1].price