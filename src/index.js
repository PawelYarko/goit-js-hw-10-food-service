import cardsTpl from './html/templates/cards.hbs'
import cards from './js/menu.json';
import './sass/main.scss';

const menuEl = document.querySelector('.js-menu');
const themeChangeEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

const cardsMarkup = createFoodCards(cards);
menuEl.insertAdjacentHTML('beforeend', cardsMarkup);

themeChangeEl.addEventListener('click', ClickThemeChange);

  function createFoodCards(cards){
    return cardsTpl(cards);
  }

  const Theme = {
      LIGHT: 'light-theme',
      DARK: 'dark-theme',
  };

  savedDataTheme();

 function ClickThemeChange(e){  
  if(e.target.checked === true){
    localStorage.setItem('theme', Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    
  }
  else if(e.target.checked === false){
    localStorage.setItem('theme', Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
    
  }
  savedDataTheme();
  }

  function savedDataTheme (){
    const savedData = localStorage.getItem('theme');
    if(savedData === Theme.DARK){
      themeChangeEl.checked = true;
      // bodyEl.classList.add(savedData);
      console.log(savedData)
  // console.log(themeChangeEl.checked)
    }
    bodyEl.classList.add(savedData);  
  
  }

  

 

