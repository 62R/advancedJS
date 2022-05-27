const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

let i = 0;

const renderProduct = (item) => {
    return `<div class="product-item">
                <img src = 'https://picsum.photos/200/300?random=${i}'>                
                <div class="text-wrap">
                    <h3>${item.title}</h3>
                    <p>${item.price} $</p>
                </div>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item, i++));
    console.log(productsList);
    //запятые появлялись в верстке т.к. передавали массив как цельный объект в свойство innerHTML, в том числе заяпятые, которые разделяют элементы массива.
    productsList.forEach(product => {
        document.querySelector('.products').innerHTML += product;
    });


};

renderPage(products);