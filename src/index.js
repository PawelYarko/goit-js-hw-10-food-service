import cardsTpl from './html/templates/cards.hbs'
import cards from './js/menu.json';
import './sass/main.scss';

const menuEl = document.querySelector('.js-menu');
const themeChangeEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

const cardsMarkup = createFoodCards(cards);
menuEl.insertAdjacentHTML('beforeend', cardsMarkup);

themeChangeEl.addEventListener('click', ClickThemeChange)

  function createFoodCards(cards){
    return cardsTpl(cards);
  }

  const Theme = {
      LIGHT: 'light-theme',
      DARK: 'dark-theme',
  };

 function ClickThemeChange(e){
    //  const savedDataLight = localStorage.getItem('LIGHT');
    //  if(savedDataLight){
    //      console.log(savedDataLight);
    //  }



    if(themeChangeEl.checked){
        const savedData = localStorage.getItem('LIGHT');
        localStorage.removeItem('DARK');
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
        localStorage.setItem('LIGHT', 'light-theme');
        console.log(parseData)
    }
    else {
        localStorage.removeItem('LIGHT');
        bodyEl.classList.remove(Theme.LIGHT);
        bodyEl.classList.add(Theme.DARK);
        localStorage.setItem('DARK', 'dark-theme');
        
    }
 }

 