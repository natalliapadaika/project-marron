const basketImg = document.querySelector('.basket');
const basketItems = document.querySelector('.basket_items');
const basketItemsItem = basketItems.querySelector('.basket_items-item');



export { basketImg, basketItems, basketItemsItem, basketX, addInBasket};


const basketX = () =>{
    const basketclosed = document.querySelector('.basket-x');
    basketclosed.addEventListener('click', (e) => {
    if(e.target.closest('.basket-x')){
    
    basketItems.style.display = 'none';
    document.querySelector('.greeting').classList.remove('noopen');
    document.querySelector('.wrapper').classList.remove('no-back');
    document.querySelector('.display-none').style.display='block';
}
});
};


const addInBasket = (arr, i) => {
    const addBasket = document.querySelector('.add-in-basket');
let vol = arr[i].volume.small;
let price = arr[i].price.small;
    const volume = document.querySelector('.volume');
        volume.addEventListener('change', () => {
          document.querySelectorAll('input[type="radio"]').forEach((el) => {
            if (el.checked && el.value == 1) {
              
            vol = arr[i].volume.small
            price = arr[i].price.small
                   
            }
                else if(el.checked && el.value == 2){
                   vol = arr[i].volume.big
                 price = arr[i].price.big
                 
                }
             
          });
        });
        
    addBasket.addEventListener('click', () => {
        basketItemsItem.insertAdjacentHTML('beforeend', 
        `<div class='basket_items-name-count-summ'>
        <p>Наименование</p>
        <p>Количество</p>
        <p>Сумма</p>
        </div>
        <div class='basket_items-product-name-count-summ'>
        <div class='basket_items-product'>
        <div class="basket_items-img" style="background-image: url('${arr[i].src}')">
    </div> 
       <p> ${arr[i].name}</p>
        <p>${arr[i].descrShort}</p>
     <p> Объем: ${vol}ml</p>
     <p> Цена: ${price}₽ </p>
    
        </div>
        
        <div class='basket_items-count'>
        <button>-</button>
        <p>1</p>
        <button>+</button>
        </div>
        <div class='basket_items-summ'>
        <p></p>
        </div>
        </div>`)

    })
 
}
