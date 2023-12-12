import {
  bestSellers,
  addBestSellers,
  num,
  addClassActive,
  linkNext,
  next,
  linkPrev,
  prev,
  divBSW,
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

const btnBestMore = document.querySelector(".best-seller");

const popup = document.querySelector(".popup");

divBSW.addEventListener("click", (e) => {
  popup.textContent = "";
  if (e.target.matches(".best-seller_descr-btn")) {
    const arrBestSellerBtn = Array.from(
      document.querySelectorAll(".best-seller_descr-btn")
    );
    const activeIndex = arrBestSellerBtn.indexOf(e.target);
    addBigItem(popup, bestSellers, activeIndex);
    popup.classList.add("popup-on");
    addInBasket(bestSellers, activeIndex);
  }
  document.querySelector(".big-item-btn").addEventListener("click", (e) => {
    if (e.target.closest(".big-item-btn")) {
      popup.classList.remove("popup-on");
      popup.textContent = "";
    }
  });
});
document.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("popup-on");
    popup.textContent = "";
  }
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
  bigItem,
  page,
  addItems,
  addCatalogFilter,
  addCatalogFilterActive,
  addClassActiveSectionCatalog,
  nextPageNum,
  prevPageNum,
  numPage,
  addPageCatalog,
  backPageCatalog,
  linkNextCatalog,
  linkPrevCatalog,
  addBigItem,
  newCatalog,
  load,
  btnLoad,
  btnanload,
  addPageCatalogFilter,
} from "./modules/_catalog.js";
import { binaryExpression } from "babel-types";

btnCatalog.addEventListener("click", () => {
  bigItem.textContent = "";
  document.querySelector(".display-none").style.display = "block";

  addItems(catalog[0]);
  addClassActiveSectionCatalog();
  addClassNoactive();
});

addCatalogFilter();

const btnFilter = document.querySelector(".catalog-filtr-btn");
const btnFilterActive = document.querySelector(".catalog-filtr-btn-active");

btnFilter.addEventListener("click", () => {
  filter.classList.add("block");
  btnFilter.classList.add("closed");
  btnFilterActive.classList.add("open");
});

btnFilterActive.addEventListener("click", () => {
  filter.classList.remove("block");
  btnFilter.classList.remove("closed");
  btnFilterActive.classList.remove("open");
});

const best = document.querySelector(".best");

const baner1 = document.querySelector(".baner_1");
const baner2 = document.querySelector(".baner_2");
const baner3 = document.querySelector(".baner_3");
const greeting = document.querySelector(".greeting");
const wrapper = document.querySelector(".wrapper");

const addClassNoactive = () => {
  best.classList.toggle("noactive");
  baner1.classList.toggle("noactive");
  baner2.classList.toggle("noactive");
  baner3.classList.toggle("noactive");
  greeting.classList.toggle("noactive");
  wrapper.classList.toggle("noback");
};

const removeClassNoactive = () => {
  best.classList.remove("noactive");
  baner1.classList.remove("noactive");
  baner2.classList.remove("noactive");
  baner3.classList.remove("noactive");
  greeting.classList.remove("noactive");
  wrapper.classList.remove("noback");
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

items.addEventListener("click", (e) => {
  if (e.target.matches(".catalog_items-item")) {
    document.querySelector(".display-none").style.display = "none";
    const activeIndex = Array.from(
      document.querySelectorAll(".catalog_items-item")
    ).indexOf(e.target);
    addBigItem(bigItem, newCatalog, activeIndex);
    bigItem.classList.add("popup-on");
    addInBasket(newCatalog, activeIndex);
  }
});

btnLoad();
btnanload();

import {
  basketImg,
  basketItems,
  basketItemsItem,
  basketX,
  addInBasket,
  vol,
  price,
  workInBasket
} from "./modules/_basket.js";

basketImg.addEventListener("click", (e) => {
  document.querySelector(".display-none").style.display = "none";
  basketItems.style.display = "block";
  greeting.classList.add("noopen");
  wrapper.classList.add("no-back");
  workInBasket();
  basketX();
});
