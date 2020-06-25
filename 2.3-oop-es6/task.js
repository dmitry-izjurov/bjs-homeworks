// Задача 1 ------------------------------------------------------------
'Use strict';

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;               // название книги
    this.releaseDate = releaseDate; // дата выпуска
    this.pagesCount = pagesCount;   // количество страниц
    this.state = 100;               // состояние
    this.type = null;               // тип
  }

  fix() {
    this.state = Number(this.state) * 1.5;
  }

  set state(newState) {
    if (Number(newState) && newState > 100) {
      this.stateUp = 100;
    } else if (Number(newState) && newState < 0) {
        this.stateUp = 0;
    } else if (Number(newState)) {
        this.stateUp = newState;
    }
  }

  get state() {
    return this.stateUp;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'book';
      this.author = author;
    }
  }
  
// Класс для романов
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}
  
// Класс для фантастических произведений
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}
  
// Класс для детективов
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}


// Задача 2 ------------------------------------------------------------

class Library {
  constructor(name) {
    this.name = new String(name);   // название библиотеки
    this.books = [];
    this.state = 100;
  }

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i].name === bookName) {
        let deleteBook = this.books[i];
        this.books.splice(i, 1)[0];
        return deleteBook;
      }
    }
    return null;
  }
}


// Задача 3 ------------------------------------------------------------

class StudentLog {
  constructor(name) {
    this.name = name;
    this.scores = [];
  }
  
  getName() {
    return this.name;
  }
  
  addGrade(grade, subject) {
    if (Number(grade) >= 1 && Number(grade) <= 5) {
      this.scoreObj = {};
      this.scoreObj.score = grade;
      this.scoreObj.item = subject;
      this.scores.push(this.scoreObj);
  
      return grade;
        
    } else {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
    }
  }
  
  getAverageBySubject(subject) {
    let totalAv; // Средняя оценка
    let totalMark = 0; // Сумма из оценок

    if (this.scores.length === 0) {
      return 0;
    }

    if (this.scoreObj.item !== subject) {
      return 0;
    }

    for (let i = 0; i < this.scores.length; i++) {
      if (this.scoreObj.item === subject) {
        totalMark += this.scores[i].score;
      }
    }
    totalAv = Number(totalMark / this.scores.length);
    return totalAv;
  }

  getTotalAverage() {
    let totalAv; // Средняя оценка
    let totalMark = 0; // Сумма из оценок
    
    if (this.scores.length === 0) {
      return 0;
    }

    for (let i = 0; i < this.scores.length; i++) {
      totalMark += this.scores[i].score;
    }
    totalAv = Number(totalMark / this.scores.length);
    return totalAv;
  }
}