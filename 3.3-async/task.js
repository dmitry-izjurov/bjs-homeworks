'Use strict';

class AlarmClock {
  constructor() {
    this.alarmCollection = [];             // свойство для хранения коллекции звонков
    this.timerId = null;                   // свойство для хранения id таймера
  }

  addClock(time, fn, idCall) {
    if (isNaN(idCall)) {
      throw new Error('error text');
    }

    if (this.alarmCollection.find( a => a.id === idCall)) {
      return console.error('Звонок с таким id уже существует');
    }
    
    this.alarmCollection.push({id: idCall, time: time, callback: fn});
  }

  removeClock(idCall) {
    if (this.alarmCollection.find(a => a.id === idCall)) {
      this.alarmCollection.splice(this.alarmCollection.findIndex(a => a.id === idCall), 1);
      return true;
    }

    return false;
  }

  getCurrentFormattedTime() {
    let time = new Date();

    let hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setInterval( () => this.alarmCollection.forEach(a => {if (a.time === getCurrentFormattedTime()) {
      return a.callback();
      }}) , 60000 );
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(a => console.log(`Таймер: ${a.id}, время ${a.time}`));
  }

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection.splice(0);
  }
}

function testCase() {
  console.time('1');
  
  const AlarmClockObj = new AlarmClock;
  AlarmClockObj.addClock('22:22', () => console.log('Привет!'), 1);
  AlarmClockObj.addClock('22:23', () => {console.log('И тебе Привет!'); AlarmClockObj.removeClock(2)}, 2);
  AlarmClockObj.addClock('22:24', () => {console.log('Всем Привет!'); 
  AlarmClockObj.clearAlarms(); AlarmClockObj.printAlarms()}, 3);
  AlarmClockObj.start();

  console.timeEnd('1');
}