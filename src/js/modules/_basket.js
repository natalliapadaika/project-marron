const basketImg = document.querySelector(".basket");
const basketItems = document.querySelector(".basket_items");
const basketItemsItem = basketItems.querySelector(".basket_items-item");

export {
  basketImg,
  basketItems,
  basketItemsItem,
  basketX,
  addInBasket,
  workInBasket,
};

const basketX = () => {
  const basketclosed = document.querySelector(".basket-x");
  basketclosed.addEventListener("click", (e) => {
    if (e.target.closest(".basket-x")) {
      basketItems.style.display = "none";
      document.querySelector(".greeting").classList.remove("noopen");
      document.querySelector(".wrapper").classList.remove("no-back");
      document.querySelector(".display-none").style.display = "block";
    }
  });
};

const addInBasket = (arr, i) => {
  const addBasket = document.querySelector(".add-in-basket");
  let vol = arr[i].volume.small;
  let price = arr[i].price.small;
  let count = 1;

  const volume = document.querySelector(".volume");
  volume.addEventListener("change", () => {
    document.querySelectorAll('input[type="radio"]').forEach((el) => {
      if (el.checked && el.value == 1) {
        vol = arr[i].volume.small;
        price = arr[i].price.small;
      } else if (el.checked && el.value == 2) {
        vol = arr[i].volume.big;
        price = arr[i].price.big;
      }
    });
  });

  addBasket.addEventListener("click", () => {
    document
      .querySelector(".basket_items-name-count-summ")
      .classList.add("open");
    let summ = count * price;
    basketItemsItem.insertAdjacentHTML(
      "beforeend",
      `
        <div class='basket_items-product-name-count-summ'>
        <div class='basket_items-product'>
        <div class="basket_items-img" style="background-image: url('${arr[i].src}')" id='${arr[i].src}'>
    </div> 
       <p class = 'basket_items-name' data-name='${arr[i].name}'> ${arr[i].name}</p>
        <p class = 'basket_items-descr' data-descr='${arr[i].descrShort}'>${arr[i].descrShort}</p>
     <p class='basket_items-vol' data-vol='${vol}'> Объем: ${vol}ml</p>
     <p class='basket-items-price' data-price ='${price}'> Цена: ${price}₽ </p>
    
        </div>
        
        <div class='basket_items-count'>
        <button class='basket_items-count-reduce'>-</button>
        <p class='basket_items-count-p'>${count}</p>
        <button class='basket_items-count-add'>+</button>
        </div>
        <div class='basket_items-summ'>
        <p class='basket_items-summ-p'>${summ}</p>
        </div>
        <div class='basket_items-delete'>
        <button class='basket_items-del'> &#x1F5D1 &#xFE0F
        </button>
        </div>
        </div>`
    );
  });
};

const workInBasket = () => {
  const basketOrder = [
    ...document.querySelectorAll(".basket_items-product-name-count-summ"),
  ];
  let summ = 1;
  const itemsBasket = [];
  let summOrder = [];
  basketOrder.forEach((el) => {
    let count = 1;
    const id = el.querySelector(".basket_items-img").getAttribute("id");
    const name = el.querySelector(".basket_items-name").getAttribute("data-name");
    const descr = el.querySelector(".basket_items-descr").getAttribute("data-descr");
    const vol = el.querySelector(".basket_items-vol").getAttribute("data-vol");
    const priceEl = el.querySelector(".basket-items-price").getAttribute("data-price");

    itemsBasket.push({
      src: id,
      name: name,
      descr: descr,
      vol: vol,
      price: priceEl,
    });

    summOrder.push(Number(el.querySelector('.basket_items-summ-p').textContent))

    const summOrders = summOrder.reduce((acc, item) => acc+item, 0);
    console.log(summOrders);

   


    el.querySelector(".basket_items-count-reduce").addEventListener("click", (e) => {
        const index = basketOrder.indexOf(el);

        if (count >= 1) {
          count -= 1;
          summ = count * itemsBasket[index].price;
        }
        el.querySelector(".basket_items-count-p").innerHTML = count;
        el.querySelector(".basket_items-summ-p").innerHTML = summ;
           summOrder.splice(index, 1, +el.querySelector(".basket_items-summ-p").textContent)
           const summOrders = summOrder.reduce((acc, item) => acc+item, 0); 

      });

  
    el.querySelector(".basket_items-count-add").addEventListener("click",(e) => {
        const index = basketOrder.indexOf(el);
        count += 1;
        summ = count * itemsBasket[index].price;
        el.querySelector(".basket_items-count-p").innerHTML = count;
        el.querySelector(".basket_items-summ-p").innerHTML = summ;


        summOrder.splice(index, 1, +el.querySelector(".basket_items-summ-p").textContent)
        const summOrders = summOrder.reduce((acc, item) => acc+item, 0);
      });



el.querySelector('.basket_items-del').addEventListener('click', (e) =>{
  const index = basketOrder.indexOf(el);
  el.remove();
  itemsBasket.splice(index, 1);


  summOrder.splice(index, 1);

  const summOrders = summOrder.reduce((acc, item) => acc+item, 0); 
})

  });

};


