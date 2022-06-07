const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        filtered: [],
        cart: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false,
        showCart: false,
    },
    methods: {
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let find = this.cart.find(cartProduct => product.id_product === cartProduct.id_product);
            if (find) {
                find.quantity++;
            } else {
                this.cart.push(Object.assign(product));
                this.$set(this.cart.at(-1), 'quantity', 1);
            }
        },
        deleteFromCart(product) {
            console.log(product)
            if (product.quantity === 1) {
                const indexCartItem = this.cart.findIndex(cartItem => product.id_product === cartItem.id_product);
                this.cart.splice(indexCartItem, 1);
            } else {
                product.quantity--;
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cart.push(el);
                }
            });

    }

})