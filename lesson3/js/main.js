const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
                const buyBtns = document.querySelectorAll('.buy-btn');
                buyBtns.forEach((buyBtn) => buyBtn.addEventListener('click', cart.addProduct.bind(cart)));
            });
    }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {

        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}


class Cart {
    constructor(container = '.cart') {
        this.cartBlock = document.querySelector(container);
        this.cartList = [];

        this._getCartProduct()
            .then(data => {
                this.cartList = data.contents;

                this.render();

                const openCartBtn = document.querySelector('.btn-cart');
                openCartBtn.addEventListener('click', cart.openCart.bind(cart));
            });

    }

    _getCartProduct() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        this.cartBlock.querySelector('tbody').innerHTML = '';
        this.cartList.forEach((cartItem) => {
            this.cartBlock.querySelector('tbody').insertAdjacentHTML('beforeend',
                `<tr>
                    <td>${cartItem.product_name}</td>
                    <td>$${cartItem.price}</td>
                    <td>${cartItem.quantity}шт.</td>
                    <td>$${cartItem.quantity * cartItem.price}</td>
                </tr>`);
        })
    }

    openCart() {
        this.cartBlock.classList.toggle('cart_status_opened');
    }

    addProduct(event) {
        const newProductId = event.target.closest('.product-item').dataset.id;
        for (let product of this.cartList) {
            if (newProductId == product.id_product) {
                product.quantity += 1;

                this.render();
                return;
            }
        }
        const newProduct = {};
        list.goods.forEach((listEl) => {
            if (listEl.id = newProduct) {
                newProduct = listEl;
            }
        });
        this.cartList.pust(newProduct);
        this.render();
    }
}

let list = new ProductsList();
console.log(list.allProducts);

let cart = new Cart();


