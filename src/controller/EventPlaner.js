import { Calender } from '../model/Calender.js';

export class EventPlaner {
  constructor() {
    this.calender = new Calender();
  }

  async run() {
    console.log('Calender: ', this.calender.getCalender());
  }
}
