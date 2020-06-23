// Задача 1 --------------------------------------------------
'Use strict';

String.prototype.isPalindrome = function() {
  let a = this;
  let palindromeTlc = a.toLowerCase();
  let palindromeTlcAr = [];
  let palindromeTlcArRev = [];

    for (let i = 0; i < palindromeTlc.length; i++) {
      palindromeTlcAr.push(palindromeTlc[i]);
      palindromeTlcArRev.unshift(palindromeTlc[i]);
    }

    function spliceArr (palindromeAr) { 
      for (let i = 0; i < palindromeAr.length; i++) {
        if (palindromeAr[i] == ' ') {
          palindromeAr.splice(i, 1); 
        }
      }
    }

    spliceArr (palindromeTlcAr);
    spliceArr (palindromeTlcArRev);

    for (let i = 0; i < palindromeTlcAr.length; i++) {
      if (palindromeTlcAr[i] !== palindromeTlcArRev[i]) {
        return false;
      }
    }
    return true;
}


// Задача 2 --------------------------------------------------

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
  }
  
  let roundedAverage = Math.round(totalAv);

  return roundedAverage
}


// Задача 3 --------------------------------------------------

function checkBirthday(birthday) {
  let vergict;
  let now = Date.now();
  let birthdayUser = Number(new Date(birthday));
  let diff = now - birthdayUser;
  let age = diff / 31557600000;

  let result = (age >= 18) ? vergict = true : vergict = false;
  return vergict;
}