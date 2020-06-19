// Задача 1 --------------------------------------------------
"use strict";

function getSolutions(a, b, c) {
  // Значение дискриминанта
  let D = b**2 - 4 * a * c;

  if (D < 0) {   
    
    return {'D': D, 'roots': []};
  }

  if (D === 0) {
    let x1 = -b / (2 * a);
    
    return {'D': D, 'roots': [x1]};
  }

  if (D > 0) {
    let x1 = (-b + (b**2 - 4 * a * c)**0.5) / (2 * a);
    let x2 = (-b - (b**2 - 4 * a * c)**0.5) / (2 * a);
    
    return {'D': D, 'roots': [x1, x2]};
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  }

  if (result.D === 0) {
    console.log(`Уравнение имеет один корень X1 = ${result.roots[0]}`);
  }

  if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`);
  }
}

// Задача 2 --------------------------------------------------
let dataObject = {algebra: [3, 2, 4], russian: [5, 3]};

function getAverageScore(data) {
  let average;                   // Средняя по всем оценкам
  let averageMark;               // Средняя оценка по предмету
  let tolalAverageMark = 0;      // Сумма из средних оценок
  let tolalAverageMarkCount = 0; // Длина массива
  let objectMarks = {};          // Объект с оценками и средней

  if (Object.keys(data).length === 0) {
    return {average: 0};
  }

  if (Object.keys(data).length > 0) {

    for (let prop in data) {
    
      let value = data[prop];
      averageMark = getAverageMark(value);
    
      tolalAverageMarkCount += 1;
      tolalAverageMark += averageMark;
      objectMarks[prop] = averageMark;
    }

    average = Number(tolalAverageMark / tolalAverageMarkCount);
    objectMarks.average = average;
    return objectMarks;
  }
}

function getAverageMark(marks) {  
  let totalAv; // Средняя оценка
  
  if (marks.length === 0) {
    return 0;
  }

  if (marks.length > 0) {
    let totalMark = 0; // Сумма из оценок

    for (let i = 0; i < marks.length; i++) {
      totalMark += marks[i];
    }
    totalAv = Number(totalMark / marks.length);
    return totalAv;
  }
}

// Задача 3 --------------------------------------------------

function getPersonData(secretData) {
  return {firstName: getDecodedValue(1), lastName: getDecodedValue(0)}
}

function getDecodedValue(secret) {
  if (Number(secret) === 0) {
    return 'Родриго';
  }

  if (Number(secret) === 1) {
    return 'Эмильо';
  }
}