const but_breakfast = document.querySelector('#breakfast')
const but_pizza = document.querySelector('#pizza')
const but_combo = document.querySelector('#combo')
const but_snacks = document.querySelector('#snacks')
const but_coffe = document.querySelector('#coffe')
const but_beverages = document.querySelector('#beverages')
const but_dessert = document.querySelector('#dessert')
const but_sauces = document.querySelector('#sauces')
const but_other_goods = document.querySelector('#other_goods')

const breakfast = document.querySelector('.breakfast')
const pizza = document.querySelector('.pizza')
const combo = document.querySelector('.combo')
const snacks = document.querySelector('.snacks')
const coffe = document.querySelector('.coffe')
const beverages = document.querySelector('.beverages')
const dessert = document.querySelector('.dessert')
const sauces = document.querySelector('.sauces')
const other_goods = document.querySelector('.other_goods')

but_breakfast.addEventListener('click', () => {breakfast.scrollIntoView({block: 'start',behavior: "smooth"})})
but_pizza.addEventListener('click', () => {pizza.scrollIntoView({block: 'start',behavior: "smooth"})})
but_combo.addEventListener('click', () => {combo.scrollIntoView({block: 'start',behavior: "smooth"})})
but_coffe.addEventListener('click', () => {coffe.scrollIntoView({block: 'start',behavior: "smooth"})})
but_beverages.addEventListener('click', () => {beverages.scrollIntoView({block: 'start',behavior: "smooth"})})
but_dessert.addEventListener('click', () => {dessert.scrollIntoView({block: 'start',behavior: "smooth"})})
but_sauces.addEventListener('click', () => {sauces.scrollIntoView({block: 'start',behavior: "smooth"})})
but_other_goods.addEventListener('click', () => {other_goods.scrollIntoView({block: 'start',behavior: "smooth"})})
but_snacks.addEventListener('click', () => {snacks.scrollIntoView({block: 'start',behavior: "smooth"})})



window.addEventListener('scroll', location_user)

function location_user(){
     if(breakfast.getBoundingClientRect().top <= 100 && breakfast.getBoundingClientRect().top > -100){
        clearButNav()
        but_breakfast.classList.add('orange')
     }
     else if(pizza.getBoundingClientRect().top <= 100 && pizza.getBoundingClientRect().top > 0){
        clearButNav()
        but_pizza.classList.add('orange')
     }
     else if(combo.getBoundingClientRect().top <= 100 && combo.getBoundingClientRect().top > 0){
        clearButNav()
        but_combo.classList.add('orange')
     }
     else if(snacks.getBoundingClientRect().top <= 100 && snacks.getBoundingClientRect().top > 0){
        clearButNav()
        but_snacks.classList.add('orange')
     }
     else if(coffe.getBoundingClientRect().top <= 100 && coffe.getBoundingClientRect().top > 0){
        clearButNav()
        but_coffe.classList.add('orange')
     }
     else if(beverages.getBoundingClientRect().top <= 100 && beverages.getBoundingClientRect().top > 0){
        clearButNav()
        but_beverages.classList.add('orange')
     }
     else if(dessert.getBoundingClientRect().top <= 100 && dessert.getBoundingClientRect().top > 0){
        clearButNav()
        but_dessert.classList.add('orange')
     }
      else if(sauces.getBoundingClientRect().top <= 100 && sauces.getBoundingClientRect().top > 0){
        clearButNav()
        but_sauces.classList.add('orange')
      }
     else if(other_goods.getBoundingClientRect().top <= 100 && other_goods.getBoundingClientRect().top > 0){
        clearButNav()
        but_other_goods.classList.add('orange')
     }
}
function clearButNav(){
    but_breakfast.classList.remove('orange')
    but_pizza.classList.remove('orange')
    but_combo.classList.remove('orange')
    but_snacks.classList.remove('orange')
    but_coffe.classList.remove('orange')
    but_beverages.classList.remove('orange')
    but_dessert.classList.remove('orange')
    but_sauces.classList.remove('orange')
    but_other_goods.classList.remove('orange')
}