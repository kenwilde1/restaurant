import loadMenuPage from './menu';
import {loadHome, loadContact, loadMenu} from './page-loads';

const tabSwitch = (() => {

    loadHome();

    const contentContainer = document.querySelector('#content');

    // clear everything except first child element -> last child element is the nav bar
    const clearPage = () => {
        while (contentContainer.childElementCount > 1) {
            contentContainer.removeChild(contentContainer.lastChild);
        }
    }

    const navBarDiv = document.querySelector('#nav-bar');

    const tabs = navBarDiv.querySelectorAll('a');
    tabs.forEach(tab => tab.addEventListener('click', (e) => {

        clearPage();

        switch(tab.id) {
            case 'home-tab':
                loadHome();
                break;
            case 'contact-tab':
                loadContact();
                break;
            case 'menu-tab':
                loadMenu();
                break;
        }

    }));

    console.log(contentContainer);

})();

