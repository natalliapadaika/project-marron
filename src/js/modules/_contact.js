import {
    contacts, 
    imgSvg
} from './_baner-obj.js';

export {contacts};

export const addContacts = () => {
    const contact = document.querySelector('.contacts_req-icon');

    contact.insertAdjacentHTML('afterbegin', `<div class="contacts_requisites">
    <h2>Контакты</h2>
    <h3>Адрес</h3>
    <p>${contacts.adress}</p>
    <h3>Телефон</h3>
    <p>${contacts.tel}</p>
    <h3>E-mail</h3>
    <p>${contacts.email}</p>
    <div class="contacts_icon">
    <a href="#"> <img src="${contacts.srcF}" alt="one"></a>
    <a href="#"> <img src="${contacts.srcI}" alt="one"></a>
    <a href="#"> <img src="${contacts.srcT}" alt="one"></a>
    </div>
    
    </div>`)
};


export async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [30.3350986, 59.9342802],

                // Уровень масштабирования
                zoom: 9
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    const content = document.createElement('section');
    const marker = new YMapMarker(
        {
          coordinates: [30.323037, 59.938631],
          draggable: true
        },
        content
      );
      map.addChild(marker);
      content.innerHTML = '<h1>&#127988</h1>';

};


