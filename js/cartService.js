"use strict";
// =======================================cart
// 1. add Product to CART
// 2. Remove Product
// 3. Clear cart
// 4. Get  All Information
class CartService {
    constructor() {
        this.cart = {};
    }

    // 1............add Product to CART
    add(product) {
        const key = product.id;
        if (this.cart[key]) {
            this.cart[key].amount++;
            return;
        }
        this.cart[key] = {
            title: product.title,
            price: product.price,
            amount: 1
        };
    }
    // 2............Remove Product
    remove(productId) {
        const amount = this.cart[productId].amount;
        if(amount === 1){
            delete this.cart[productId];
        } else {
            this.cart[productId].amount--;
        }
         
    }
    // 3............Clear cart
    clear() {
        this.cart = {};
    }
    // 4............Get  All Information
    getInfo() {
        const items = Object.keys(this.cart).map(id => {
            // return {
            //     id: id,
            //     title: this.cart[id].tile,
            //     amount: this.cart[id].amount,
            //     price: this.cart[id].price,
            // };
            // ===
            return {
                id,
                ...this.cart[id]
            };
        });

        const totalPrice = items.reduce((sum, item) => {
            return sum += item.amount * item.price;
        }, 0);

        return {
            items,
            totalPrice
        };
    }

}