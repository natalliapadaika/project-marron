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