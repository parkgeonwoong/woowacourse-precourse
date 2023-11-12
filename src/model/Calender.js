import { EVENT_DATE, THIS_MONTH } from '../constants/EventSetting.js';

export class Calender {
  dateList = Array.from({ length: THIS_MONTH.LAST_DATE }, () => ({}));

  constructor() {
    this.makeDateList();
  }

  makeDateList() {
    this.dateList.forEach((_, i) => {
      const getDate = new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH, i + 1).getDate();
      const getDay = new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH, i + 1).getDay();
      this.dateList[i]['date'] = getDate;
      this.dateList[i]['day'] = getDay;
    });
  }
}
