/* Copyright ©, Все права защищены (нет)*/

/* содержание */
/* огненное - ~54 */
/* эллектрическое - ~100 */
/* ветрянное - ~147 */
/* Ядовитое - ~209 */
/* Ледяное - ~272 */
/* Железное - ~318 */
/* Параллизующее - ~380*/
/* Шестереночное - ~427 */
/* Ураганное - ~520 */
/* Световое - ~613 */
/* наши переменные */
var attemps_fire = 0;
var attemps_iron = 0;
var attemps_electric = 0;
var attemps_winter = 0;
var attemps_poison = 0;
var attemps_frozen = 0;
var attemps_whirlwind = 0;
var attemps_paralyzing = 0;
var attemps_pinion = 0;
var attemps_light = 0;
var test_winter = 0;
var test_electric = 0;
var test_whirlwind = 0;
var test_poison = 0;
var test_frozen = 0;
var test_iron = 0;
var test_fire = 0;
var test_paralyzing = 0;
var test_pinion = 0;
var test_light = 0;
var attemps_classic = 0;
var upgrade_classic_display = document.getElementById('upgrade_classic_display');

function cheats() {
    quantity_extract_money = quantity_extract_money + 600;
    quantity_extract_cards = quantity_extract_cards + 200;
    money.innerHTML = quantity_extract_money;
    cards.innerHTML = quantity_extract_cards;
}

function upgrade_classic() {
    if (quantity_extract_money >= 30) {
        if (attemps_classic === 0) {
            console.log('upgrade_classic_sword+1_to_max');
            attemps_classic = 1;
            quantity_extract_money = quantity_extract_money - 30;
            money.innerHTML = quantity_extract_money;
            xit_classic = '10';
            upgrade_classic_display.style.display = 'none';
            level_classic = 'max(2)';
            alert('Вы улучшили огневое оружие до максимального уровня. Выберете классическое оружие в списке замен, чтобы обновить статистику.')
        }
        
    } else {
        alert('Недостаточно средств.')
    }
 
}
/* ОГненное */
function upgrade_fire() {
    if (quantity_extract_money >= 150) {
        if (attemps_fire === 0) {
            console.log('upgrade_fire_sword+1_to_+1');
            upgrade_fire_display.innerHTML = 'Оружие(Огненное): 300 монет';
            attemps_fire = 1;
            quantity_extract_money = quantity_extract_money - 150;
            money.innerHTML = quantity_extract_money;
            xit_fire = '20'
            level_fire = '3';
            alert('Вы улучшили огневое оружие до 3 уровня. Выберете огневое оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 300) {
        if (attemps_fire === 1) {
            console.log('upgrade_fire_sword+1_to_+1');
            upgrade_fire_display.innerHTML = 'Оружие(Огненное): 600 монет';
            quantity_extract_money = quantity_extract_money - 300;
            money.innerHTML = quantity_extract_money;
            xit_fire = '35';
            test_fire = 1;
            attemps_fire = 2;
            level_fire = '4';
            alert('Вы улучшили огневое оружие до 4 уровня. Выберете огневое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 600) {
        if (test_fire === 1) { 
            console.log('upgrade_fire_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 600;
            money.innerHTML = quantity_extract_money;
            xit_fire = '50'
            upgrade_fire_display.style.display = 'none';
            level_fire = 'max(5)';
            alert('Вы улучшили огневое оружие до 5 уровня. Выберете огневое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}
/* Эллектрический */

function upgrade_electric() {
    if (quantity_extract_money >= 200) {
        if (attemps_electric === 0) {
            console.log('upgrade_electric_sword+1_to_+1');
            upgrade_electric_display.innerHTML = 'Оружие(Эллектрическое): 400 монет';
            attemps_electric = 1;
            quantity_extract_money = quantity_extract_money - 200;
            money.innerHTML = quantity_extract_money;
            xit_electric = '30'
            level_electric = '3';
            alert('Вы улучшили эллектрическое оружие до 3 уровня. Выберете эллектрическое оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 400) {
        if (attemps_electric === 1) {
            console.log('upgrade_electric_sword+1_to_+1');
            upgrade_electric_display.innerHTML = 'Оружие(Эллектрическое): 800 монет';
            quantity_extract_money = quantity_extract_money - 400;
            money.innerHTML = quantity_extract_money;
            xit_electric = '45';
            test_electric = 1;
            attemps_electric = 2;
            level_electric = '4';
            alert('Вы улучшили Эллектрическое оружие до 4 уровня. Выберете Эллектрическое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 800) {
        if (test_electric === 1) { 
            console.log('upgrade_electric_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 800;
            money.innerHTML = quantity_extract_money;
            xit_electric = '60'
            upgrade_electric_display.style.display = 'none';
            level_electric = 'max(5)';
            alert('Вы улучшили Эллектрическое оружие до 5 уровня. Выберете Эллектрическое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}

/* Ветрянное */

function upgrade_winter() {
    if (quantity_extract_money >= 500) {
        if (attemps_winter === 0) {
            console.log('upgrade_winter_sword+1_to_+1');
            upgrade_winter_display.innerHTML = 'Оружие(Ветрянное): 1000 монет';
            attemps_winter = 1;
            quantity_extract_money = quantity_extract_money - 500;
            money.innerHTML = quantity_extract_money;
            xit_winter = '50'
            level_winter = '5';
            alert('Вы улучшили Ветрянное оружие до 5 уровня. Выберете Ветрянное оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 1000) {
        if (attemps_winter === 1) {
            console.log('upgrade_winter_sword+1_to_+1');
            upgrade_winter_display.innerHTML = 'Оружие(Ветрянное): 1500 монет';
            quantity_extract_money = quantity_extract_money - 1000;
            money.innerHTML = quantity_extract_money;
            xit_winter = '65';
            test_winter = 1;
            attemps_winter = 2;
            level_winter = '6';
            alert('Вы улучшили Ветрянное оружие до 6 уровня. Выберете Ветрянное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 1500) {
        if (attemps_winter === 2) {
            console.log('upgrade_winter_sword+1_to_+1');
            upgrade_winter_display.innerHTML = 'Оружие(Ветрянное): 3000 монет';
            quantity_extract_money = quantity_extract_money - 1500;
            money.innerHTML = quantity_extract_money;
            xit_winter = '70';
            test_winter = 2;
            attemps_winter = 3;
            level_winter = '7';
            alert('Вы улучшили Ветрянное оружие до 7 уровня. Выберете Ветрянное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 3000) {
        if (test_winter === 2) { 
            console.log('upgrade_winter_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 3000;
            money.innerHTML = quantity_extract_money;
            xit_winter = '80'
            upgrade_winter_display.style.display = 'none';
            level_winter = 'max(8)';
            alert('Вы улучшили Ветрянное оружие до 8 уровня. Выберете Ветрянное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}

/* Ядовитое */

function upgrade_poison() {
    if (quantity_extract_money >= 500) {
        if (attemps_poison === 0) {
            console.log('upgrade_poison_sword+1_to_+1');
            upgrade_poison_display.innerHTML = 'Оружие(Ядовитое): 1000 монет';
            attemps_poison = 1;
            quantity_extract_money = quantity_extract_money - 500;
            money.innerHTML = quantity_extract_money;
            xit_poison = '40'
            level_poison = '5';
            alert('Вы улучшили Ядовитое оружие до 5 уровня. Выберете Ядовитое оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 1000) {
        if (attemps_poison === 1) {
            console.log('upgrade_poison_sword+1_to_+1');
            upgrade_poison_display.innerHTML = 'Оружие(Ядовитое): 1500 монет';
            quantity_extract_money = quantity_extract_money - 1000;
            money.innerHTML = quantity_extract_money;
            xit_poison = '55';
            test_poison = 1;
            attemps_poison = 2;
            level_poison = '6';
            alert('Вы улучшили Ядовитое оружие до 6 уровня. Выберете Ядовитое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 1500) {
        if (attemps_poison === 2) {
            console.log('upgrade_poison_sword+1_to_+1');
            upgrade_poison_display.innerHTML = 'Оружие(Ядовитое): 3000 монет';
            quantity_extract_money = quantity_extract_money - 1500;
            money.innerHTML = quantity_extract_money;
            xit_poison = '60';
            test_poison = 2;
            attemps_poison = 3;
            level_poison = '7';
            alert('Вы улучшили Ядовитое оружие до 7 уровня. Выберете Ядовитое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 3000) {
        if (test_poison === 2) { 
            console.log('upgrade_poison_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 3000;
            money.innerHTML = quantity_extract_money;
            xit_poison = '75'
            upgrade_poison_display.style.display = 'none';
            level_poison = 'max(8)';
            alert('Вы улучшили Ядовитое оружие до 8 уровня. Выберете Ядовитое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}

/* Ледяное */
function upgrade_frozen() {
    if (quantity_extract_money >= 300) {
        if (attemps_frozen === 0) {
            console.log('upgrade_frozen_sword+1_to_+1');
            upgrade_frozen_display.innerHTML = 'Оружие(ледяное): 600 монет';
            attemps_frozen = 1;
            quantity_extract_money = quantity_extract_money - 300;
            money.innerHTML = quantity_extract_money;
            xit_frozen = '30'
            level_frozen = '3';
            alert('Вы улучшили ледяное оружие до 3 уровня. Выберете ледяное оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 600) {
        if (attemps_frozen === 1) {
            console.log('upgrade_frozen_sword+1_to_+1');
            upgrade_frozen_display.innerHTML = 'Оружие(ледяное): 1200 монет';
            quantity_extract_money = quantity_extract_money - 600;
            money.innerHTML = quantity_extract_money;
            xit_frozen = '35';
            test_frozen = 1;
            attemps_frozen = 2;
            level_frozen = '4';
            alert('Вы улучшили ледяное оружие до 4 уровня. Выберете ледяное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 1200) {
        if (test_frozen === 1) { 
            console.log('upgrade_frozen_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 1200;
            money.innerHTML = quantity_extract_money;
            xit_frozen = '45'
            upgrade_frozen_display.style.display = 'none';
            level_frozen = 'max(5)';
            alert('Вы улучшили ледяное оружие до 5 уровня. Выберете ледяное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}

/* Железное */

function upgrade_iron() {
    if (quantity_extract_money >= 1500) {
        if (attemps_iron === 0) {
            console.log('upgrade_iron_sword+1_to_+1');
            upgrade_iron_display.innerHTML = 'Оружие(Железное): 3000 монет';
            attemps_iron = 1;
            quantity_extract_money = quantity_extract_money - 1500;
            money.innerHTML = quantity_extract_money;
            xit_iron = '45'
            level_iron = '5';
            alert('Вы улучшили Железное оружие до 5 уровня. Выберете Железное оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 3000) {
        if (attemps_iron === 1) {
            console.log('upgrade_iron_sword+1_to_+1');
            upgrade_iron_display.innerHTML = 'Оружие(Железное): 6000 монет';
            quantity_extract_money = quantity_extract_money - 3000;
            money.innerHTML = quantity_extract_money;
            xit_iron = '65';
            test_iron = 1;
            attemps_iron = 2;
            level_iron = '6';
            alert('Вы улучшили Железное оружие до 6 уровня. Выберете Железное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 6000) {
        if (attemps_iron === 2) {
            console.log('upgrade_iron_sword+1_to_+1');
            upgrade_iron_display.innerHTML = 'Оружие(Железное): 10000 монет';
            quantity_extract_money = quantity_extract_money - 6000;
            money.innerHTML = quantity_extract_money;
            xit_iron = '80';
            test_iron = 2;
            attemps_iron = 3;
            level_iron = '7';
            alert('Вы улучшили Железное оружие до 7 уровня. Выберете Железное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 10000) {
        if (test_iron === 2) { 
            console.log('upgrade_iron_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 10000;
            money.innerHTML = quantity_extract_money;
            xit_iron = '100'
            upgrade_iron_display.style.display = 'none';
            level_iron = 'max(8)';
            alert('Вы улучшили Железное оружие до 8 уровня. Выберете Железное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}
/* Параллизующее */

function upgrade_paralyzing() {
    if (quantity_extract_money >= 300) {
        if (attemps_paralyzing === 0) {
            console.log('upgrade_paralyzing_sword+1_to_+1');
            upgrade_paralyzing_display.innerHTML = 'Оружие(Параллизующее): 500 монет';
            attemps_paralyzing = 1;
            quantity_extract_money = quantity_extract_money - 300;
            money.innerHTML = quantity_extract_money;
            xit_paralyzing = '5'
            level_paralyzing = '3';
            alert('Вы улучшили Параллизующее оружие до 3 уровня. Выберете Параллизующее оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 500) {
        if (attemps_paralyzing === 1) {
            console.log('upgrade_paralyzing_sword+1_to_+1');
            upgrade_paralyzing_display.innerHTML = 'Оружие(Параллизующее): 800 монет';
            quantity_extract_money = quantity_extract_money - 500;
            money.innerHTML = quantity_extract_money;
            xit_paralyzing = '10';
            test_paralyzing = 1;
            attemps_paralyzing = 2;
            level_paralyzing = '4';
            alert('Вы улучшили Параллизующее оружие до 4 уровня. Выберете Параллизующее оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 800) {
        if (test_paralyzing === 1) { 
            console.log('upgrade_paralyzing_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 800;
            money.innerHTML = quantity_extract_money;
            xit_paralyzing = '15'
            upgrade_paralyzing_display.style.display = 'none';
            level_paralyzing = 'max(5)';
            alert('Вы улучшили Параллизующее оружие до 5 уровня. Выберете Параллизующее оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}

/* Шестереночное */

function upgrade_pinion() {
    if (quantity_extract_money >= 3000) {
        if (attemps_pinion === 0) {
            console.log('upgrade_pinion_sword+1_to_+1');
            upgrade_pinion_display.innerHTML = 'Оружие(Шестереночное): 6000 монет';
            attemps_pinion = 1;
            quantity_extract_money = quantity_extract_money - 3000;
            money.innerHTML = quantity_extract_money;
            xit_pinion = '100'
            level_pinion = '7';
            alert('Вы улучшили Шестереночное оружие до 7 уровня. Выберете Шестереночное оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 6000) {
        if (attemps_pinion === 1) {
            console.log('upgrade_pinion_sword+1_to_+1');
            upgrade_pinion_display.innerHTML = 'Оружие(Шестереночное): 10000 монет';
            quantity_extract_money = quantity_extract_money - 6000;
            money.innerHTML = quantity_extract_money;
            xit_pinion = '125';
            test_pinion = 1;
            attemps_pinion = 2;
            level_pinion = '8';
            alert('Вы улучшили Шестереночное оружие до 8 уровня. Выберете Шестереночное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 10000) {
        if (attemps_pinion === 2) {
            console.log('upgrade_pinion_sword+1_to_+1');
            upgrade_pinion_display.innerHTML = 'Оружие(Шестереночное): 15000 монет';
            quantity_extract_money = quantity_extract_money - 10000;
            money.innerHTML = quantity_extract_money;
            xit_pinion = '150';
            test_pinion = 2;
            attemps_pinion = 3;
            level_pinion = '9';
            alert('Вы улучшили Шестереночное оружие до 9 уровня. Выберете Шестереночное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 15000) {
        if (attemps_pinion === 3) {
            console.log('upgrade_pinion_sword+1_to_+1');
            upgrade_pinion_display.innerHTML = 'Оружие(Шестереночное): 20000 монет';
            quantity_extract_money = quantity_extract_money - 15000;
            money.innerHTML = quantity_extract_money;
            xit_pinion = '175';
            test_pinion = 3;
            attemps_pinion = 4;
            level_pinion = '10';
            alert('Вы улучшили Шестереночное оружие до 10 уровня. Выберете Шестереночное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 20000) {
        if (attemps_pinion === 4) {
            console.log('upgrade_pinion_sword+1_to_+1');
            upgrade_pinion_display.innerHTML = 'Оружие(Шестереночное): 30000 монет';
            quantity_extract_money = quantity_extract_money - 20000;
            money.innerHTML = quantity_extract_money;
            xit_pinion = '200';
            test_pinion = 4;
            attemps_pinion = 5;
            level_pinion = '11';
            alert('Вы улучшили Шестереночное оружие до 11 уровня. Выберете Шестереночное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 30000) {
        if (test_pinion === 4) { 
            console.log('upgrade_pinion_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 30000;
            money.innerHTML = quantity_extract_money;
            xit_pinion = '220'
            upgrade_pinion_display.style.display = 'none';
            level_pinion = 'max(12)';
            alert('Вы улучшили Шестереночное оружие до 12 уровня. Выберете Шестереночное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}
/* Ураганное */
function upgrade_whirlwind() {
    if (quantity_extract_money >= 4000) {
        if (attemps_whirlwind === 0) {
            console.log('upgrade_whirlwind_sword+1_to_+1');
            upgrade_whirlwind_display.innerHTML = 'Оружие(Ураганное): 8000 монет';
            attemps_whirlwind = 1;
            quantity_extract_money = quantity_extract_money - 4000;
            money.innerHTML = quantity_extract_money;
            xit_whirlwind = '105'
            level_whirlwind = '7';
            alert('Вы улучшили Ураганное оружие до 7 уровня. Выберете Ураганное оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 8000) {
        if (attemps_whirlwind === 1) {
            console.log('upgrade_whirlwind_sword+1_to_+1');
            upgrade_whirlwind_display.innerHTML = 'Оружие(Ураганное): 12000 монет';
            quantity_extract_money = quantity_extract_money - 8000;
            money.innerHTML = quantity_extract_money;
            xit_whirlwind = '130';
            test_whirlwind = 1;
            attemps_whirlwind = 2;
            level_whirlwind = '8';
            alert('Вы улучшили Ураганное оружие до 8 уровня. Выберете Ураганное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 12000) {
        if (attemps_whirlwind === 2) {
            console.log('upgrade_whirlwind_sword+1_to_+1');
            upgrade_whirlwind_display.innerHTML = 'Оружие(Ураганное): 18000 монет';
            quantity_extract_money = quantity_extract_money - 12000;
            money.innerHTML = quantity_extract_money;
            xit_whirlwind = '155';
            test_whirlwind = 2;
            attemps_whirlwind = 3;
            level_whirlwind = '9';
            alert('Вы улучшили Ураганное оружие до 9 уровня. Выберете Ураганное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 18000) {
        if (attemps_whirlwind === 3) {
            console.log('upgrade_whirlwind_sword+1_to_+1');
            upgrade_whirlwind_display.innerHTML = 'Оружие(Ураганное): 25000 монет';
            quantity_extract_money = quantity_extract_money - 18000;
            money.innerHTML = quantity_extract_money;
            xit_whirlwind = '185';
            test_whirlwind = 3;
            attemps_whirlwind = 4;
            level_whirlwind = '10';
            alert('Вы улучшили Ураганное оружие до 10 уровня. Выберете Ураганное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 25000) {
        if (attemps_whirlwind === 4) {
            console.log('upgrade_whirlwind_sword+1_to_+1');
            upgrade_whirlwind_display.innerHTML = 'Оружие(Ураганное): 40000 монет';
            quantity_extract_money = quantity_extract_money - 25000;
            money.innerHTML = quantity_extract_money;
            xit_whirlwind = '210';
            test_whirlwind = 4;
            attemps_whirlwind = 5;
            level_whirlwind = '11';
            alert('Вы улучшили Ураганное оружие до 11 уровня. Выберете Ураганное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 40000) {
        if (test_whirlwind === 4) { 
            console.log('upgrade_whirlwind_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 40000;
            money.innerHTML = quantity_extract_money;
            xit_whirlwind = '240'
            upgrade_whirlwind_display.style.display = 'none';
            level_whirlwind = 'max(12)';
            alert('Вы улучшили Ураганное оружие до 12 уровня. Выберете Ураганное оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}

/* Световой */

function upgrade_light() {
    if (quantity_extract_money >= 800) {
        if (attemps_light === 0) {
            console.log('upgrade_light_sword+1_to_+1');
            upgrade_light_display.innerHTML = 'Оружие(Световое): 1500 монет';
            attemps_light = 1;
            quantity_extract_money = quantity_extract_money - 800;
            money.innerHTML = quantity_extract_money;
            xit_light = '50'
            level_light = '3';
            alert('Вы улучшили Световое оружие до 3 уровня. Выберете Световое оружие в списке замен, чтобы обновить статистику.')
        } 
    } else {
        alert('Недостаточно средств.');
    }
    if (quantity_extract_money >= 1500) {
        if (attemps_light === 1) {
            console.log('upgrade_light_sword+1_to_+1');
            upgrade_light_display.innerHTML = 'Оружие(Световое): 3000 монет';
            quantity_extract_money = quantity_extract_money - 1500;
            money.innerHTML = quantity_extract_money;
            xit_light = '65';
            test_light = 1;
            attemps_light = 2;
            level_light = '4';
            alert('Вы улучшили Световое оружие до 4 уровня. Выберете Световое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {
    
    }
    if (quantity_extract_money >= 3000) {
        if (test_light === 1) { 
            console.log('upgrade_light_sword+1_to_max');
            quantity_extract_money = quantity_extract_money - 3000;
            money.innerHTML = quantity_extract_money;
            xit_light = '90'
            upgrade_light_display.style.display = 'none';
            level_light = 'max(5)';
            alert('Вы улучшили Световое оружие до 5 уровня. Выберете Световое оружие в списке замен, чтобы обновить статистику.')
        }
    } else {

    }
}

