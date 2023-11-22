import {
    banerObj,
    baner2Obj,
    baner3Obj, 
    baner4Obj,
    img,
    imgJpg
} from './_baner-obj.js';


// import img from '../../assets/img/*.png'
// console.log(img);

// import imgJpg from '../../assets/img/*.jpg'
// console.log(imgJpg);



export const addBaner = () => {

    const baner = document.querySelector('.baner_1');
    baner.style.backgroundImage = `url('${banerObj.src}')`;

    baner.insertAdjacentHTML('afterbegin', `<div class="baner_1-more">
    <h2>${banerObj.name}</h2>
    <p>${banerObj.descr}</p>
    <button>Подробнее</button>
    </div> ` )
};

export const addBaner2 = () =>{
    const banerTwo = document.querySelector('.baner_2');
    // banerTwo.style.backgroundImage = `url('${baner2Obj.src}')`;
    banerTwo.insertAdjacentHTML('afterbegin', `<img src="${baner2Obj.src}" alt "two"><div class="baner_2-more">
    <h2>${baner2Obj.name}</h2>
    <p>${baner2Obj.descr}</p>
    <button>Заполнить анкету</button>
    </div> 
    `)
};

export const addBaner3 = () => {
    const banerThree = document.querySelector('.baner_3');
    banerThree.style.backgroundImage = `url('${baner3Obj.src}')`;
    banerThree.insertAdjacentHTML('afterbegin', `<div class="baner_3-more">
    <p>${baner3Obj.descr}</p>
    <button>Наша история</button>
   </div> `)
};
  
export const addBaner4 = () => {
    const banerFour = document.querySelector('.baner_4');

    banerFour.insertAdjacentHTML('afterbegin', `<div class=baner_4-wrapper> 
    <img src="${baner4Obj.srcOne}" alt="one"> 
    <img src="${baner4Obj.srcTwoo}" alt="one">
    <img src="${baner4Obj.srcThree}" alt="one"> 
    <img src="${baner4Obj.srcFour}" alt="one"> 
    <img src="${baner4Obj.srcFive}" alt="one"> 
    <img src="${baner4Obj.srcSix}" alt="one"> 
    </div>
    <div class="baner_4-more"> 
    <h2> ${baner4Obj.name}</h2>
    <p>${baner4Obj.descr}</p>
    <button>Подписаться</button>
    </div>
    `)

};





