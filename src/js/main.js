import {
  bestSellers,
  addBestSellers,
  num,
  addClassActive,
  linkNext,
  next,
  linkPrev,
  prev,
} from "./modules/_main-best-sellers";

addBestSellers();

const divBestSel = Array.from(document.querySelectorAll(".best-seller"));

addClassActive(divBestSel);

linkNext.addEventListener("click", () => {
  next(divBestSel);
});

linkPrev.addEventListener("click", () => {
  prev(divBestSel);
});

import { 
  addBaner,
  addBaner2,
  addBaner3,
  addBaner4
 } from "./modules/_baner.js";

 addBaner();
 addBaner2();
 addBaner3();
 addBaner4();

import{
  contacts, 
  addContacts, 
  initMap
} from './modules/_contact.js'

addContacts();
initMap();

import {
  catalog,
 
  sectionCatalog,
   filter,
    items,
     btnCatalog,
     page,
      addItems,
      addClassActiveSectionCatalog,  
addPageCatalog,
numPage,
backPageCatalog,
        linkNextCatalog,
         linkPrevCatalog,

} from './modules/_catalog.js'





btnCatalog.addEventListener ('click', () =>{
addItems(catalog[0]);
addClassActiveSectionCatalog();
addClassNoactive ();
});




const addClassNoactive = () => {
  const best = document.querySelector('.best')
  best.classList.toggle("noactive")
   
  const baner1 = document.querySelector('.baner_1');
  baner1.classList.toggle("noactive");

  const baner2 = document.querySelector('.baner_2');
  baner2.classList.toggle("noactive");

  const baner3 = document.querySelector('.baner_3');
  baner3.classList.toggle("noactive");

  const greeting = document.querySelector('.greeting');
  greeting.classList.toggle("noactive");

  const wrapper = document.querySelector('.wrapper');
  wrapper.classList.toggle('noback');

}

linkNextCatalog.addEventListener('click', () => {
  console.log(numPage);
  if (numPage < catalog.length){
   addPageCatalog() 
  } else {
    addItems(catalog[catalog.length-1])
    page.innerHTML = `<p>${catalog.length} &#173;</p>
    <p class="catalog_page-light">  &#8212;&#8212;  ${catalog.length}</p>`
  }
  });



  linkPrevCatalog.addEventListener('click', () => {
if (numPage !== 0){
  backPageCatalog()
} else {
  addItems[catalog[0]]
}

  })

// if (numPage >= catalog.length){
//   linkNextCatalog.removeEventListener('click', addPageCatalog)
// }
 


// import img from '../assets/img/*.png'
// console.log(img);

