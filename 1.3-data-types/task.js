// Задача 1 ---------------------------------------------------------------
"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
  // Проверяем ввод данных

  if (Number(percent) && (Number(contribution) || contribution == 0) && Number(amount) && Number(date)) {
    // Тело кредита
    let bodyCredit = amount - contribution;
    
    let month = new Date().getMonth();   // Текущий месяц
    let year = new Date().getFullYear(); // Текущий год
    
    // Считаем количество месяцев
    let monthCredit = (date.getFullYear() - year) * 12 + (date.getMonth() - month);
    
    // Ежемесячный платеж
    let percentD = percent / 100;
    let monthAmount = bodyCredit * (1/12 * percentD + 1/12 * percentD / (((1 + 1/12 * percentD) **  monthCredit) - 1 ));
    
    let totalAmountS = monthAmount * monthCredit;
    let totalAmount = Number(totalAmountS.toFixed(2));

    return totalAmount;
  }

  if (!Number(percent)) {
    console.log(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (!Number(contribution)) {
    console.log(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }
  
  if (!Number(amount)) {
    console.log(`Параметр "Сумма кредита" содержит неправильное значение "${amount}"`);
  }

  if (!Number(date)) {
    console.log(`Параметр "Срок ипотеки" содержит неправильное значение "${date}"`);
  }
}

// Задача 2 ---------------------------------------------------------------

function getGreeting(name) {
  let greeting;
  if (name) {
    greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(`Привет, мир! Меня зовут ${name}`);
  } else {
    greeting = `Привет, мир! Меня зовут Аноним`;
    console.log(`Привет, мир! Меня зовут Аноним`);
  }
  return greeting;
}