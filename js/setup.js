'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');

// При нажатии на меню .setup-open удаляем класс invisible
// у окна .setup

var ENTER_KEY_KODE = 13;
var ESCAPE_KEY_KODE = 27;

// ф-я openSetup() обрабатывает открытие окна изменения персонажа

function openSetup() {
  setup.classList.remove('invisible');
  setup.setAttribute('aria-hidden', true);
  setupOpenIcon.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
}

// ф-я closeSetup() обрабатывает закрытие окна изменения персонажа

function closeSetup() {
  setup.classList.add('invisible');
  setup.setAttribute('aria-hidden', false);
  setupOpenIcon.setAttribute('aria-pressed', false);
  setupClose.setAttribute('aria-pressed', true);
}

setupOpen.addEventListener('click', function() {
  openSetup();

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === ESCAPE_KEY_KODE) {
      closeSetup();
    }
  })
});

setupOpen.addEventListener('keypress', function(event) {
  if (event.keyCode === ENTER_KEY_KODE) {
    openSetup();
  }

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === ESCAPE_KEY_KODE) {
      closeSetup();
    }
  })
});

// При нажатии на .setup-close добавляем класс invisible
// окну .setup

setupClose.addEventListener('click', function() {
  closeSetup();
});

setupClose.addEventListener('keydown', function(event) {
  if (event.keyCode === ENTER_KEY_KODE) {
    closeSetup();
  }
});

// При нажатии на кнопку Сохранить .setup-submit добавляем окну класс invisible

var saveBtn = document.querySelector('.setup-submit');

saveBtn.addEventListener('click', function(event) {
  event.preventDefault();
  closeSetup();
})

saveBtn.addEventListener('keydown', function(event) {
  if (event.keyCode === ENTER_KEY_KODE) {
    event.preventDefault();
    closeSetup();
  }
})

// Реализуем алогоритм смены цвета мантии #wizard-coat волшебника

var wizardCoatCoLor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardCoat = document.querySelector('#wizard-coat');

wizardCoat.addEventListener('click', function() {
  var colorCoatNumber = Math.floor(Math.random() * wizardCoatCoLor.length);
  wizardCoat.style.fill = wizardCoatCoLor[colorCoatNumber];
})

// Реализуем алгоритм смены цвета глаз #wizard-eyes волшебника

var wizardEyesColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var wizardEyes = document.querySelector('#wizard-eyes');

wizardEyes.addEventListener('click', function() {
  var colorEyesNumber = Math.floor(Math.random() * wizardEyesColor.length);
  wizardEyes.style.fill = wizardCoatCoLor[colorEyesNumber];
});

// Реализуем алгоритм смены цвета фаербола .setup-fireball-wrap волшебника

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupFireball = document.querySelector('.setup-fireball');

setupFireball.addEventListener('click', function() {
  var fireballColorNumber = Math.floor(Math.random() * fireballColor.length);
  setupFireballWrap.style.background = fireballColor[fireballColorNumber];
});
