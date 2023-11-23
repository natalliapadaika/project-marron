import { array } from "assert-plus";
import { catalog } from "./_catalog-array.js";

export { catalog };
const container = document.querySelector('.container');
const sectionCatalog = document.querySelector(".catalog");
const divFilterItem = sectionCatalog.querySelector(".catalog_filter-items");
const filter = sectionCatalog.querySelector(".catalog_filter");
const items = sectionCatalog.querySelector(".catalog_items");
const page = sectionCatalog.querySelector(".catalog_page");

const btnCatalog = document.querySelector(".header__nav-catalog");

const addItems = (arr) => {
  items.textContent = "";

  arr.forEach((el) => {
    items.insertAdjacentHTML(
      "afterbegin",
      `<div class="catalog_items-item" style="background: url('${el.src}')">
        <div class="catalog_items-item-name-price" >
        <h3>${el.name}</h3>
        <p>${el.price.small} ₽</p>
        </div>
        <div class="catalog_items-item-dshort-vol">
        <p>${el.descrShort}</p>
        <p>${el.volume.small}ml</p>
        </div>       
        </div>
        `
    );
  });

  divFilterItem.innerHTML = `<h2>Каталог</h2> 
    <button>Фильтр</button>`;
  page.innerHTML = `<p>1 &#173;</p>
     <p class="catalog_page-light">  &#8212;&#8212;  2</p>`;
};


const addBigItem = (arr, i) => {
  container.insertAdjacentHTML(
    "afterbegin", `<div class="catalog_big-item">
    <div class="big-item" style="background: url('${arr[i].src}')">
    </div> 
    <div class="big-item-descr">
    <h3>${arr[i].name}</h3>
    <p>${arr[i].descrShort}</p>
    <p>${arr[i].descr}</p>
    <p>Состав: ${arr[i].composition}</p>
    <p>Способ применения: ${arr[i].application}</p>
    <p>Объем</p>
    <input type="checkbox" name="${arr[i].volume.small}" id="50">
    <input type="checkbox" name="${arr[i].volume.big}" id="50">
    <p>${arr[i].price.small}₽</p>
    <p>${arr[i].price.big}₽</p>
    <button>Добавить в корзину</button>
    </div>
    </div>`
  )}



let numPage = 0;

const addPageCatalog = () => {
  items.textContent = "";
  numPage++;
  addItems(catalog[numPage]);
};

const nextPageNum = () => {
  page.innerHTML = `<p>${numPage + 1} &#173;</p>
  <p class="catalog_page-light">  &#8212;&#8212;  ${numPage+2}</p>`;
};

const backPageCatalog = () => {
  numPage--;
  items.textContent = "";
  addItems(catalog[numPage]);
};

const prevPageNum = () => {
  page.innerHTML = `<p>${numPage + 1} &#173;</p>
  <p class="catalog_page-light">  &#8212;&#8212;  ${numPage + 2}</p>`;
};

const addClassActiveSectionCatalog = () => {
  sectionCatalog.classList.toggle("active");
};

const linkNextCatalog = document.querySelector("#catalog-next");
const linkPrevCatalog = document.querySelector("#catalog-prev");

export {
  sectionCatalog,
  filter,
  items,
  btnCatalog,
  page,
  addItems,
  numPage,
  addClassActiveSectionCatalog,
  addPageCatalog,
  nextPageNum,
  prevPageNum,
  backPageCatalog,
  linkNextCatalog,
  linkPrevCatalog,
};

// document.addEventListener('click', (event) => {
//   if(!event.target.closest('sectionCatalog')){
//     sectionCatalog.classList.toggle('active');
//   }
// })

// console.log(numPage);



items.addEventListener('click', (e) =>{

  if(e.target.matches('.catalog_items-item')){
    // document.querySelector('.display-none').style.display = 'none';
    const activeIndex = Array.from(document.querySelectorAll('.catalog_items-item')).indexOf(e.target);
    console.log(activeIndex);
    // addBigItem(itemsItem, activeIndex)




  }
})