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
    function checkClock (alarmCollectionObj) {
      if (alarmCollectionObj.time === getCurrentFormattedTime()) {
        return alarmCollectionObj.callback();
      }
    }

    if (this.timerId === null) {
      function printCheckClock() {
        this.alarmCollection.forEach(a => checkClock(a));
      }
      this.timerId = setInterval( printCheckClock , 60000 );
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