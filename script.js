const menuList = document.getElementById('menu-list');
const closeMenu = document.querySelector('.x-menu');

function showMenu() {
    menuList.style.display = 'flex';
    closeMenu.style.display = 'block';

    closeMenu.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu.style.display = 'none';
        menuList.style.display = 'none';
    })
};