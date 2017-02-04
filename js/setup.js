'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

// При нажатии на меню .setup-open удаляем класс invisible
// у окна .setup

setupOpen.addEventListener('click', function() {
  setup.classList.remove('invisible');
});

// При нажатии на .setup-close добавляем класс invisible
// окну .setup

setupClose.addEventListener('click', function() {
  setup.classList.add('invisible');
});

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
