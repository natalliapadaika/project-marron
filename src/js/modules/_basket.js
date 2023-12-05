const basketImg = document.querySelector(".basket");
const basketItems = document.querySelector(".basket_items");



export { basketImg, basketItems, basketX};


const basketX = () =>{
    const basketclosed = document.querySelector('.basket-x');
    basketclosed.addEventListener('click', (e) => {
    if(e.target.closest('.basket-x')){
        console.log('hh');
    basketItems.style.display = 'none';
    document.querySelector(".greeting").classList.remove("noopen");
    document.querySelector(".wrapper").classList.remove("no-back");
    
    basketItems.innerHTML = ``;
    document.querySelector('.display-none').style.display='block';
}
});
}
