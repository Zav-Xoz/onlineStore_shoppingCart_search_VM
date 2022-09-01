// Обрезаем строку
const ellipsis = (string = '', maxLength = 30) => {
    if(string.length > maxLength){
        return string.substring(0, maxLength) + '...';
    }
    return string;
};

class HTMLService {
    // шаблон вывода каждого товара
    paintProduct(product) {
        return ` 
        <li data-id="${product.id}">
            <img src="${product.image}" title="${product.title}" />
            <small>${ellipsis(product.title, 14)}</small>
            <small><strong>$ ${product.price}</strong></small>
        </li>
        `;
    }

    paintProducts(products = []) {
        // новый массив  обьедененный в строку
        return products.map(this.paintProduct).join('');
    }
    paintCartItem(item) {
        return `
        <li data-type="remove" data-id="${item.id}">
            (${item.amount})
            ${item.title}
            <strong>$ ${item.price}</strong>
        </li>
        `;
    }

    paintCart({
        items,
        totalPrice
    }) {
        if (items.length == 0) {
            return `<p>Cart is empty</p>`;
        }

        return `
        <ul class="cart-list">
            ${items.map(this.paintCartItem).join('')}
        </ul>
        <hr>
        <p class="info">
        <span>Total Price: <strong>$ ${totalPrice.toFixed(2)}</strong></span>
        <button class="clear" data-type="clear">Clear Cart</button>  
        </p>
        `;
    }

    paintError(e) {
        return `<p class="error">${e.message}</p>`;
    }
}