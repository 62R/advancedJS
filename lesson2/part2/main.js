'use strict'
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = new Set();
        this.ingredients = {};
        this._fetchIngredients();
    }

    _fetchIngredients() {
        this.ingredients = {
            burgers: {
                small: {
                    price: 50,
                    calories: 20,
                },

                large: {
                    price: 100,
                    calories: 40,
                },
            },
            stuffings: {
                cheese: {
                    price: 10,
                    calories: 20,
                },
                salad: {
                    price: 20,
                    calories: 5,
                },
                potato: {
                    price: 15,
                    calories: 10,
                },
            },
            toppings: {
                spice: {
                    price: 15,
                    calories: 0,
                },
                mayo: {
                    price: 20,
                    calories: 5,
                },
            },

        }
    }

    addTopping(topping) {
        this.toppings.add(topping);
    }// Добавить добавку
    removeTopping(topping) {
        this.toppings.delete(topping);
    }// Убрать добавку
    getToppings() {
        return this.toppings;
    }// Получить список добавок
    setSize(size) {
        this.size = size;
    }// Узнать размер гамбургера
    setStuffing(stuffing) {
        this.stuffing = stuffing;
    }// Узнать начинку гамбургера
    calculatePrice() {
        let totalPrice = 0;
        totalPrice += this.ingredients.burgers[this.size].price;
        totalPrice += this.ingredients.stuffings[this.stuffing].price;
        this.toppings.forEach((topping) => { totalPrice += this.ingredients.toppings[topping].price });
        return totalPrice;
    }// Узнать цену
    calculateCalories() {
        let totalCalories = 0;
        totalCalories += this.ingredients.burgers[this.size].calories;
        totalCalories += this.ingredients.stuffings[this.stuffing].calories;
        this.toppings.forEach((topping) => { totalCalories += this.ingredients.toppings[topping].calories });
        return totalCalories;
    }// Узнать калорийность
}


const submitBtn = document.querySelector('.burger__submit-btn');
const sizeSelector = document.getElementsByName('burger-size');
const stuffingSelector = document.getElementsByName('burger-stuffing');
const toppingSelector = document.getElementsByName('burger-topping');
let burgerSize = null;
let burgerStuffing = null;
let burgerToppings = new Set();

sizeSelector.forEach((element) => {
    element.addEventListener('click', function (event) {
        burger.setSize(event.target.dataset.size);
    });
    if (element.checked) {
        burgerSize = element.dataset.size;
    }
});
stuffingSelector.forEach((element) => {
    element.addEventListener('click', function (event) {
        burger.setStuffing(event.target.dataset.stuffing);
    });
    if (element.checked) {
        burgerStuffing = element.dataset.stuffing;
    }
});
toppingSelector.forEach((element) => {

    element.addEventListener('click', function (event) {
        event.target.checked ? burger.addTopping(event.target.dataset.to) : burger.removeTopping(topping);
    });

    if (element.checked) {
        burgerToppings.add(element.dataset.topping);
    }
});

const burger = new Hamburger(burgerSize, burgerStuffing);
for (let topping of burgerToppings) {
    burger.addTopping(topping);
}


submitBtn.addEventListener('click', function () {
    alert(`Стоимость бургера ${burger.calculatePrice()}$. \nЕго каллорийность ${burger.calculateCalories()}ккал`)
})