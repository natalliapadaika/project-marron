

 import { catalog } from "./_catalog-array.js";

 export {catalog};


 const sectionCatalog = document.querySelector('.catalog');
 const divFilterItem = sectionCatalog.querySelector('.catalog_filter-items');
 const filter = sectionCatalog.querySelector('.catalog_filter');
 const items = sectionCatalog.querySelector('.catalog_items');
 const page = sectionCatalog.querySelector('.catalog_page');

 const btnCatalog = document.querySelector('.header__nav-catalog');

 const addItems = (arr) => {

  items.textContent ="";
   
    arr.forEach((el) =>{

        items.insertAdjacentHTML('afterbegin', `<div class="catalog_items-item" style="background: url('${el.src}')">
        <div class="catalog_items-item-name-price" >
        <h3>${el.name}</h3>
        <p>${el.price.small} ₽</p>
        </div>
        <div class="catalog_items-item-dshort-vol">
        <p>${el.descrShort}</p>
        <p>${el.volume.small}ml</p>
        </div>       
        </div>
        `)
    });

    divFilterItem.innerHTML = 
    `<h2>Каталог</h2> 
    <button>Фильтр</button>`;
    page.innerHTML = `<p>1 &#173;</p>
     <p class="catalog_page-light">  &#8212;&#8212;  2</p>`
  
 };

 let numPage = 1;
 

 const addPageCatalog = () => {
   items.textContent ="";
  
   addItems(catalog[numPage]) 
 let num = 2;
  num++
  numPage++
   page.innerHTML = `<p>${numPage} &#173;</p>
  <p class="catalog_page-light">  &#8212;&#8212;  ${num}</p>`
};

const backPageCatalog = () => {
   numPage--
  items.textContent ="";
 
  addItems(catalog[numPage])
}
   


  const addClassActiveSectionCatalog = () => {
    sectionCatalog.classList.toggle("active");
  }

const linkNextCatalog = document.querySelector("#catalog-next");
const linkPrevCatalog = document.querySelector("#catalog-prev");






export {sectionCatalog, filter, items, btnCatalog, page, addItems, numPage, addClassActiveSectionCatalog, addPageCatalog, backPageCatalog, linkNextCatalog, linkPrevCatalog};


