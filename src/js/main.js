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
      addItems, 
      addClassActiveCatalog,
      addClassActiveSectionCatalog,
      number,
       nextCatalog,
        prevCatalog,
        linkNextCatalog,
         linkPrevCatalog,

} from './modules/_catalog.js'





btnCatalog.addEventListener ('click', () =>{

addItems();
const itemsCatalog = Array.from(document.querySelectorAll('.catalog_items-item'));


addClassActiveCatalog(itemsCatalog);
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

linkNextCatalog.addEventListener('click', () =>{
  const itemsCatalog = Array.from(document.querySelectorAll('.catalog_items-item'));
  nextCatalog(itemsCatalog);
})


