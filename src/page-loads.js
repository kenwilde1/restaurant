import { loadImage, loadSummary } from './home';
import loadContactPage from './contact';
import loadMenuPage from './menu';

const loadNavBar = ( ()  => {

    const contentContainer = document.querySelector('#content');
    const navBarDiv = document.createElement('div');
    navBarDiv.id = 'nav-bar';

    const homeTab = document.createElement('a');
    homeTab.innerHTML = 'Home';
    homeTab.id = 'home-tab';

    const menuTab = document.createElement('a');
    menuTab.innerHTML = 'Menu';
    menuTab.id = 'menu-tab';

    const contactTab = document.createElement('a');
    contactTab.innerHTML = 'Contact';
    contactTab.id = 'contact-tab';

    navBarDiv.appendChild(homeTab);
    navBarDiv.appendChild(menuTab);
    navBarDiv.appendChild(contactTab);

    contentContainer.appendChild(navBarDiv);

})();

const loadHome = () => {
    loadImage();
    loadSummary();
}

const loadContact = () => {
    loadContactPage();
}

const loadMenu = () => {
    loadMenuPage();
}

export { loadHome, loadContact, loadMenu }