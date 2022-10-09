//BURGER

const btnBurger = document.querySelector('.btn-icon');
const openBurgerMenu = document.querySelector('.header__main');
const overlay = document.querySelector('.overlay');
const closeBurgerMenu = document.querySelector('.header__main-close');

btnBurger.addEventListener('click', () => {
  openBurgerMenu.classList.contains('header__main-activ'),
    openBurgerMenu.classList.toggle('header__main-activ');
  overlay.classList.add('overlay-activ');
});
closeBurgerMenu.addEventListener('click', () => {
  openBurgerMenu.classList.remove('header__main-activ');
  overlay.classList.remove('overlay-activ');
});

overlay.addEventListener('click', () => {
  openBurgerMenu.classList.remove('header__main-activ');
  overlay.classList.remove('overlay-activ');
});

// DONATE

// INPUT
const input = document.querySelector('.pickAndFeed__amount-input');
input.value = 100;
input.addEventListener('input', () => {
  // INPUT NUMBER AND ADD ACTIVE DOT
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove('pickAndFeed__amount-item_active');
    if (dot[i].dataset.number.slice(1) == input.value) {
      dot[i].classList.add('pickAndFeed__amount-item_active');
    }
  }
  // LIMIT INPUT MAX 4
  if (input.value.length > 4) {
    input.value = input.value.substr(0, 4);
  }
});

// DOTS
const dot = document.querySelectorAll('.pickAndFeed__amount-item');
for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener('click', () => {
    for (let i = 0; i < dot.length; i++) {
      dot[i].classList.remove('pickAndFeed__amount-item_active');
    }
    dot[i].classList.add('pickAndFeed__amount-item_active');
    input.value = dot[i].dataset.number.slice(1);
  });
}

function getDotsActive() {
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove('pickAndFeed__amount-item_active');
  }
  dot[5].classList.add('pickAndFeed__amount-item_active');
  input.value = 100;
}
window.addEventListener('resize', getDotsActive);
