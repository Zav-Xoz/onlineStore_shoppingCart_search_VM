"use strict";
// console.log(data);
// console.dir(data);



class ProductService {
    constructor(products = []) {
        this.products = products;
    }

    // ---------------------------------------------------ФИЛЬТРАЦИЯ ПО ПОИСКУ
    filterBy(search = '') {
        // ЕСЛИ ПУСТАЯ СТРОКА ИЛИ ПРОБЕЛЫ возвращаем DATA
        if (!search.trim()) {
            return this.products;
        }
        // ЕСЛИ НЕ ПУСТАЯ СТРОКА , приводим к регистру фильтруем и отдаем
        return this.products.filter(product => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        });
    }
    // -------------help index get Product
    get(index) {
        return this.products[index];
    }
    // -------------help ID
    getById(id) {
        return this.products.find(product => {
            return product.id === id;
        });
    }
}