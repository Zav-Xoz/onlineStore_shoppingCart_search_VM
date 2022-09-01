"use strict";
let productService ;
const cartService = new CartService()
const htmlService = new HTMLService()

const productsContainer = document.querySelector('.products');
const cartContainer = document.querySelector('#cart');
const filterInput = document.querySelector('#filter');

filterInput.addEventListener('input', event => {
    const value = event.target.value;
    const filterProduct = productService.filterBy(value);
    renderProducts(filterProduct);
});

productsContainer.addEventListener('click', event => {
    // тернарный оператор выбираем не только clik по id (li) 
    // но и изображению
    const id = event.target.dataset.id ?
        event.target.dataset.id :
        event.target.closest('li')?.dataset.id;

    if (id) {
        cartService.add(
            productService.getById(Number(id))
        );
        renderCart();
    }
});

cartContainer.addEventListener('click', event => {
    const type = event.target?.dataset.type;
    const id = event.target?.dataset.id;
    switch(type){
        case 'clear':
            cartService.clear();
            renderCart();
            break;
        case 'remove':
            cartService.remove(id);
            renderCart();
            break;
    }
});

const renderProducts = (products) => {
    productsContainer.innerHTML = htmlService.paintProducts(products);
};

const renderCart = () => {
    cartContainer.innerHTML = htmlService.paintCart(
        cartService.getInfo()
    );
};
// глобальная ассинхроная функция загрузки контента из интернета
  async function startApplication() {
    renderCart();
    try{
             // ответ сервера
            const response = await fetch('https://fakestoreapi.com/products');
            // получаем данные
            const data = await response.json();

            productService = new ProductService(data);
            
            renderProducts(productService.products);
    }catch (e){
        productsContainer.innerHTML =  htmlService.paintError(e);
    }

   
};
startApplication();

 