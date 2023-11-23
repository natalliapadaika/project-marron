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

import { addBaner, addBaner2, addBaner3, addBaner4 } from "./modules/_baner.js";

addBaner();
addBaner2();
addBaner3();
addBaner4();

import { contacts, addContacts, initMap } from "./modules/_contact.js";

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
  nextPageNum,
  prevPageNum,
  numPage,
  addPageCatalog,
  backPageCatalog,
  linkNextCatalog,
  linkPrevCatalog,
} from "./modules/_catalog.js";

btnCatalog.addEventListener("click", () => {
  addItems(catalog[0]);
  
  addClassActiveSectionCatalog();
  addClassNoactive();
  // sectionCatalog.classList.toggle('closed');
});

const addClassNoactive = () => {

  
  const best = document.querySelector(".best");
  best.classList.toggle("noactive");

  const baner1 = document.querySelector(".baner_1");
  baner1.classList.toggle("noactive");

  const baner2 = document.querySelector(".baner_2");
  baner2.classList.toggle("noactive");

  const baner3 = document.querySelector(".baner_3");
  baner3.classList.toggle("noactive");

  const greeting = document.querySelector(".greeting");
  greeting.classList.toggle("noactive");

  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.toggle("noback");
};

linkNextCatalog.addEventListener("click", () => {

  if (numPage < catalog.length - 1) {
    addPageCatalog();
    nextPageNum();
  } else {
    addItems(catalog[catalog.length - 1]);
    nextPageNum();
  }

});

linkPrevCatalog.addEventListener("click", () => {
  if (numPage !== 0) {
    backPageCatalog();
    nextPageNum();
  } else {
    addItems[catalog[0]];
    nextPageNum();
  }
});

