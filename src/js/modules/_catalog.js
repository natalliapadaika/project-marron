

 import { catalog } from "../_catalog-array.js";
 export {catalog};




 const sectionCatalog = document.querySelector('.catalog');
 const divFilterItem = sectionCatalog.querySelector('.catalog_filter-items');
 const filter = sectionCatalog.querySelector('.catalog_filter');
 const items = sectionCatalog.querySelector('.catalog_items');
 const page = sectionCatalog.querySelector('.catalog_page');

 const btnCatalog = document.querySelector('.header__nav-catalog');

 const addItems = () => {

  items.textContent ="";
   
    catalog.forEach((el) =>{

        // items.insertAdjacentHTML('afterbegin', `<div class="catalog_items-item" style="background: url('${el.src}')">
        items.innerHTML += `
        <div class="catalog_items-item">
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
    });

    divFilterItem.innerHTML = 
    `<h2>Каталог</h2> 
    <button>Фильтр</button>`;
    page.innerHTML = `<p>1 &#173;</p>
     <p class="catalog_page-light">  &#8212;&#8212;  2</p>`
  
 }

 const addClassActiveCatalog = (arr) => {
    for (let n = 0; n < 12; n++) {
        arr[n].classList.add("active");
    }
  };

const addClassActiveSectionCatalog = () => {
  sectionCatalog.classList.toggle("active");
}

let number = 0;

const linkNextCatalog = document.querySelector("#catalog-next");
const linkPrevCatalog = document.querySelector("#catalog-prev");

const nextCatalog = (array) => {
  if (number !== array.length - 12) {
    array[number].classList.remove("active");
    array[number + 12].classList.add("active");
    number++;
  }
 
};

const prevCatalog = (array) => {
  if (number !== 0) {

    number--;
    array[number].classList.add("active");
    array[number + 12].classList.remove("active");
  }
};


export {sectionCatalog, filter, items, btnCatalog, addItems, addClassActiveCatalog, addClassActiveSectionCatalog, linkNextCatalog, linkPrevCatalog, number, nextCatalog, prevCatalog};


