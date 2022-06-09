const seleccionar = str => document.querySelector(str)

const dataPlans = [
  {name: 'noEsMovistar', price: 2.199},
  {name: 'esMovistar', price: 1.799},
]

const noUserPrice = seleccionar('#js__no-user')
noUserPrice.innerHTML = dataPlans[0].price

const userPrice = seleccionar('#js__user')
userPrice.innerHTML = dataPlans[1].price

