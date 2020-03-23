/* Copyright ©, Все права защищены (нет)*/

/* наши переменные */
var quantity_extract_money = 0;
var quantity_extract_cristals= 0;
var quantity_extract_cards = 0;
var money = document.getElementById('money');
var crystals = document.getElementById('crystals');
var cards = document.getElementById('cards');
var level = document.getElementById('level');
var speed_extract_money = 2;

/* Начнем с добычи монеточек :З */

function extract() {
    /* Колличество получаемых монет зависят от уровня человека */
    if (level.innerHTML === '1') {
       quantity_extract_money = quantity_extract_money + speed_extract_money;
       money.innerHTML = quantity_extract_money;
    }
    if (level.innerHTML === '2') {
        speed_extract_money = 3;
        quantity_extract_money = quantity_extract_money + speed_extract_money;
        money.innerHTML = quantity_extract_money;
    }
    if (level.innerHTML === '3') {
        speed_extract_money = 4;
        quantity_extract_money = quantity_extract_money + speed_extract_money;
        money.innerHTML = quantity_extract_money;
    }
    if (level.innerHTML === '4') {
        speed_extract_money = 6;
        quantity_extract_money = quantity_extract_money + speed_extract_money;
        money.innerHTML = quantity_extract_money;
    }
    if (level.innerHTML === '5') {
        speed_extract_money = 8;
        quantity_extract_money = quantity_extract_money + speed_extract_money;
        money.innerHTML = quantity_extract_money;
    }
    console.log(money.innerHTML);
}



function t() {
    level.innerHTML = "5";
}