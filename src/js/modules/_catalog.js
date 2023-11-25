import { array } from "assert-plus";
import { catalog } from "./_catalog-array.js";

const [p1Catalog, p2Catalog, p3Catalog] = catalog;

const newCatalog = [...p1Catalog, ...p2Catalog, ...p3Catalog]

export { catalog };
const bigItem = document.querySelector('.catalog_item');
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
      "beforeend",
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



const addBigItem = (elemDom, arr, i) => {
     
  elemDom.insertAdjacentHTML(
    "afterbegin", `<div class="catalog_big-item">
    <div class="big-item" style="background-image: url('${arr[i].src}')">
    </div> 
    <div class="big-item-descr">
    <h3>${arr[i].name}</h3>
    <p class="descr-short">${arr[i].descrShort}</p>
    <p class="descr">${arr[i].descr}</p>
   <div class="composition style-div">
    <p class="style-app-comp composition">Состав </p>
    <p class="composition plus">+ </p>
    <p class="composition minus">- </p>
    </div>
    <p class="p-composition">${arr[i].composition}</p>
    <div class="application border style-div">
    <p class="style-app-comp application">Способ применения</p>
    <p class="application a-plus">+ </p>
    <p class="application a-minus">- </p>
    </div>
    <p class="p-application"> ${arr[i].application}</p>
  
    <div class="volume">
    <p>Объем:</p>
     <label><input type="radio" name="100" value ="1" checked>
    ${arr[i].volume.small} ml</label>
    <label><input type="radio" name="100" value ="2">
    ${arr[i].volume.big} ml</label>   
    </div>
    <div class="style-div">
    <p class="price-small">${arr[i].price.small}₽</p>
    <p class="price-big"style = "display:none">${arr[i].price.big}₽ </p>
    <button>Добавить в корзину</button></div>
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
  bigItem,
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
  addBigItem,
  newCatalog
};


// items.addEventListener('click', (e) =>{

//   if(e.target.matches('.catalog_items-item')){

//     document.querySelector('.display-none').style.display = 'none'
//     const activeIndex = Array.from(document.querySelectorAll('.catalog_items-item')).indexOf(e.target);
//     addBigItem(newCatalog, activeIndex);
//     sectionCatalog.classList.remove("active");

//   };
  
// })


bigItem.addEventListener('click', (e) =>{
  if(e.target.matches('.composition')){
    bigItem.querySelector('.p-composition').classList.toggle('open');
    bigItem.querySelector('.minus').classList.toggle('open');
    bigItem.querySelector('.plus').classList.toggle('close');  
} 
if(e.target.matches('.application')){
bigItem.querySelector('.p-application').classList.toggle('open');
bigItem.querySelector('.a-minus').classList.toggle('open');
bigItem.querySelector('.a-plus').classList.toggle('close');  

};
const volume = document.querySelector('.volume')
volume.addEventListener('change', () =>{
  document.querySelectorAll('input[type="radio"]').forEach((el) =>{
    if (el.checked && el.value ==1) {
      document.querySelector('.price-small').style.display = 'block';
      document.querySelector('.price-big').style.display = 'none';
		} else if(el.checked && el.value ==2){
      document.querySelector('.price-small').style.display = 'none';
      document.querySelector('.price-big').style.display = 'block';
    }
  })

  
});

});

document.addEventListener('click', (event) =>{
  if(event.target === bigItem){
    bigItem.classList.remove('popup-on');
    bigItem.textContent = "";
    document.querySelector('.display-none').style.display = 'block';
  }

});

// document.addEventListener('click', (e)=>{
// if (e.target.matches('.catalog_item') || e.target.matches('.wrapper')){
//   console.log('j')
//   bigItem.textContent="";
//   document.querySelector('.display-none').style.display = 'block';

  
// }

// })





 
  