import img from '../../assets/img/*.png'

export {img}
console.log(img);

import imgJpg from '../../assets/img/*.jpg'
// console.log(imgJpg);
export {imgJpg}

import imgSvg from '../../assets/svg/*.svg'
// console.log(imgSvg);
export {imgSvg}


const banerObj = {
    "src": img.baner1,
    "name": "Встречайте весну вместе с нами",
    "descr": "Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой"
}

export {banerObj};

const baner2Obj = {
    "src": imgJpg.baner2,
    "name": "Индивидуальный уход",
    "descr": "Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с разными средствами только ухудшают ее качество. Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы."
}
 export {baner2Obj};

 const baner3Obj = {
    "src": img.baner3,
    "descr": "“Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех, кто хочет заботиться о себе и своем теле”"
}
 export {baner3Obj};

 const baner4Obj = {
    "srcOne": img.baner41,
    "srcTwoo": img.baner42,
    "srcThree": img.baner43,
    "srcFour": img.baner44,
    "srcFive": img.baner45,
    "srcSix": img.baner46,
    "name": "Присоединяйтесь к нам",
    "descr": "Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми"
}

export {baner4Obj};

const contacts = {
    "adress": "Санкт-Петербург, ул. Большая Конюшенная, 19",
    "tel": "+7 (923) 888-90-60",
    "email": "info@maroon.ru",
    "srcF": imgSvg.facebook,
    "srcI": imgSvg.instagram,
    "srcT": imgSvg.twitter

}

export {contacts};