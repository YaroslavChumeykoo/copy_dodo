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
const item = document.querySelectorAll('.item')
const backround_info = document.querySelector('.backround_info')
const close_info = document.querySelector('.close_info')
const body = document.querySelector('body')

item.forEach((element) =>{
   element.addEventListener('click', () => UPmodalWindow(element))
})

close_info.addEventListener('click', ClosemodalWindow)
backround_info.addEventListener("click", function (event) {
   if (event.target === backround_info) {
         ClosemodalWindow();
      }})


const info_item_container = document.querySelector('.info_item_container')

function UPmodalWindow(item_render){
   const info_photo = item_render.querySelector('.item_photo')
   const info_name = item_render.querySelector('.name_item')
   const info = item_render.querySelector('.description_item')
   const price = item_render.querySelector('.price_value')
   const massa = item_render.querySelector('.massa')
   

   const info_render = `<div class="info_item">
   <img src="${info_photo.src}" class="info_photo" alt="item">
   <div class="info_container">
       <h3 class="info_name">${info_name.innerHTML}
           <button class="info_but">
               <img src="i.PNG" alt="i">
           </button>
       </h3>
   <p class="massa">${massa.innerHTML}</p>
   <p class="info">${info.innerHTML}</p>
   <button class="info_goShopping">Добавить в корзину за <span>${price.innerHTML}</span></button>
   </div>
   </div>`
   info_item_container.insertAdjacentHTML('afterbegin', info_render);
   backround_info.classList.remove('none')
   body.style.overflow = 'hidden'
}
function ClosemodalWindow(){
   info_item_container.querySelector('.info_item').remove()
   backround_info.classList.add('none')
   body.style.overflow = 'auto'
}

const backround_basket = document.querySelector('.backround_basket')
const shopping = document.querySelector('.shopping')
const close_basket = document.querySelector('.close_basket')

shopping.addEventListener('click',UPmodalWindowBasket)

function UPmodalWindowBasket(){
   backround_basket.classList.remove('none')
   body.style.overflow = 'hidden'
}

close_basket.addEventListener('click', ClosemodalWindowBasket)

backround_basket.addEventListener("click", function (event) {
   if (event.target === backround_basket) {
      ClosemodalWindowBasket();
      }})

function ClosemodalWindowBasket(){
   backround_basket.classList.add('none')
   body.style.overflow = 'auto'
}
