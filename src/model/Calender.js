import { CALENDER, EVENT_DATE, THIS_MONTH } from '../constants/EventSetting.js';

export class Calender {
  calender = Array.from({ length: THIS_MONTH.LAST_DATE }, () => ({}));

  constructor() {
    this.makeCalender();
    this.makeChristmasDiscount();
  }

  makeCalender() {
    this.calender.forEach((_, i) => {
      const getDate = new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH, i + 1).getDate();
      const getDay = new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH, i + 1).getDay();
      this.calender[i][CALENDER.DATE] = getDate;
      this.calender[i][CALENDER.DAY] = getDay;
    });
  }

  makeChristmasDiscount() {
    this.calender.forEach((date, i) => {
      this.calender[i][CALENDER.CHRISTMAS_DISCOUNT] = date.date < 26 ? 1000 + i * 100 : 0;
    });
  }
}
