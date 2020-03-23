/* Copyright ©, Все права защищены (нет)*/

/* Уже устал делать игру, потому что никто кроме меня в него никто не будет играть( */
function randElement1(arr) {
    var rand1 = Math.floor(Math.random() * arr.length);
    return elem1[rand1];
}
function randElement2(arr) {
    var rand2 = Math.floor(Math.random() * arr.length);
    return elem2[rand2];
}
function randElement3(arr) {
    var rand3 = Math.floor(Math.random() * arr.length);
    return elem3[rand3];
}

var elem1 = ['Огненное', 'Электрическое', 'Ледяное', 'Параллизующее'];
var elem2 = ['Огненное', 'Электрическое', 'Ледяное', 'Параллизующее', 'Ветряное', 'Ядовитое', 'Железное'];
var elem3 = ['Огненное', 'Электрическое', 'Ледяное', 'Параллизующее', 'Ветряное', 'Ядовитое', 'Железное',
 'Жертвенное', 'Шестереночное', 'Ураганное', 'Световое'];

function buy_cards() {
    if (cards.innerHTML >= 40) {
        if (level.innerHTML === '1') {
            console.log('Reward:');
            quantity_extract_cards = quantity_extract_cards - 40;
            cards.innerHTML = quantity_extract_cards;
            if (randElement1(elem1) === 'Огненное') {
                fire_sword_replace.style.display = 'block';
                fire_unlock.style.display = 'block';
                upgrade_fire_display.style.display = 'block';
                console.log('fire_sword++');
            }
            if (randElement1(elem1) === 'Электрическое') {
                electric_sword_replace.style.display = 'block';
                electric_unlock.style.display = 'block';
                upgrade_electric_display.style.display = 'block';
                console.log('electric_sword++');
            }
            if (randElement1(elem1) === 'Ледяное') {
                frozen_sword_replace.style.display = 'block';
                frozen_unlock.style.display = 'block';
                upgrade_frozen_display.style.display = 'block';
                console.log('frozen_sword++');
            }
            if (randElement1(elem1) === 'Параллизующее') {
                paralyzing_sword_replace.style.display = 'block';
                paralyzing_unlock.style.display = 'block';
                upgrade_paralyzing_display.style.display = 'block';
                console.log('paralyzing_sword++');
            }
            classic_sword_replace.style.display = 'block';
        }
        if (level.innerHTML === '2') {
            console.log('Reward:');
            quantity_extract_cards = quantity_extract_cards - 40;
            cards.innerHTML = quantity_extract_cards;
            if (randElement1(elem1) === 'Огненное') {
                fire_sword_replace.style.display = 'block';
                fire_unlock.style.display = 'block';
                upgrade_fire_display.style.display = 'block';
                console.log('fire_sword++');
            }
            if (randElement1(elem1) === 'Электрическое') {
                electric_sword_replace.style.display = 'block';
                electric_unlock.style.display = 'block';
                upgrade_electric_display.style.display = 'block';
                console.log('electric_sword++');
            }
            if (randElement1(elem1) === 'Ледяное') {
                frozen_sword_replace.style.display = 'block';
                frozen_unlock.style.display = 'block';
                upgrade_frozen_display.style.display = 'block';
                console.log('frozen_sword++');
            }
            if (randElement1(elem1) === 'Параллизующее') {
                paralyzing_sword_replace.style.display = 'block';
                paralyzing_unlock.style.display = 'block';
                upgrade_paralyzing_display.style.display = 'block';
                console.log('paralyzing_sword++');
            }
            classic_sword_replace.style.display = 'block';
        }
        if (level.innerHTML === '3') {
            console.log('Reward:');
            quantity_extract_cards = quantity_extract_cards - 40;
            cards.innerHTML = quantity_extract_cards;
            if (randElement1(elem1) === 'Огненное') {
                fire_sword_replace.style.display = 'block';
                fire_unlock.style.display = 'block';
                upgrade_fire_display.style.display = 'block';
                console.log('fire_sword++');
            }
            if (randElement1(elem1) === 'Электрическое') {
                electric_sword_replace.style.display = 'block';
                electric_unlock.style.display = 'block';
                upgrade_electric_display.style.display = 'block';
                console.log('electric_sword++');
            }
            if (randElement1(elem1) === 'Ледяное') {
                frozen_sword_replace.style.display = 'block';
                frozen_unlock.style.display = 'block';
                upgrade_frozen_display.style.display = 'block';
                console.log('frozen_sword++');
            }
            if (randElement1(elem1) === 'Параллизующее') {
                paralyzing_sword_replace.style.display = 'block';
                paralyzing_unlock.style.display = 'block';
                upgrade_paralyzing_display.style.display = 'block';
                console.log('paralyzing_sword++');
            }
            classic_sword_replace.style.display = 'block';
        }
    }
    if (level.innerHTML === '4') {
        console.log('Reward:');
        quantity_extract_cards = quantity_extract_cards - 40;
        cards.innerHTML = quantity_extract_cards;
        if (randElement2(elem2) === 'Огненное') {
            fire_sword_replace.style.display = 'block';
            fire_unlock.style.display = 'block';
            upgrade_fire_display.style.display = 'block';
            console.log('fire_sword++');
        }
        if (randElement2(elem2) === 'Электрическое') {
            electric_sword_replace.style.display = 'block';
            electric_unlock.style.display = 'block';
            upgrade_electric_display.style.display = 'block';
            console.log('electric_sword++');
        }
        if (randElement2(elem2) === 'Ледяное') {
            frozen_sword_replace.style.display = 'block';
            frozen_unlock.style.display = 'block';
            upgrade_frozen_display.style.display = 'block';
            console.log('frozen_sword++');
        }
        if (randElement2(elem2) === 'Параллизующее') {
            paralyzing_sword_replace.style.display = 'block';
            paralyzing_unlock.style.display = 'block';
            upgrade_paralyzing_display.style.display = 'block';
            console.log('paralyzing_sword++');
        }

        if (randElement2(elem2) === 'Ветряное') {
            winter_sword_replace.style.display = 'block';
            winter_unlock.style.display = 'block';
            upgrade_winter_display.style.display = 'block';
            console.log('winter_sword++');
        }

        if (randElement2(elem2) === 'Ядовитое') {
            poison_sword_replace.style.display = 'block';
            poison_unlock.style.display = 'block';
            upgrade_poison_display.style.display = 'block';
            console.log('poison_sword++');
        }

        if (randElement2(elem2) === 'Железное') {
            iron_sword_replace.style.display = 'block';
            iron_unlock.style.display = 'block';
            upgrade_iron_display.style.display = 'block';
            console.log('iron_sword++');
            classic_sword_replace.style.display = 'block';
        }
    }
    if (level.innerHTML === '5') {
        console.log('Reward:');
        quantity_extract_cards = quantity_extract_cards - 40;
        cards.innerHTML = quantity_extract_cards;
        if (randElement3(elem3) === 'Огненное') {
            fire_sword_replace.style.display = 'block';
            fire_unlock.style.display = 'block';
            upgrade_fire_display.style.display = 'block';
            console.log('fire_sword++');
        }
        if (randElement3(elem3) === 'Электрическое') {
            electric_sword_replace.style.display = 'block';
            electric_unlock.style.display = 'block';
            upgrade_electric_display.style.display = 'block';
            console.log('electric_sword++');
        }
        if (randElement2(elem2) === 'Ледяное') {
            frozen_sword_replace.style.display = 'block';
            frozen_unlock.style.display = 'block';
            upgrade_frozen_display.style.display = 'block';
            console.log('frozen_sword++');
        }
        if (randElement3(elem2) === 'Параллизующее') {
            paralyzing_sword_replace.style.display = 'block';
            paralyzing_unlock.style.display = 'block';
            upgrade_paralyzing_display.style.display = 'block';
            console.log('paralyzing_sword++');
        }

        if (randElement2(elem3) === 'Ветряное') {
            winter_sword_replace.style.display = 'block';
            winter_unlock.style.display = 'block';
            upgrade_winter_display.style.display = 'block';
            console.log('winter_sword++');
        }

        if (randElement3(elem3) === 'Ядовитое') {
            poison_sword_replace.style.display = 'block';
            poison_unlock.style.display = 'block';
            upgrade_poison_display.style.display = 'block';
            console.log('poison_sword++');
        }

        if (randElement3(elem3) === 'Железное') {
            iron_sword_replace.style.display = 'block';
            iron_unlock.style.display = 'block';
            upgrade_iron_display.style.display = 'block';
            console.log('iron_sword++');
        }

        if (randElement3(elem3) === 'Жертвенное') {
            sacrificial_sword_replace.style.display = 'block';
            sacrificial_unlock.style.display = 'block';
            console.log('sacrificial_sword++');
        }
        if (randElement3(elem3) === 'Шестереночное') {
            pinion_sword_replace.style.display = 'block';
            pinion_unlock.style.display = 'block';
            upgrade_pinion_display.style.display = 'block';
            console.log('pinion_sword++');
        }
        if (randElement3(elem3) === 'Ураганное') {
            whirlwind_sword_replace.style.display = 'block';
            whirlwind_unlock.style.display = 'block';
            upgrade_whirlwind_display.style.display = 'block';
            console.log('whirlwind_sword++');
        }
        if (randElement3(elem3) === 'Световое') {
            light_sword_replace.style.display = 'block';
            light_unlock.style.display = 'block';
            upgrade_light_display.style.display = 'block';
            console.log('light_sword++');
        }
        classic_sword_replace.style.display = 'block';
    }
} 