// Задача 1 ------------------------------------------------
'Use strict';

function parseCount(nubmer) {
  let parseNumber = Number.parseInt(nubmer);
  if (isNaN(parseNumber)) {
    throw new Error('Невалидное значение');
  } else {
    return parseNumber;
  }
}

function validateCount(nubmer) {
  try {
    const parseNumber = parseCount(nubmer);
    return parseNumber;
  } catch(e) {
    return e;
  }
}

// Задача 2 ------------------------------------------------

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    let sumAB = this.a + this.b;
    let sumBC = this.b + this.c;
    let sumAC = this.a + this.c;

    if (sumAB < this.c || sumBC < this.a || sumAC < this.b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return Number(perimeter);
  }

  getArea() {
    let halfMeter = (this.a + this.b + this.c) / 2;
    let area = ((halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c)) ** 0.5).toFixed(3);
    return Number(area);
  }
}

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch {
    const err = { getPerimeter: function () {
      return 'Ошибка! Неправильный треугольник'
      }, 
                  getArea: function () {
      return 'Ошибка! Неправильный треугольник'
      }
    };
   
    return err;
  }
}