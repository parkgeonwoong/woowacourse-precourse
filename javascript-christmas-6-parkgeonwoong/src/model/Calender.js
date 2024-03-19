import { CALENDER, CHIRSTMAS, EVENT_DATE, THIS_MONTH } from '../constants/Date.js';

export class Calender {
  #calender;

  constructor() {
    this.#initCalender();
    this.#makeCalender();
    this.#makeChristmasDiscount();
    this.#makeIsSpecial();
    this.#makeIsWeekend();
  }

  #initCalender() {
    this.#calender = Array.from({ length: THIS_MONTH.LAST_DATE }, () => ({
      [CALENDER.DATE]: CALENDER.DEFAULT_ZERO,
      [CALENDER.DAY]: CALENDER.DEFAULT_ZERO,
      [CALENDER.CHRISTMAS_DISCOUNT]: CALENDER.DEFAULT_ZERO,
      [CALENDER.IS_SPECIAL]: CALENDER.DEFAULT_FALSE,
      [CALENDER.IS_WEEKEND]: CALENDER.DEFAULT_FALSE,
    }));
  }

  #makeCalender() {
    this.#calender.forEach((_, i) => {
      const getDate = new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH, i + 1).getDate();
      const getDay = new Date(EVENT_DATE.YEAR, EVENT_DATE.MONTH, i + 1).getDay();
      this.#calender[i][CALENDER.DATE] = getDate;
      this.#calender[i][CALENDER.DAY] = getDay;
    });
  }

  #makeChristmasDiscount() {
    this.#calender.forEach((date, i) => {
      if (date.date <= CHIRSTMAS.DAY) {
        this.#calender[i][CALENDER.CHRISTMAS_DISCOUNT] =
          CHIRSTMAS.DISCOUNT + i * CHIRSTMAS.DISCOUNT_STEP;
      }
    });
  }

  #makeIsSpecial() {
    this.#calender.forEach((date, i) => {
      if (date.day === CALENDER.SUNDAY || date.date === CHIRSTMAS.DAY) {
        this.#calender[i][CALENDER.IS_SPECIAL] = true;
      }
    });
  }

  #makeIsWeekend() {
    this.#calender.forEach((date, i) => {
      if (date.day === CALENDER.FRIDAY || date.day === CALENDER.SATURDAY) {
        this.#calender[i][CALENDER.IS_WEEKEND] = true;
      }
    });
  }

  getCalender() {
    return this.#calender;
  }
}
