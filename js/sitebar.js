document.addEventListener('DOMContentLoaded', () => {
    const menuButton1 = document.querySelector('.sitebar__menu-button');
    const menuList1 = document.querySelector('.sitebar__menu-list');

    menuButton1.textContent = 'Navigation';
    menuList1.style.display = 'block';

    menuButton1.addEventListener('click', () => {
        if (menuList1.style.display === 'block') {
            menuList1.style.display = 'none';
            menuButton1.classList.add('arrow--rotated');
            menuButton1.textContent = 'Lorem Ipsum';
        } else {
            menuList1.style.display = 'block';
            menuButton1.classList.remove('arrow--rotated');
            menuButton1.textContent = 'Lorem Ipsum';
        }
    });

    const menuButton2 = document.querySelector('.sitebar__item.sitebar__menu.mob .sitebar__menu-button');
    const menuList2 = document.querySelector('.sitebar__item.sitebar__menu.mob .sitebar__menu-list');

    menuList2.style.display = 'none';

    menuButton2.addEventListener('click', () => {
        if (menuList2.style.display === 'none') {
            menuList2.style.display = 'block';
            menuButton2.classList.add('arrow--rotated');
        } else {
            menuList2.style.display = 'none';
            menuButton2.classList.remove('arrow--rotated');
        }
    });
});