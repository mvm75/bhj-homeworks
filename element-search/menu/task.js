const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach((item) => {
    item.onclick = () => {
        const menuItem = item.closest('.menu__item');
        const menuSub = menuItem.querySelector('.menu_sub');
        
        if(menuSub) {
            menuSub.classList.toggle('menu_active');
            return false;
        }
    }
})