import { array, number } from "assert-plus";
import { catalog } from "./_catalog-array.js";

const [p1Catalog, p2Catalog, p3Catalog] = catalog;

const newCatalog = [...p1Catalog, ...p2Catalog, ...p3Catalog];

export { catalog };
const bigItem = document.querySelector(".catalog_item");
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
};

const addCatalogFilter = () => {
  divFilterItem.innerHTML = `<h2>Каталог</h2> 
    <button class = "catalog-filtr-btn">Фильтр</button>
    <button class = "catalog-filtr-btn-active"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M1 1L10 10M19 19L10 10M10 10L19 1L1 19" stroke="#122947" stroke-width="2"/>
    </svg></button>`;
  page.innerHTML = `<p>1 &#173;</p>
     <p class="catalog_page-light">  &#8212;&#8212;  2</p>`;
};

const addCatalogFilterActive = () => {
  divFilterItem.innerHTML = `<h2>Каталог</h2> 
    <button class = "catalog-filtr-btn-active"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M1 1L10 10M19 19L10 10M10 10L19 1L1 19" stroke="#122947" stroke-width="2"/>
    </svg></button>`;
};

const addBigItem = (elemDom, arr, i) => {
  elemDom.insertAdjacentHTML(
    "afterbegin",
    `<div class="catalog_big-item">
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
  );
};

let numPage = 0;
let numberPage=0;

const addPageCatalog = () => {
  items.textContent = "";
  numPage++;
  addItems(catalog[numPage]);
};

let index = 0;
const addPageCatalogFilter = (arr) => {

index +=8
if (arr.length > index) {
  addItems(arr.slice(index, index+8))
}
else {
  addItems(arr.slice(index, arr.length))
}
};

const backPageCatalogFilter = (arr) => {
  
  if(index >= 0){
    addItems(arr.slice(index-8, index))
  }
  index -=8;
}


const nextPageNum = () => {
  page.innerHTML = `<p>${numPage + 1} &#173;</p>
  <p class="catalog_page-light">  &#8212;&#8212;  ${numPage + 2}</p>`;
};

const nextPageNumFilter = () => {
  numberPage++
  const pageFilter = sectionCatalog.querySelector('.filter_page');
  pageFilter.innerHTML = `<p>${numberPage + 1} &#173;</p>
  <p class="filter_page-light">  &#8212;&#8212;  ${numberPage + 2}</p>`;
};
 const prevPageNumFilter = () => {
  numberPage--
  const pageFilter = sectionCatalog.querySelector('.filter_page');
  pageFilter.innerHTML = `<p>${numberPage + 1} &#173;</p>
  <p class="filter_page-light">  &#8212;&#8212;  ${numberPage + 2}</p>`;
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

const addPageFilter = () => {
  filterPageLink.innerHTML = `<div class="filter_page"><p>1 &#173;</p>
  <p class="filter_page-light">  &#8212;&#8212;  2</p></div>
  <div class="filter_link">
    <button class="link" id="filter-prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
  <path d="M27 7H0.999999M0.999999 7L7.30303 1M0.999999 7L7.30303 13" stroke="#122947"/>
</svg>
    </button>
    <button class="link" id="filter-next">
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
    <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
  </svg>
    </button>
  </div>`
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
  addCatalogFilter,
  addCatalogFilterActive,
  numPage,
  addClassActiveSectionCatalog,
  addPageCatalog,
  nextPageNum,
  prevPageNum,
  backPageCatalog,
  linkNextCatalog,
  linkPrevCatalog,
  addBigItem,
  newCatalog,
  load,
  btnLoad,
  btnanload,
  addPageCatalogFilter
};

// items.addEventListener('click', (e) =>{

//   if(e.target.matches('.catalog_items-item')){

//     document.querySelector('.display-none').style.display = 'none'
//     const activeIndex = Array.from(document.querySelectorAll('.catalog_items-item')).indexOf(e.target);
//     addBigItem(newCatalog, activeIndex);
//     sectionCatalog.classList.remove("active");

//   };

// })

bigItem.addEventListener("click", (e) => {
  if (e.target.matches(".composition")) {
    bigItem.querySelector(".p-composition").classList.toggle("open");
    bigItem.querySelector(".minus").classList.toggle("open");
    bigItem.querySelector(".plus").classList.toggle("close");
  }
  if (e.target.matches(".application")) {
    bigItem.querySelector(".p-application").classList.toggle("open");
    bigItem.querySelector(".a-minus").classList.toggle("open");
    bigItem.querySelector(".a-plus").classList.toggle("close");
  }
  const volume = document.querySelector(".volume");
  volume.addEventListener("change", () => {
    document.querySelectorAll('input[type="radio"]').forEach((el) => {
      if (el.checked && el.value == 1) {
        document.querySelector(".price-small").style.display = "block";
        document.querySelector(".price-big").style.display = "none";
      } else if (el.checked && el.value == 2) {
        document.querySelector(".price-small").style.display = "none";
        document.querySelector(".price-big").style.display = "block";
      }
    });
  });
});

document.addEventListener("click", (event) => {
  if (event.target === bigItem) {
    bigItem.classList.remove("popup-on");
    bigItem.textContent = "";
    document.querySelector(".display-none").style.display = "block";
  }
});

// document.addEventListener('click', (e)=>{
// if (e.target.matches('.catalog_item') || e.target.matches('.wrapper')){
//   console.log('j')
//   bigItem.textContent="";
//   document.querySelector('.display-none').style.display = 'block';

// }

// })

// console.log(typeof(newCatalog[0].type));

// let check = 'creama'
// const check = document.querySelector('#crema')

// const filterCatalog = newCatalog.filter(function(item){
//   return item.type == check;
// });
// console.log(filterCatalog);

// const btnFilter = document.querySelector('.catalog-filtr-btn');
// const divfilter = document.querySelector('.catalog_filter');

// btnFilter.addEventListener('click', () =>{
// divfilter.classList.toggle('block')
// })



const load = document.querySelector(".catalog_filter-btn-load");
const anload = document.querySelector(".catalog_filter-btn-anload");
const catalogPageLink = document.querySelector(".catalog_page-link")
const filterPageLink = document.querySelector(".filter_page-link");

const addItemsFilter = (newFilterCatalog) =>{
addItems(newFilterCatalog.slice(0,8));
    document.querySelector('#filter-next').addEventListener('click', () =>{
      if ((numberPage+1) < Math.ceil(newFilterCatalog.length/8)){  
      addPageCatalogFilter(newFilterCatalog); 
      nextPageNumFilter();
    } 
    });
    document.querySelector('#filter-prev').addEventListener('click', () =>{
      if(index > 0){   
backPageCatalogFilter(newFilterCatalog);
prevPageNumFilter();
}
    })
};


const btnLoad = () => {load.addEventListener("click", () => {

const catalogFilterFace = document.querySelectorAll(".face");
const catalogFilterBody = document.querySelectorAll(".body");
const catalogFilterFaceSkin = document.querySelectorAll(".face-skin");

  const newFCFace = [];
  const newFCFskin = [];
  const newFCBody = [];
  const newFCskin = [];

  catalogFilterFace.forEach((checkbox) => {
    if (checkbox.checked) {
      newFCFace.push(
        newCatalog.filter(function (item) {
          return item.type == checkbox.value;
        })
      );
    }
  });
  // catalogFilterFaceSkin.forEach((checkbox) =>{
  //   if (checkbox.checked) {
  //     newFCskin.push(
  //       newCatalog.filter(function (item) {
  //         return item.skin == checkbox.value;
  //       })
  //     );
  //     console.log(newFCskin);
  //   }
  // });
  catalogFilterFaceSkin.forEach((checkbox) => {
    if (checkbox.checked) {
      newFCFskin.push(
        newFCFace.flat().filter(function (item) {
          return item.skin == checkbox.value;
        })
      );
    } else {
      return newFCFskin;
    }
  });

  catalogFilterBody.forEach((checkbox) => {
    if (checkbox.checked) {
      newFCBody.push(
        newCatalog.filter(function (item) {
          return item.type == checkbox.value;
        })
      );
    }
  });

  catalogPageLink.classList.add('noactive')
  addPageFilter();

  if (newFCFskin.length > 0) {
   
    const newFilterCatalog = [...newFCFskin.flat(), ...newFCBody.flat()];
    addItemsFilter(newFilterCatalog);
    
  } else
  
  if (newFCFace.length > 0 || newFCBody.length > 0){
    
    const newFilterCatalog = [...newFCFace.flat(), ...newFCBody.flat()];
    addItemsFilter(newFilterCatalog);
  } 
  // else if (newFCskin.length > 0)
  // {
  //   const newFilterCatalog = [...newFCskin.flat()];
  //   addItemsFilter(newFilterCatalog);
  // }  
});
};

const btnanload = () => {anload.addEventListener('click', () =>{
    [...document.querySelectorAll('input[type="checkbox"]')].forEach((checkbox) =>{     
        checkbox.checked = false;
  })
        addItems(catalog[0]);
        catalogPageLink.classList.remove('noactive');
        document.querySelector('.filter_page').remove();
        document.querySelector('.filter_link').remove();

})};
