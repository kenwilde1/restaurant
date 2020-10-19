const loadMenuPage = () => {

    const contentContainer = document.querySelector('#content');
    const menuContainer = document.createElement('div');
    const menuList = document.createElement('li');

    const menuLink = document.createElement('ul');
    menuLink.innerHTML = `<a href='https://sophies.ie/menus'> Menu </a>`;

    menuList.appendChild(menuLink);
    menuContainer.appendChild(menuList);
    contentContainer.appendChild(menuContainer);

}

export default loadMenuPage;