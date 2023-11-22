import {
  img
} from './_baner-obj.js'


const bestSellers = [
  {
    src: img.cream_1,
    name: "High",
    descr: "крем для лица",
  },
  {
    src: img.cream_2,
    name: "Rest",
    descr: "минеральная пудра",
  },
  {
    src: img.cream_3,
    name: "Rose",
    descr: "крем для лица",
  },
  {
    src: img.cream4,
    name: "Milk",
    descr: "масло для тела",
  },
  {
    src: img.cream_1,
    name: "High",
    descr: "крем для лица",
  },
  {
    src: img.cream_2,
    name: "Rest",
    descr: "минеральная пудра",
  },
  {
    src: img.cream_3,
    name: "Rose",
    descr: "крем для лица",
  },
  {
    src: img.cream4,
    name: "Milk",
    descr: "масло для тела",
  },
  {
    src: img.cream_1,
    name: "High",
    descr: "крем для лица",
  },
];

let num = 0;

const addBestSellers = () => {
  const div = document.querySelector(".best-seller__wrapper");

  bestSellers.forEach((el) => {
    div.insertAdjacentHTML(
      "afterbegin",
      `<div class="best-seller" style ="background: url('${el.src}')">
        <div class="description">
            <h3 class="best-seller_decsr-h3">${el.name}</h3>
            <p class="best-seller_decsr-p">${el.descr}</p>
            <button class="best-seller_decsr-btn">Подробнее</button>
        </div>

    </div>`
    //    "afterbegin",
    //   `<div class="best-seller">
    //     <div class="description">
    //         <h3 class="best-seller_decsr-h3">${el.name}</h3>
    //         <p class="best-seller_decsr-p">${el.descr}</p>
    //         <button class="best-seller_decsr-btn">Подробнее</button>
    //     </div>

    // </div>`
    );
  });
};

const addClassActive = (divBestSel) => {
  for (let n = 0; n < 4; n++) {
    divBestSel[n].classList.add("active");
  }
};

const linkNext = document.querySelector("#bs-next");
const linkPrev = document.querySelector("#bs-prev");

const next = (array) => {
  if (num !== array.length - 4) {
    array[num].classList.remove("active");
    array[num + 4].classList.add("active");
    num++;
  }
 
};

const prev = (array) => {
  if (num !== 0) {

    num--;
    array[num].classList.add("active");
    array[num + 4].classList.remove("active");
  }
};

export {
  bestSellers,
  addBestSellers,
  num,
  addClassActive,
  linkNext,
  next,
  linkPrev,
  prev,
};
