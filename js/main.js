var menuBar = document.querySelector('#menu_bar');
var navSelect = document.querySelector('.nav-select');

navSelect.style.top = '-450px'

menuBar.onclick = function () {
    if (navSelect.style.top == '-450px') {
        navSelect.style.top = '50px';
    } else {
        navSelect.style.top = '-450px'
    }
}