import { Calender } from '../model/Calender.js';

export class EventPlaner {
  constructor() {
    // TODO: 모든캘린더가 아니라 입력받은 날짜만 메세지로 전달할 필요, 서비스 로직을 추가할 필요
    this.calender = new Calender();
  }

  async run() {
    console.log('getter: ', this.calender.getCalender());
  }
}
