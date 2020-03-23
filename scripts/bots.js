/* Copyright ©, Все права защищены (нет)*/

/* Наши переменные */
var cup_user = document.getElementById('cup_user');
var cup_zn = 0;
function getRandomInRange1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Здоровье и сила бота зависят от твоего уровня */
function fight() {
    if (level.innerHTML === '1') {
        var xit_bot1 = getRandomInRange1(1, 20);
        console.log('fight_#_lvl_1');
        console.log(xit_bot1);
        if (xit_bot1 > xit_user.innerHTML) {
            money.innerHTML
            if (cup_user.innerHTML <= 15) {
                cup_zn = 0;
                cup_user.innerHTML = cup_zn;
            } else {
                cup_zn = cup_zn - 15;
                cup_user.innerHTML = cup_zn;
            }
            quantity_extract_money = quantity_extract_money - 5;
            money.innerHTML = quantity_extract_money;
            console.log('xit_bot__>__xit_user__:__game_over:');
        } else {
            console.log('xit_bot__<__xit_user__:__you_win:');
            
            cup_zn = cup_zn + 15;
            cup_user.innerHTML = cup_zn;

            quantity_extract_money = quantity_extract_money + 10;
            money.innerHTML = quantity_extract_money;

            quantity_extract_cristals = quantity_extract_cristals + 1;
            crystals.innerHTML = quantity_extract_cristals;
            
            quantity_extract_cards = quantity_extract_cards + 5;
            cards.innerHTML = quantity_extract_cards;
            console.log(cup_zn);
        }
        if (cup_zn >= 300) {
            level.innerHTML = "2";
        }

    }
    if (level.innerHTML === '2') {
        var xit_bot2 = getRandomInRange1(1, 50);
        console.log('fight_#_lvl_2');
        console.log(xit_bot2);
        if (xit_bot2 > xit_user.innerHTML) {
            money.innerHTML
            if (cup_user.innerHTML <= 299) {
                level.innerHTML = '1';
            } else {
                cup_zn = cup_zn - 15;
                cup_user.innerHTML = cup_zn;
            }
            quantity_extract_money = quantity_extract_money - 15;
            money.innerHTML = quantity_extract_money;
            console.log('xit_bot__>__xit_user__:__game_over:');
        } else {
            console.log('xit_bot__<__xit_user__:__you_win:');
            
            cup_zn = cup_zn + 15;
            cup_user.innerHTML = cup_zn;

            quantity_extract_money = quantity_extract_money + 10;
            money.innerHTML = quantity_extract_money;

            quantity_extract_cristals = quantity_extract_cristals + 1;
            crystals.innerHTML = quantity_extract_cristals;
            
            quantity_extract_cards = quantity_extract_cards + 5;
            cards.innerHTML = quantity_extract_cards;
            console.log(cup_zn);
        }
        if (cup_zn >= 600) {
            level.innerHTML = "3";
        }
    }
    if (level.innerHTML === '3') {
        var xit_bot3 = getRandomInRange1(1, 75);
        console.log('fight_#_lvl_3');
        console.log(xit_bot3);
        if (xit_bot3 > xit_user.innerHTML) {
            money.innerHTML
            if (cup_user.innerHTML <= 599) {
                level.innerHTML = '2';
            } else {
                cup_zn = cup_zn - 15;
                cup_user.innerHTML = cup_zn;
            }
            quantity_extract_money = quantity_extract_money - 30;
            money.innerHTML = quantity_extract_money;
            console.log('xit_bot__>__xit_user__:__game_over:');
        } else {
            console.log('xit_bot__<__xit_user__:__you_win:');
            
            cup_zn = cup_zn + 15;
            cup_user.innerHTML = cup_zn;

            quantity_extract_money = quantity_extract_money + 15;
            money.innerHTML = quantity_extract_money;

            quantity_extract_cristals = quantity_extract_cristals + 1;
            crystals.innerHTML = quantity_extract_cristals;
            
            quantity_extract_cards = quantity_extract_cards + 5;
            cards.innerHTML = quantity_extract_cards;
            console.log(cup_zn);
        }
        if (cup_zn >= 1000) {
            level.innerHTML = "4";
        }
    }

    if (level.innerHTML === '4') {
        var xit_bot4 = getRandomInRange1(1, 120);
        console.log('fight_#_lvl_4');
        console.log(xit_bot4);
        if (xit_bot4 > xit_user.innerHTML) {
            money.innerHTML
            if (cup_user.innerHTML <= 999) {
                level.innerHTML = '3';
            } else {
                cup_zn = cup_zn - 15;
                cup_user.innerHTML = cup_zn;
            }
            quantity_extract_money = quantity_extract_money - 40;
            money.innerHTML = quantity_extract_money;
            console.log('xit_bot__>__xit_user__:__game_over:');
        } else {
            console.log('xit_bot__<__xit_user__:__you_win:');
            
            cup_zn = cup_zn + 15;
            cup_user.innerHTML = cup_zn;

            quantity_extract_money = quantity_extract_money + 20;
            money.innerHTML = quantity_extract_money;

            quantity_extract_cristals = quantity_extract_cristals + 1;
            crystals.innerHTML = quantity_extract_cristals;
            
            quantity_extract_cards = quantity_extract_cards + 5;
            cards.innerHTML = quantity_extract_cards;
            console.log(cup_zn);
        }
        if (cup_zn >= 1600) {
            level.innerHTML = "5";
        }
    }
    if (level.innerHTML === '5') {
        var xit_bot4 = getRandomInRange1(1, 160);
        console.log('fight_#_lvl_5');
        console.log(xit_bot4);
        if (xit_bot4 > xit_user.innerHTML) {
            money.innerHTML
            if (cup_user.innerHTML <= 1599) {
                level.innerHTML = '4';
            } else {
                cup_zn = cup_zn - 15;
                cup_user.innerHTML = cup_zn;
            }
            quantity_extract_money = quantity_extract_money - 50;
            money.innerHTML = quantity_extract_money;
            console.log('xit_bot__>__xit_user__:__game_over:');
        } else {
            console.log('xit_bot__<__xit_user__:__you_win:');
            
            cup_zn = cup_zn + 15;
            cup_user.innerHTML = cup_zn;

            quantity_extract_money = quantity_extract_money + 30;
            money.innerHTML = quantity_extract_money;

            quantity_extract_cristals = quantity_extract_cristals + 1;
            crystals.innerHTML = quantity_extract_cristals;
            
            quantity_extract_cards = quantity_extract_cards + 5;
            cards.innerHTML = quantity_extract_cards;
            console.log(cup_zn);
        }
        if (cup_zn >= 2500) {
            level.innerHTML = "6";
        }
    }
}
