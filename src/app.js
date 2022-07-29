'use strict';

// Nav variables

const toggleElem = function (e) {
    e.classList.toggle('active');
};

const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

navElemArr.forEach((nav) => {
    nav.addEventListener('click', function () {
        toggleElem(navbar);
        toggleElem(overlay);
    });
});

// Header sticky
const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
    this.scrollY >= 800 ? goTopBtn.classList.add('active') : goTopBtn.classList.remove('active');
});
