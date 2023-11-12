import { Calender } from '../model/Calender.js';
import { InputView } from '../view/InputView.js';

export class EventPlaner {
  constructor() {
    // TODO: 모든캘린더가 아니라 입력받은 날짜만 메세지로 전달할 필요, 서비스 로직을 추가할 필요
    // 입력 -> 캘린더 -> 서비스로직 -> 특정날짜의 메세지만 반환
    this.calender = new Calender();
  }

  async run() {
    console.log('getter: ', this.calender.getCalender());
    InputView.readGreeting();
    InputView.readDate();
  }
}
