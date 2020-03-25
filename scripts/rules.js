
var check_rules_complete = false;
var section_1 = document.getElementById('section_1');
var section_2 = document.getElementById('section_2');
var section_3 = document.getElementById('section_3');
var section_4 = document.getElementById('section_4');
var section_5 = document.getElementById('section_5');
var section_6 = document.getElementById('section_6');
var section_7 = document.getElementById('section_7');

section_2.style.display = 'none';
section_3.style.display = 'none';
section_4.style.display = 'none';
section_5.style.display = 'none';
section_6.style.display = 'none';
section_7.style.display = 'none';

function go_section2() {
    section_1.style.display = 'none';
    section_2.style.display = 'block';
}
function go_section3() {
    section_2.style.display = 'none';
    section_3.style.display = 'block';
}
function go_section4() {
    section_3.style.display = 'none';
    section_4.style.display = 'block';
}
function go_section5() {
    section_4.style.display = 'none';
    section_5.style.display = 'block';
}
function go_section6() {
    section_5.style.display = 'none';
    section_6.style.display = 'block';
}
function go_section7() {
    section_6.style.display = 'none';
    section_7.style.display = 'block';
}
function go_finish() {
    section_7.style.display = 'none';
    section_1.style.display = 'block';
    options.style.display = 'block';
    contents_help_off_on.style.display = 'none';
    if (check_rules_complete === false) {
        check_rules_complete = true;
        quantity_extract_cards = quantity_extract_cards + 40;
        cards.innerHTML = quantity_extract_cards;
    }

}


