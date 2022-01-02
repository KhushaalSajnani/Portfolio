const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav-li')

let showMenu = false;

function toggleMenu() {
    if(!showMenu){
        navItems.forEach(item=>{item.classList.add('open')})
        nav.classList.add('open')
        menuNav.classList.add('open')
        hamBurger.classList.add('open')
        showMenu=true;
    }else{
        navItems.forEach(item=>{item.classList.remove('open')})
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        hamBurger.classList.remove('open')
        showMenu=false;
    }
}

menuBtn.addEventListener('click',toggleMenu);
