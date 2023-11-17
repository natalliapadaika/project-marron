import {
    banerObj,
    baner2Obj,
    baner3Obj
} from './_baner-obj';


export const addBaner = () => {

    const baner = document.querySelector('.baner_1');
    // baner.style.backgroundImage = `url('${banerObj.src}')`;

    baner.insertAdjacentHTML('afterbegin', `<div class="baner_1-more">
    <h2>${banerObj.name}</h2>
    <p>${banerObj.descr}</p>
    <button>Подробнее</button>
    </div> ` )
};

export const addBaner2 = () =>{
    const banerTwo = document.querySelector('.baner_2');
    banerTwo.insertAdjacentHTML('afterbegin', `<div class="baner_2-more">
    <h2>${baner2Obj.name}</h2>
    <p>${baner2Obj.descr}</p>
    <button>Заполнить анкету</button>
    </div> <div class="baner_2-img" <img src="../assets/img/baner2.jpg" alt='baner2'></div> `)
};

export const addBaner3 = () => {
    const banerThree = document.querySelector('.baner_3');
    banerThree.insertAdjacentHTML('afterbegin', `<div class="baner_3-more">
    <p>${baner3Obj.descr}</p>
    <button>Наша история</button>
   </div> `)
};



