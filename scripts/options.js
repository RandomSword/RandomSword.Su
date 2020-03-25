/* Copyright ©, Все права защищены (нет)*/
var check_code_40 = false;
var all_div = document.getElementById('display_all');
var options = document.getElementById('options');
options.style.display = 'none';




function open_options() {
    options.style.display = 'block';
    all_div.style.display = 'none';
}
function close_options() {
    options.style.display = 'none';
    all_div.style.display = 'block';
}
function rules_after() {
    if (rules_complete === true) {
        button_rules.innerHTML = 'Обучение пройдено!';
    }

}
/* CODES */
var codes = document.getElementById('codes');
codes.style.display = 'none';
var p2_codes = document.getElementById('p2_codes');
function codes_options() {
    options.style.display = 'none';
    all_div.style.display = 'none';
    codes.style.display = 'block';
}
function close_codes() {
    options.style.display = 'block';
    all_div.style.display = 'none';
    codes.style.display = 'none';
}
function codes_check() {
    var input_codes = document.getElementById('input_codes');
    if (input_codes.value === '8503') {
        p2_codes.innerHTML = 'Код совпал! Ваши ресурсы пополнены!';
        quantity_extract_money = 9999999;
        money.innerHTML = quantity_extract_money;
        quantity_extract_cards = 9999999;
        cards.innerHTML = quantity_extract_cards;
        quantity_extract_cristals = 9999999;
        crystals.innerHTML = quantity_extract_cristals;
    } else if (input_codes.value === '_40_') {
        if (check_code_40 === false) {
            check_code_40 = true;
            quantity_extract_cards = quantity_extract_cards + 40;
            cards.innerHTML = quantity_extract_cards;
            button_rules.innerHTML = 'Обучение Пройдено!';
            p2_codes.innerHTML = 'Код совпал! Вы получили 40 карт! (Повторно использовать код вы не сможете :)';
        } else {
            p2_codes.innerHTML = 'Вы уже использовали этот код!';
        }
    } else {
        p2_codes.innerHTML = 'Неверный код!';
    }
    input_codes.value = '';
}
/* SUPPORT */
var support = document.getElementById('support');
support.style.display = 'none';

function support_options() {
    options.style.display = 'none';
    all_div.style.display = 'none';
    support.style.display = 'block';
}
function support_close() {
    options.style.display = 'block';
    all_div.style.display = 'none';
    support.style.display = 'none';
}

var contents_help_off_on = document.getElementById('contents_help_off_on');
contents_help_off_on.style.display = 'none';
var button_rules = document.getElementById('button_rules');

function rules_after() {
    button_rules.innerHTML = 'Обучение пройдено!';
    options.style.display = 'none';
    contents_help_off_on.style.display = 'block';
}