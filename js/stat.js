'use strict';

window.renderStatistics = function(ctx, names, times) {
  var arrHeight = timeInHeight();
  var color = colorInName();

  var xCoord = 150;
  var yCoord = 240;
  var widthColumn = 40;
  var distanceBetweenColumn = 50;

  // ф-я field(color, x, y) рисует поле, на котором отображается статистика
  function field(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 420, 270);
  }

  // ф-я function canvasText(str, x, y) отвечает за отрисовку текста
  function canvasText(str, x, y) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(str, x, y);
  }

// ф-я function rect(color, x, y) отвечает за отрисовку столбцов гистограммы
  function rect(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x, yCoord, widthColumn, y);
  }

  // Ф-я maxInTime(times) определяет максимальное значение времени из массива времён
  function maxInTime(times) {
    var maxTime = 0;
    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }

    return maxTime;
  }

  // Ф-я timeInHeight() создаёт массив значений высот гистограмм в зависимости от
  // значений времён

  function timeInHeight() {
    var arrHeight = [];
    var maxHeight = 150;
    var maxTime = maxInTime(times);

    for (var i = 0; i < times.length; i++) {
      if (times[i] === maxTime) {
        arrHeight.push(maxHeight);
      } else {
        arrHeight.push(Math.ceil(maxHeight * times[i] / maxTime));
      }
    }

    return arrHeight;
  }

  // Ф-я colorInName() создаёт массив значений цветов гистограмм в зависимости от
  // значений имён
  function colorInName() {
    var color = [];

    function randomInteger(min, max) {
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand);
      return rand;
    }

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        color.push('rgba(255, 0, 0, 1)');
      } else {
        color.push('rgb(0, 0,' + randomInteger(0, 255) + ')');
      }
    }

    return color;
  }

  field('rgba(0, 0, 0, 0.7)', 110, 20);
  field('white', 100, 10);
  canvasText('Ура вы победили!', 140, 25);
  canvasText('Список результатов:', 140, 45);

  for (var i = 0; i < 4; i++) {
    canvasText(Math.ceil(times[i]), xCoord, yCoord - arrHeight[i] - 20);
    canvasText(names[i], xCoord, yCoord + 10);
    rect(color[i], xCoord, -arrHeight[i]);
    xCoord = xCoord + distanceBetweenColumn + widthColumn;
  }
}

// window.renderStatistics(ctx, names, times);
