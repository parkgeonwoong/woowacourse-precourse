import { Calender } from '../model/Calender.js';

export class EventPlaner {
  constructor() {
    this.calender = new Calender();
  }

  async run() {
    console.log('getter: ', this.calender.getCalender());
    console.log('privateTest: ', this.calender);
  }
}
