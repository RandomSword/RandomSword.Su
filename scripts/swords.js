/* Copyright ©, Все права защищены (нет)*/

/*SWORDS*/

/* наши переменные */
function getRandomInRange2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var class_sword = document.getElementById('class_sword');
var type_sword = document.getElementById('type_sword');
var level_sword = document.getElementById('level_sword');
var xit_user = document.getElementById('xit_user');
/* Это для раздела смены :) */
var fire_sword_replace = document.getElementById('fire_sword_replace');
fire_sword_replace.style.display = 'none';

var classic_sword_replace = document.getElementById('classic_sword_replace');
classic_sword_replace.style.display = 'none';

var electric_sword_replace = document.getElementById('electric_sword_replace');
electric_sword_replace.style.display = 'none';

var paralyzing_sword_replace = document.getElementById('paralyzing_sword_replace');
paralyzing_sword_replace.style.display = 'none';

var winter_sword_replace = document.getElementById('winter_sword_replace');
winter_sword_replace.style.display = 'none';

var poison_sword_replace = document.getElementById('poison_sword_replace');
poison_sword_replace.style.display = 'none';

var frozen_sword_replace = document.getElementById('frozen_sword_replace');
frozen_sword_replace.style.display = 'none';

var iron_sword_replace = document.getElementById('iron_sword_replace');
iron_sword_replace.style.display = 'none';

var sacrificial_sword_replace = document.getElementById('sacrificial_sword_replace');
sacrificial_sword_replace.style.display = 'none';

var pinion_sword_replace = document.getElementById('pinion_sword_replace');
pinion_sword_replace.style.display = 'none';

var whirlwind_sword_replace = document.getElementById('whirlwind_sword_replace');
whirlwind_sword_replace.style.display = 'none';

var light_sword_replace = document.getElementById('light_sword_replace');
light_sword_replace.style.display = 'none';
/* А вот тут список доступных оружий */
var fire_unlock = document.getElementById('fire_unlock');
fire_unlock.style.display = 'none';

var electric_unlock = document.getElementById('electric_unlock');
electric_unlock.style.display = 'none';

var winter_unlock = document.getElementById('winter_unlock');
winter_unlock.style.display = 'none';

var poison_unlock = document.getElementById('poison_unlock');
poison_unlock.style.display = 'none';

var frozen_unlock = document.getElementById('frozen_unlock');
frozen_unlock.style.display = 'none';

var iron_unlock = document.getElementById('iron_unlock');
iron_unlock.style.display = 'none';

var paralyzing_unlock = document.getElementById('paralyzing_unlock');
paralyzing_unlock.style.display = 'none';

var sacrificial_unlock = document.getElementById('sacrificial_unlock');
sacrificial_unlock.style.display = 'none';

var pinion_unlock = document.getElementById('pinion_unlock');
pinion_unlock.style.display = 'none';

var whirlwind_unlock = document.getElementById('whirlwind_unlock');
whirlwind_unlock.style.display = 'none';

var light_unlock = document.getElementById('light_unlock');
light_unlock.style.display = 'none';
/* И улучшения */
var upgrade_fire_display = document.getElementById('upgrade_fire_display');
upgrade_fire_display.style.display = 'none';

var upgrade_electric_display = document.getElementById('upgrade_electric_display');
upgrade_electric_display.style.display = 'none';

var upgrade_winter_display = document.getElementById('upgrade_winter_display');
upgrade_winter_display.style.display = 'none';

var upgrade_poison_display = document.getElementById('upgrade_poison_display');
upgrade_poison_display.style.display = 'none';

var upgrade_frozen_display = document.getElementById('upgrade_frozen_display');
upgrade_frozen_display.style.display = 'none';

var upgrade_iron_display = document.getElementById('upgrade_iron_display');
upgrade_iron_display.style.display = 'none';

var upgrade_paralyzing_display = document.getElementById('upgrade_paralyzing_display');
upgrade_paralyzing_display.style.display = 'none';

var upgrade_pinion_display = document.getElementById('upgrade_pinion_display');
upgrade_pinion_display.style.display = 'none';

var upgrade_whirlwind_display = document.getElementById('upgrade_whirlwind_display');
upgrade_whirlwind_display.style.display = 'none';

var upgrade_light_display = document.getElementById('upgrade_light_display');
upgrade_light_display.style.display = 'none';

/* Такс, теперь займемся заменой оружия))) */
/* Инфа об огненном оружии */
var info_fire = [
    class_fire = 'Огненное',
    type_fire = 'Обычный',
    level_fire = '2',
    xit_fire = '10'
]
/* Инфа об эллектрическом оружии */
var info_electric = [
    class_electric = 'Эллектрический',
    type_electric = 'Обычный',
    level_electric = '2',
    xit_electric = '15'
]
/* Инфа о ветряном оружии */
var info_winter = [
    class_winter = 'Ветряное',
    type_winter = 'Редкий',
    level_winter = '4',
    xit_winter = '30'
]
/* Инфа об ядовитом оружии */
var info_poison = [
    class_poison = 'Ядовитое',
    type_poison = 'Редкий',
    level_poison = '4',
    xit_poison = '25'
]
/* Инфа о ледяном оружии */
var info_frozen = [
    class_frozen = 'Ледяное',
    type_frozen = 'Обычный',
    level_frozen = '2',
    xit_frozen = '15'
]
/* Инфа о железном оружии */
var info_iron = [
    class_iron = 'Железное',
    type_iron = 'Редкий',
    level_iron = '4',
    xit_iron = '40'
]
/* Инфа о параллизующем оружии */
var info_paralyzing = [
    class_paralyzing  = 'Параллизующее',
    type_paralyzing  = 'Обычный',
    level_paralyzing  = '2',
    xit_paralyzing  = '3'
]
/* Инфа о классическом оружии */
var info_classic = [
    class_classic = 'Классическое',
    type_classic = 'Безполезный',
    level_classic = '1',
    xit_classic = '2'
]
/* Инфа о шестереночном оружии */
var info_pinion = [
    class_pinion = 'Шестереночное',
    type_pinion = 'Эпический',
    level_pinion = '6',
    xit_pinion = '80'
]
/* Инфа о жертвенном оружии */
var info_sacrificial = [
    class_sacrificial = 'Жертвенное',
    type_sacrificial = 'Необычный',
    level_sacrificial = 'max(-)',
    xit_sacrificial = getRandomInRange2(50, 100)
]
/* Инфа об ураганном оружии */
var info_whirlwind = [
    class_whirlwind = 'Ураганная',
    type_whirlwind = 'Эпический',
    level_whirlwind = '6',
    xit_whirlwind = '75'
]

/* Инфа о световом оружии */
var info_light = [
    class_light = 'Световая',
    type_light = 'Обычный',
    level_light = '2',
    xit_light = '40'
]
/* Замена огненного оружия */
function replacement_with_fire() {
    class_sword.innerHTML = class_fire;
    type_sword.innerHTML = type_fire;
    level_sword.innerHTML = level_fire;
    xit_user.innerHTML = xit_fire;
}

function replacement_with_classic() {
    class_sword.innerHTML = class_classic;
    type_sword.innerHTML = type_classic;
    level_sword.innerHTML = level_classic;
    xit_user.innerHTML = xit_classic;
}

function replacement_with_electric() {
    class_sword.innerHTML = class_electric;
    type_sword.innerHTML = type_electric;
    level_sword.innerHTML = level_electric;
    xit_user.innerHTML = xit_electric;
}

function replacement_with_winter() {
    class_sword.innerHTML = class_winter;
    type_sword.innerHTML = type_winter;
    level_sword.innerHTML = level_winter;
    xit_user.innerHTML = xit_winter;
}

function replacement_with_poison() {
    class_sword.innerHTML = class_poison;
    type_sword.innerHTML = type_poison;
    level_sword.innerHTML = level_poison;
    xit_user.innerHTML = xit_poison;
}

function replacement_with_frozen() {
    class_sword.innerHTML = class_frozen;
    type_sword.innerHTML = type_frozen;
    level_sword.innerHTML = level_frozen;
    xit_user.innerHTML = xit_frozen;
}

function replacement_with_iron() {
    class_sword.innerHTML = class_iron;
    type_sword.innerHTML = type_iron;
    level_sword.innerHTML = level_iron;
    xit_user.innerHTML = xit_iron;
}

function replacement_with_paralyzing() {
    class_sword.innerHTML = class_paralyzing;
    type_sword.innerHTML = type_paralyzing;
    level_sword.innerHTML = level_paralyzing;
    xit_user.innerHTML = xit_paralyzing;
}

function replacement_with_sacrificial() {
    class_sword.innerHTML = class_sacrificial;
    type_sword.innerHTML = type_sacrificial;
    level_sword.innerHTML = level_sacrificial;
    xit_user.innerHTML = xit_sacrificial;
}
function replacement_with_pinion() {
    class_sword.innerHTML = class_pinion;
    type_sword.innerHTML = type_pinion;
    level_sword.innerHTML = level_pinion;
    xit_user.innerHTML = xit_pinion;
}
function replacement_with_whirlwind() {
    class_sword.innerHTML = class_whirlwind;
    type_sword.innerHTML = type_whirlwind;
    level_sword.innerHTML = level_whirlwind;
    xit_user.innerHTML = xit_whirlwind;
}
function replacement_with_light() {
    class_sword.innerHTML = class_light;
    type_sword.innerHTML = type_light;
    level_sword.innerHTML = level_light;
    xit_user.innerHTML = xit_light;
}

  



