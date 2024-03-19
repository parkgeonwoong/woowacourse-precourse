import { Calender } from '../model/Calender.js';

export class VisitDateService {
  #calender;
  #visitDate;

  constructor(visitDate) {
    this.#calender = new Calender();
    this.#visitDate = Number(visitDate);
  }

  #findVisitDate() {
    const visitDate = this.#calender.getCalender().find((date) => date.date === this.#visitDate);
    return visitDate;
  }

  getVisitDate() {
    return this.#findVisitDate();
  }
}
