'use strict';

/**
 * Вставка текста в документ html
 * @param {*Id элемента в html} id 
 * @param {*Текст вставки в документ html} text 
 */
function write(id, text) {
    document.getElementById(id).innerHTML = text;
}

// task 1
let oneHundredArray = [];
let SimpleNumbersArray = [];

for (let number = 1; number <= 100; number++) {
    oneHundredArray.push(number);
}

oneHundredArray.forEach(function (value, index) {
    let count = 0;
    for (let i = 2; i < index + 1; i++) {
        count = 0;
        if (value % i === 0) {
            break;
        }
        else {
            count++;
        }
    }
    if (count === 1 && value !== 1 || value === 2) {
        SimpleNumbersArray.push(value);
    }

});

write('answer_1_1', SimpleNumbersArray);

//task 2
let basket = [];

/**
 * Добавление товара в корзину (список списков).
 * @param {*Название товара} product 
 * @param {*Цена товара} price 
 */
function addProductPrice(product, price) {
    basket.push([product, price]);
}

/**
 * Подсчёт стоимости всех товаров в корзине.
 * @param {*Массив элементов в каорзине в формате [[product, price]]} array 
 */
function countBasketPrice(array) {
    let basketPrice = 0;
    array.forEach(function (value) {
        basketPrice += value[1];
    })
    return basketPrice;
}

addProductPrice('product_1', 12);
addProductPrice('priduct_2', 15);

write('answer_2_1', 'Товары в корзине храняться в виде: ' + basket);
write('answer_2_2', 'Стоимость товаров в корзине: ' + countBasketPrice(basket));


//task 3
let emptyLoopsBody = [];
for (let i = 0; i <= 9; write('answer_3_1', emptyLoopsBody.push(i++))) { }
write('answer_3_1', emptyLoopsBody);

// или с выводом в консоль
for (let i = 0; i <= 9; console.log(i++)) { }

//task 4
let outputStars = '*'
for (let i = 0; i < 20; i++) {
    console.log(outputStars);
    outputStars += '*';
}






