const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav-block');
const menuLink = document.querySelectorAll('.header__nav-list-link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  burgerMenu.classList.toggle('menu-active');
});

menuLink.forEach((el) => {
  el.addEventListener("click", () => {
    burger.classList.remove('burger-active');
    burgerMenu.classList.remove('menu-active');
  })
});

const btnSearch = document.querySelector('.header__search-btn');
const formSearch = document.querySelector('.header__form');
const closeSearch = document.querySelector('.header__form-btn');

btnSearch.addEventListener('click', () => {
  formSearch.classList.toggle('search-active');
});

closeSearch.addEventListener('click', () => {
  formSearch.classList.remove('search-active');
});

const navLinks = document.querySelectorAll('.header__nav-list-link[data-goto]');
if (navLinks.length > 0) {
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const navLink = e.target;

    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

ymaps.ready(function () {

  var myMap = new ymaps.Map('map', {
      center: [55.769535, 37.639985],
      zoom: 14
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Мы здесь',
      balloonContent: 'Леонтьевский переулок'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-5, -38]
    });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('zoomControl');
});


const validation = new JustValidate('.contacts__form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    fontSize: '9px',
    color: '#ff3030',
  },
  errorFieldStyle: {
    border: '1px solid red',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation

  .addField('.input-name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 знака',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 знаков',
    },
    {
      rule: 'required',
      errorMessage: 'Это обязательное поле для заполнения',
    },
  ])
  .addField('.input-email', [{
      rule: 'required',
      errorMessage: 'Это обязательное поле для заполнения',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);
