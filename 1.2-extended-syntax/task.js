// Задача 1 ------------------------------
"use strict";

function getResult(a,b,c){
  let d = b**2 - 4 * a * c;
  
  let x;
  let r = [];

  if (d > 0) {
    x = (-b + (b**2 - 4 * a * c)**0.5) / (2 * a);
    r[0] = x;
    x = (-b - (b**2 - 4 * a * c)**0.5) / (2 * a);
    r[1] = x;

    return r;
  }

  if (d === 0) {
    x = -b / (2 * a);
    r[0] = x;

    return r;
  }

  if (d < 0) {
    console.log("Нет вещественных корней");
    
    return r;
  }
}

getResult(2,4,3);


// Задача 2 ------------------------------

function getAverageMark(marks){
  let averageMark;
  let totalMark = 0;
  
  function getTotalMark() {
    for (let i = 0; i < marks.length; i++) {
      totalMark = marks[i] + totalMark;
    }
    
    averageMark = totalMark / marks.length;
    
    return averageMark;
  }

  if (marks.length === 0) {
    console.log(`Количество введенных оценок ${marks.length}`);
    averageMark = 0;
    
    return averageMark;
  }

  if (marks.length > 0 && marks.length <= 5) {
    console.log(`Количество введенных оценок ${marks.length}`);
    let resultAverageMark = getTotalMark();
    
    return resultAverageMark;    
  }

  if (marks.length > 5) {
    console.log("Внимание! Количество введенных оценок больше 5. Исходный массив с оценками будет уменьшен до 5");
    console.log(`Количество введенных оценок ${marks.length}`);
    marks.splice(5, marks.length - 5);
    let resultAverageMark = getTotalMark();
    
    return resultAverageMark;
  }
}

let listMarks = [4, 4, 5, 4, 4, 4];
getAverageMark(listMarks);


// Задача 3 ------------------------------

function askDrink(name, dateOfBirthday) {
  const year = new Date().getFullYear();
  let age = year - dateOfBirthday.getFullYear();
  
  let result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  return result;
}